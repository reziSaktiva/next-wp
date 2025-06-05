import { NextRequest, NextResponse } from "next/server";
import { loadArticlesCSV } from "@/lib/csv";
import { uploadImage, createPost, handleContentImages } from "@/lib/wp";

export async function GET(req: NextRequest) {
  const offset = parseInt(req.nextUrl.searchParams.get("offset") || "0");
  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "1");

  const articles = await loadArticlesCSV(offset, limit);
  let lastIndex = offset;

  for (const article of articles) {
    let featuredMediaId: number | undefined;

    if (article.feature_image) {
      const response = await uploadImage(article.feature_image);
      featuredMediaId = response.id;
    }

    const updatedContent = await handleContentImages(article.content);
    const post = await createPost(article, updatedContent, featuredMediaId);
    lastIndex++;
    console.log(
      `blogs uploaded: ${post.slug} - ${lastIndex}/${offset + limit}`
    );
  }

  return NextResponse.json({
    success: true,
    migrated: articles.length,
    nextOffset: lastIndex,
  });
}
