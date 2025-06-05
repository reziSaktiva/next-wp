import {
  WordpressTemplate,
  generateStaticParams as nextWpStaticParams,
} from "@nextwp/core";
import templates from "@/templates";

export default async function PageRoute(props: {
  params: Promise<{ paths: string[] }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  if (!params.paths) {
    params.paths = ["/blogs"];
  }

  if (params.paths[0] === "blogs") {
    params.paths = ["/"];
  }

  if (!isNaN(Number(params.paths[0]))) {
    params.paths = ["/blogs", params.paths[0]];
  }

  return (
    <WordpressTemplate
      params={params}
      searchParams={searchParams}
      templates={templates}
    />
  );
}
export { generateMetadata } from "@nextwp/core";

export async function generateStaticParams() {
  return nextWpStaticParams({
    postTypes: ["pages", "posts"],
  });
}
