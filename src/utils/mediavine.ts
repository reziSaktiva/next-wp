// Required scripts that are always loaded
export const requiredScripts = [
  "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/bundle.1.9.11.js",
  "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/polyfills.1.9.11.js",
];

// Mediavine block definitions
export const blocks = {
  card: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-all.1.9.11.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-all.js",
    ],
    pattern: /class="mv-card/,
  },
  cardCentered: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-centered.1.9.11.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-centered.js",
    ],
    pattern: /class="mv-card-centered/,
  },
  cardDark: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-dark.1.9.11.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-dark.js",
    ],
    pattern: /class="mv-card-dark/,
  },
  cardBigImage: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-big-image.1.9.11.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-big-image.js",
    ],
    pattern: /class="mv-card-big-image/,
  },
  recipe: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-all.1.9.11.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-all.js",
    ],
    pattern: /class="mv-recipe-card/,
  },
  list: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-all.1.9.11.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-all.js",
    ],
    pattern: /class="mv-list-card/,
  },
  reviews: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/mv-reviews.chunk.4846c.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/mv-reviews.chunk.5364a.js",
    ],
    pattern: /class="mv-reviews/,
  },
  printButton: {
    styles: [],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/mv-printbutton.chunk.9b887.js",
    ],
    pattern: /class="mv-create-print-button/,
  },
  pinButton: {
    styles: [],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/mv-pinbutton.chunk.53ba7.js",
    ],
    pattern: /class="mv-pinterest-btn/,
  },
  handsfree: {
    styles: [],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/mv-handsfree.chunk.89ae9.js",
    ],
    pattern: /class="mv-create-hands-free/,
  },
  footer: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/mediavine-create/client/build/card-all.1.9.11.css",
    ],
    scripts: [],
    pattern: /class="mv-create-footer/,
  },
};

// Function to detect Mediavine blocks used in the content
export function detectMediavineBlocks(html: string) {
  const detectedBlocks = Object.entries(blocks).filter(([_, block]) =>
    block.pattern.test(html)
  );

  return {
    styles: [...new Set(detectedBlocks.flatMap(([_, block]) => block.styles))],
    scripts: [
      ...requiredScripts,
      ...new Set(detectedBlocks.flatMap(([_, block]) => block.scripts)),
    ],
  };
}
