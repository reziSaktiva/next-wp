import { KadenceAssets } from "./kadence-assets";
import { MediavineAssets } from "./mediavine-assets";
import { ReactNode } from "react";

interface BlockAssetsProps {
  content: string;
  children: ReactNode;
}

export function BlockAssets({ content, children }: BlockAssetsProps) {
  return (
    <>
      <KadenceAssets content={content} />
      <MediavineAssets content={content} />
      {children}
    </>
  );
}
