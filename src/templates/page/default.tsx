import { FlexibleContent } from "@nextwp/core";
import type { WpPage, TemplateProps } from "@nextwp/core";
import * as blocks from "../../components/blocks";

interface DefaultTemplateProps extends TemplateProps {
  data: PageData;
}

interface PageData extends WpPage {
  acf?: {
    modules?: any[];
  };
}

export function DefaultPageTemplate({ data }: DefaultTemplateProps) {
  console.log('Page Data:', data);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        {typeof data.title === 'string'
          ? data.title
          : data.title?.rendered || 'Untitled'}
      </h1>
      {data.content && (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data.content.rendered || '' }}
        />
      )}
      {/* {data.acf?.modules && <FlexibleContent blocks={blocks} rows={data.acf.modules} />} */}
    </div>
  );
}
