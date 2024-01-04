import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import fs from "fs"
import rehypeExternalLinks from "rehype-external-links"
import remarkUnwrapImages from "remark-unwrap-images"
import { remarkReadingTime } from "./src/utils/remark-reading-time"

// https://astro.build/config
export default defineConfig({
  site: "https://xkeshav.com/",
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank", rel: ["nofollow, noopener, noreferrer"] }]],
    remarkRehype: { footnoteLabelProperties: { className: [""] } },
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  integrations: [
    mdx({}),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  image: {
    domains: [],
  },
  devToolbar: {
    enabled: false,
  },
  // https://docs.astro.build/en/guides/prefetch/
  prefetch: true,
  vite: {
    plugins: [rawFonts([".ttf"])],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
})

function rawFonts(ext: Array<string>) {
  return {
    name: "vite-plugin-raw-fonts",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id)
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        }
      }
    },
  }
}