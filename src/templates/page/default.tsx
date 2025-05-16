import { FlexibleContent, type WpPage } from "@nextwp/core";
import * as blocks from "@/components/blocks";

import { type HeroProps } from "@/components/blocks/hero";
import { type TextareaProps } from "@/components/blocks/textarea";

type Block = HeroProps | TextareaProps;
interface PageData extends WpPage {
  acf?: {
    modules?: Block[];
  };
}

export function DefaultPageTemplate({ data }: { data: PageData }) {
  console.log("Full page data:", data);
  console.log("ACF data:", data?.acf);
  console.log("Modules:", data?.acf?.modules);

  return <FlexibleContent rows={data?.acf?.modules as any} blocks={blocks} />;
}
