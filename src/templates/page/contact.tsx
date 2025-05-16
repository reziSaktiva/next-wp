import { TemplateProps } from "@nextwp/core";

export function ContactPageTemplate(props: TemplateProps) {
  console.log("props", props);
  return (
    <div>
      <h1>Contact page template</h1>

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
