import fs from "fs";
import path from "path";
import { parse } from "csv-parse";

interface Article {
  id: string;
  feature_image: string;
  title: string;
  author: string;
  metaTitle: string;
  tags: string;
  slug: string;
  content: string;
  excerpt: string;
  isPublished: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export async function loadArticlesCSV(
  offset: number,
  limit: number
): Promise<Article[]> {
  const filePath = path.join(process.cwd(), "public", "blogs.csv");
  const results: Article[] = [];

  return new Promise((resolve, reject) => {
    let current = 0;
    let isFirstRow = true;

    fs.createReadStream(filePath)
      .pipe(parse())
      .on("data", (data: string[]) => {
        if (isFirstRow) {
          isFirstRow = false;
          return;
        }
        if (current >= offset && results.length < limit) {
          results.push({
            id: data[0],
            feature_image: `https://servers-minecraft.net/features/${data[1]}`,
            title: data[2],
            author: data[3],
            metaTitle: data[4],
            tags: data[5],
            slug: data[6],
            content: data[7],
            excerpt: data[8],
            isPublished: data[9],
            createdAt: data[10],
            updatedAt: data[11],
            publishedAt: data[12],
          });
        }
        current++;
      })
      .on("end", () => resolve(results))
      .on("error", reject);
  });
}
