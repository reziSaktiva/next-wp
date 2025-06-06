import Link from "next/link";
import Image from "next/image";
import {
  type TemplateProps,
  stripWpUrl,
  swapWpUrl,
  getFeaturedImage,
} from "@nextwp/core";
import type { ArchivePageData } from "@nextwp/core/src/api/get-page-data/get-archive-page";
import type { Post } from "types/post";
import { Badge } from "@/components/ui/badge";
import Edges from "@/components/edges";
import { ArchivePagination } from "@/components/template-parts/archive-pagination";

interface BlogArchiveData extends Omit<ArchivePageData, "items"> {
  items?: Post[];
}

interface BlogArchive extends Omit<TemplateProps, "data"> {
  data: BlogArchiveData;
}

export function PostArchive(props: BlogArchive) {
  const {
    data: {
      items,
      page,
      prevPage,
      nextPage,
      totalItems,
      totalPages,
      currentPage,
    },
  } = props;

  return (
    <Edges>
      <h1 className="mb-5">{page?.title?.rendered}</h1>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {items?.map((post: Post) => {
          const featuredImage = getFeaturedImage(post);

          return (
            <article
              className="flex flex-col items-start justify-between"
              key={post.id}
            >
              <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
                {featuredImage?.url ? (
                  <Image
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    fill
                    src={featuredImage.url}
                  />
                ) : null}

                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500" dateTime={post.date || ""}>
                    {post.date}
                  </time>

                  {post?._embedded?.["wp:term"]?.map((tax) => {
                    return tax?.map((term, index) => {
                      return (
                        <Link href={stripWpUrl(term.link)} key={index}>
                          <Badge>{term.name}</Badge>
                        </Link>
                      );
                    });
                  })}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={swapWpUrl(post.link)}>
                      <span className="absolute inset-0" />
                      {post.title.rendered}
                    </Link>
                  </h3>
                  <div
                    className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  />
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Link
                    href={stripWpUrl(post?._embedded?.author?.[0].link || "")}
                  >
                    <Image
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-100"
                      height={40}
                      quality={100}
                      src={
                        post?._embedded?.author?.[0]?.avatar_urls?.["96"] || ""
                      }
                      width={40}
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post?._embedded?.author?.[0].name}
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex justify-between gap-x-2 border-t pt-5 mt-5 items-center">
        <ArchivePagination
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          totalItems={totalItems}
          totalPages={totalPages}
        />
      </div>
    </Edges>
  );
}
