import { JSDOM } from "jsdom";
import axios from "axios";
import FormData from "form-data";
import path from "path";
import puppeteer from "puppeteer";
import fs from "fs";
import os from "os";
import crypto from "crypto";

const WP_API = process.env.WORDPRESS_API_URL!;
const WP_APPLICATION_PASSWORD = process.env.WP_APPLICATION_PASSWORD!;
const auth = Buffer.from(`${WP_APPLICATION_PASSWORD}`).toString("base64");

export async function uploadImage(imageUrl: string) {
  const filename = path.basename(imageUrl);
  const tmpDir = os.tmpdir(); // cross-platform temp directory
  const filepath = path.join(tmpDir, filename);

  // Download image with Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    channel: "chrome",
  });
  const page = await browser.newPage();
  const res = await page.goto(imageUrl, { waitUntil: "networkidle2" });

  if (!res || !res.ok()) {
    await browser.close();
    throw new Error("Gagal fetch gambar");
  }

  const buffer = await res.buffer();
  fs.writeFileSync(filepath, buffer);
  await browser.close();

  // Upload to WordPress
  const form = new FormData();
  form.append("file", fs.createReadStream(filepath));

  // Upload ke media endpoint WordPress
  const response = await axios.post(`${WP_API}/media`, form, {
    headers: {
      ...form.getHeaders(),
      Authorization: `Basic ${auth}`,
    },
  });

  return response.data;
}

export async function handleContentImages(htmlContent: string) {
  const dom = new JSDOM(htmlContent);
  const images = Array.from(dom.window.document.querySelectorAll("img"));

  images.forEach(async (img) => {
    const imageUrl = img.getAttribute("src");

    if (imageUrl) {
      const response = await uploadImage(imageUrl);

      if (response.id) {
        img.setAttribute("src", response.source_url);
      }
    }
  });

  return dom.serialize();
}

async function createUserIfNotExists(author: string) {
  try {
    const existingUser = await getUserByUsername(author);
    if (existingUser) {
      console.log(`User ${author} already exists`);
      return existingUser;
    }
    const password = crypto.randomBytes(8).toString("hex");

    const email = `${author.toLowerCase().replace(/\s+/g, "")}@example.com`;

    const user = await createUser(author, email, password);
    console.log(`User ${author} created`);
    return user;
  } catch (error) {
    console.error(`Error handling user ${author}:`, error);
  }
}

export async function createPost(
  article: any,
  updatedContent?: string,
  featuredMediaId?: number
) {
  // Format tanggal ke format yang diterima WordPress (YYYY-MM-DDTHH:mm:ss)
  const formatDate = (dateString: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null;
    return date.toISOString();
  };

  const user = await createUserIfNotExists(article.author);

  const postData: {
    title: any;
    content: any;
    excerpt: any;
    slug: any;
    status: string;
    author: number;
    featured_media?: number;
    date?: string;
    modified?: string;
    acf?: any;
  } = {
    title: article.title,
    content: updatedContent || article.content,
    excerpt: article.excerpt,
    slug: article.slug,
    status: article.isPublished === "1" ? "publish" : "draft",
    author: user.id,
    ...(featuredMediaId && { featured_media: featuredMediaId }),
  };

  // Hanya tambahkan date jika valid
  const createdAtDate = formatDate(article.createdAt);
  const updatedAtDate = formatDate(article.updatedAt);
  if (createdAtDate) {
    postData.date = createdAtDate;
  }
  if (updatedAtDate) {
    postData.modified = updatedAtDate;
  }

  const res = await fetch(`${WP_API}/posts`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  const json = await res.json();

  if (!res.ok) {
    console.error("Error creating post:", json);
    throw new Error(json.message || "Failed to create post");
  }

  return json;
}

export async function getUserByUsername(username: string) {
  const res = await fetch(
    `${WP_API}/users?search=${encodeURIComponent(username)}`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  const users = await res.json();

  if (!res.ok) {
    console.error("Error searching for user:", users);
    throw new Error(users.message || "Failed to search for user");
  }

  return users.find((user: any) => user.name === username);
}

export async function createUser(
  username: string,
  email: string,
  password: string
) {
  const userData = {
    username,
    email,
    password,
    roles: ["author"],
  };

  const res = await fetch(`${WP_API}/users`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const json = await res.json();

  if (!res.ok) {
    console.error("Error creating user:", json);
    throw new Error(json.message || "Failed to create user");
  }

  return json;
}
