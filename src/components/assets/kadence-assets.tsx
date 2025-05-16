import Script from "next/script";
import { requiredScripts, detectKadenceBlocks } from "@/utils/kadence-blocks";

interface KadenceAssetsProps {
  content: string;
}

export function KadenceAssets({ content }: KadenceAssetsProps) {
  const { styles, scripts } = detectKadenceBlocks(content);

  return (
    <>
      {/* Load required scripts first */}
      {requiredScripts.map((script, index) => (
        <Script
          key={`required-${index}`}
          src={script}
          strategy="beforeInteractive"
        />
      ))}

      {/* Load CSS files */}
      {styles.map((style, index) => (
        <link key={index} rel="stylesheet" href={style} />
      ))}

      {/* Load block-specific scripts */}
      {scripts.map((script, index) => (
        <Script key={index} src={script} strategy="beforeInteractive" />
      ))}
    </>
  );
}
