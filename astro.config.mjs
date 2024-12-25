import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
// import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig(
  {
    integrations: [
      tailwind(),
      // partytown({
      //   config: {
      //     forward: ["dataLayer.push"],
      //   },
      // }),
    ],
  },
  {
    site: "https://planningseries.fr/",
  }
);
