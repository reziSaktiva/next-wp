interface KadenceBlocks {
  init: () => void;
  accordion?: {
    init: () => void;
  };
  animation?: {
    init: () => void;
  };
}

declare global {
  interface Window {
    kadenceBlocks: KadenceBlocks;
  }
}

export {};
