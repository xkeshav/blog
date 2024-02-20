import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  website: "https://xkeshav.com",
  // Meta property used to construct the meta property (src/components/BaseHead.astro) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Keshav Mohta",
  title: "xkeshav.com",
  description: "Personal Portfolio",
  lang: "en-GB",
  ogLocale: "en_GB",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
};

export const LOCALE = ["en-EN"];

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about/",
  },
  {
    title: "Blog",
    path: "/posts/",
  },
  {
    title: "Work",
    path: "/work/",
  },
];
