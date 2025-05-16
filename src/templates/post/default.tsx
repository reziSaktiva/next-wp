import type { Post } from "types/post";
import Edges from "@/components/edges";
import { BlockAssets } from "@/components/assets/block-assets";

interface DefaultPostTemplateProps {
  uri: string;
  data: Post;
}

export function DefaultPostTemplate({ uri, data }: DefaultPostTemplateProps) {
  return (
    <Edges className="mx-auto max-w-7xl overflow-hidden py-8 px-6 lg:px-8">
      <h1>{uri}</h1>

      <BlockAssets content={data.content.rendered}>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          suppressHydrationWarning
        />
      </BlockAssets>
    </Edges>
  );
}
