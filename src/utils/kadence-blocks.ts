// Script wajib yang selalu dimuat
export const requiredScripts = [
  "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/components.js",
  "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/helpers.js",
];

// Definisi blok-blok Kadence
export const blocks = {
  accordion: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-accordion.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-accordion.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kt-accordion.min.js",
    ],
    pattern: /class="kt-accordion/,
  },
  advancedButton: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-advancedbtn.css",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/css/kb-button-deprecated-style.min.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-advancedbtn.js",
    ],
    pattern: /class="kt-btn/,
  },
  advancedForm: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-advanced-form.css",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/css/float-labels.min.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-advanced-form.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-advanced-form-block.min.js",
    ],
    pattern: /class="kt-advanced-form/,
  },
  advancedGallery: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-advancedgallery.css",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/css/simplelightbox.min.css",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/css/kb-glightbox.min.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-advancedgallery.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-gallery-simple-init.min.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/glightbox.min.js",
    ],
    pattern: /class="kt-advanced-gallery/,
  },
  advancedHeading: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-advancedheading.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-advancedheading.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-advanced-heading.min.js",
    ],
    pattern: /class="kt-adv-heading/,
  },
  column: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-column.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-column.js",
    ],
    pattern: /class="kt-inside-inner-col/,
  },
  countdown: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-countdown.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-countdown.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/countUp.min.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-countdown.min.js",
    ],
    pattern: /class="kt-countdown/,
  },
  form: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-form.css",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/css/float-labels.min.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-form.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-form-block.min.js",
    ],
    pattern: /class="kt-form/,
  },
  header: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-header.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-header.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-header-block.min.js",
    ],
    pattern: /class="kt-header/,
  },
  icon: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-icon.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-icon.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/icons.js",
    ],
    pattern: /class="kt-svg-icon/,
  },
  iconList: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-iconlist.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-iconlist.js",
    ],
    pattern: /class="kt-icon-list/,
  },
  identity: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-identity.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-identity.js",
    ],
    pattern: /class="kt-identity/,
  },
  image: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-image.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-image.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-image-block.min.js",
    ],
    pattern: /class="kt-image/,
  },
  infobox: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-infobox.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-infobox.js",
    ],
    pattern: /class="kt-info-box/,
  },
  lottie: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-lottie.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-lottie.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/lottie-player.min.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/lottie-interactivity.min.js",
    ],
    pattern: /class="kt-lottie/,
  },
  navigation: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-navigation.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-navigation.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-navigation-block.min.js",
    ],
    pattern: /class="kt-nav/,
  },
  posts: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-posts.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-posts.js",
    ],
    pattern: /class="kt-posts/,
  },
  progressBar: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-progress-bar.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-progress-bar.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/progressBar.min.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-progress-bars.min.js",
    ],
    pattern: /class="kt-progress-bar/,
  },
  rowLayout: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-rowlayout.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-rowlayout.js",
    ],
    pattern: /class="kt-row-layout/,
  },
  search: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-search.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-search.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-search.min.js",
    ],
    pattern: /class="kt-search/,
  },
  spacer: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-spacer.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-spacer.js",
    ],
    pattern: /class="kt-spacer/,
  },
  table: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-table.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-table.js",
    ],
    pattern: /class="kt-table/,
  },
  tableOfContents: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-tableofcontents.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-tableofcontents.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-table-of-contents.min.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/gumshoe.min.js",
    ],
    pattern: /class="kt-toc/,
  },
  tabs: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-tabs.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-tabs.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kt-tabs.min.js",
    ],
    pattern: /class="kt-tabs/,
  },
  testimonials: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-testimonials.css",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/css/kt-blocks-slick.min.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-testimonials.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/slick.min.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kt-slick-init.min.js",
    ],
    pattern: /class="kt-testimonials/,
  },
  vector: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-vector.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-vector.js",
    ],
    pattern: /class="kt-vector/,
  },
  videoPopup: {
    styles: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/style-blocks-videopopup.css",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/css/kb-glightbox.min.css",
    ],
    scripts: [
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/dist/blocks-videopopup.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/kb-init-video-popup.min.js",
      "https://wp.insvire.com/wp-content/plugins/kadence-blocks/includes/assets/js/glightbox.min.js",
    ],
    pattern: /class="wp-block-kadence-videopopup/,
  },
};

// Fungsi untuk mendeteksi blok yang digunakan
export function detectKadenceBlocks(html: string) {
  const detectedBlocks = Object.entries(blocks).filter(([_, block]) =>
    block.pattern.test(html)
  );

  return {
    styles: [...new Set(detectedBlocks.flatMap(([_, block]) => block.styles))],
    scripts: [
      ...new Set(detectedBlocks.flatMap(([_, block]) => block.scripts)),
    ],
  };
}
