import { siteConfig } from "@/site-config";
import { getFormattedDate } from "@/utils";
import { getAllPosts } from "@/lib/server/post";

import { Resvg } from "@resvg/resvg-js";
import type { APIContext, GetStaticPaths } from "astro";
import { getEntryBySlug } from "astro:content";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";

import RobotoMonoBold from "@/assets/fonts/roboto-mono-700.ttf";
import RobotoMono from "@/assets/fonts/roboto-mono-regular.ttf";

const ogOptions: SatoriOptions = {
  width: 1200,
  height: 630,
  // debug: true,
  fonts: [
    {
      name: "Roboto Mono",
      data: Buffer.from(RobotoMono),
      weight: 400,
      style: "normal",
    },
    {
      name: "Roboto Mono",
      data: Buffer.from(RobotoMonoBold),
      weight: 700,
      style: "normal",
    },
  ],
};

const markup = (title: string, pubDate: string) =>
  html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]">
    <div tw="flex flex-col flex-1 w-full p-10 justify-center">
      <p tw="text-2xl mb-6">${pubDate}</p>
      <h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
    </div>
    <div tw="flex items-center justify-between w-full p-10 border-t border-[#2bbc89] text-xl">
      <div tw="flex items-center">
        <svg viewBox="-102.4 -102.4 1228.80 1228.80" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M999.97 1023.984H24.03c-4.422 0-8-3.578-8-8v-95.992c0-68.668 35.568-94.98 101.198-119.494 197.098-73.682 202.786-101.556 202.786-104.494
        0-4.422 3.578-8 8-8s7.998 3.578 7.998 8c0 10.876 0 39.794-213.182 119.478-61.52 22.982-90.798 44.48-90.798
        104.51v87.994h959.942v-87.994c0-60.03-29.28-81.528-90.792-104.51-213.192-79.684-213.192-108.604-213.192-119.478
        0-4.422 3.578-8 8-8s8 3.578 8 8c0 2.938 5.688 30.812 202.8 104.494 65.622 24.514 101.182 50.826 101.182
        119.494v95.992a8 8 0 0 1-8.002 8z"
              fill=""
            ></path>
            <path
              d="M512 752c-108.494 0-287.982-168.254-287.982-359.976
        0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8c0 177.364 169.678 343.978 271.984 343.978s271.984-166.616
        271.984-343.978c0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8C799.982 583.746 620.494 752 512 752z"
              fill=""
            ></path>
            <path
              d="M328.012 704.004c-4.422 0-8-3.578-8-8v-63.996c0-4.422 3.578-8 8-8s7.998 3.578 7.998 8v63.996c0 4.422-3.576 8-7.998 8zM695.988 704.004c-4.422 0-8-3.578-8-8v-63.996c0-4.422 3.578-8 8-8s8 3.578
        8 8v63.996c0 4.422-3.578 8-8 8z"
              fill=""
            ></path>
            <path
              d="M184.02 397.928a8.006 8.006 0 0 1-8-7.998c-0.024-201.192 110.048-284.576 148.444-307.544l-32.56-19.484a8.01 8.01 0 0 1-2.828-10.86C292.436
        46.214 411.928 0.014 527.624 0.014c87.15 0 154.802 25.28 201.08 75.136 56.03 60.372 79.558 156.414 69.934 285.468a7.968 7.968 0 0 1-6.062 7.17 7.962 7.962 0 0 1-8.716-3.562l-76.48-123.946c-239.126-11.812-516.516
        154.85-519.204 156.476a7.946 7.946 0 0 1-4.156 1.172z m130.148-340.354l30.576 18.296a8.028 8.028 0 0 1 3.868 7.39 8 8 0 0 1-4.812 6.828c-0.376 0.156-38.436 16.968-75.932 62.09-33.256 39.998-72.644 110.87-75.66 223.752
        57.426-32.544 304.2-164.224 520.25-151.38a7.996 7.996 0 0 1 6.344 3.782l65.372 105.916c4.61-111.728-17.938-195.144-67.2-248.204-43.124-46.464-106.822-70.026-189.348-70.026-90.576-0.004-179.108 28.932-213.458 41.556z"
              fill=""
            ></path>
            <path
              d="M512 895.992c-105.956 0-169.694-39.542-204.504-72.73-37.982-36.184-50.536-72.198-51.05-73.712a7.982 7.982 0 0 1 4.984-10.14c4.156-1.406 8.716 0.796 10.154 4.968
        1.906 5.532 48.912 135.618 240.416 135.618 192.036 0 239.954-134.242 240.422-135.602 1.406-4.188 5.968-6.454 10.14-5a7.994 7.994 0 0 1 4.984
        10.156c-0.5 1.516-13.062 37.53-51.042 73.712-34.81 33.188-98.542 72.73-204.504 72.73z"
              fill=""
            ></path>
            <path
              d="M512 863.994c-176.248 0-228.682-127.57-229.134-128.868a8.006 8.006 0 0 1 4.922-10.186c4.148-1.422 8.726 0.75 10.188 4.92
        0.422 1.14 48.48 118.134 214.026 118.134 163.038 0 213.614-117.088 214.082-118.276 1.592-4.092 6.216-6.186 10.31-4.592a7.96 7.96 0 0 1 4.672
        10.202c-0.486 1.284-55.466 128.666-229.066 128.666z"
              fill=""
            ></path>
            <path
              d="M456.004 432.004h-111.994c-13.232 0-23.998-10.764-23.998-24v-31.998c0-13.232 10.766-23.998 23.998-23.998h111.994c13.232
        0 23.998 10.766 23.998 23.998v31.998c0 13.236-10.766 24-23.998 24z m-111.994-63.996a8 8 0 0 0-8 8v31.998c0 4.406 3.586 8 8 8h111.994a8.008 8.008 0 0 0
        7.998-8v-31.998a8 8 0 0 0-7.998-8h-111.994z"
              fill=""
            ></path>
            <path
              d="M679.99 432.004h-111.994c-13.232 0-23.998-10.764-23.998-24v-31.998c0-13.232 10.766-23.998
        23.998-23.998h111.994c13.232 0 23.998 10.766 23.998 23.998v31.998c0 13.236-10.766 24-23.998 24z m-111.994-63.996c-4.406 0-8 3.578-8 8v31.998c0 4.406 3.594 8 8
        8h111.994a8.014 8.014 0 0 0 7.998-8v-31.998c0-4.42-3.592-8-7.998-8h-111.994z"
              fill=""
            ></path>
            <path
              d="M551.998 400.492h-80.012c-4.422 0-8-3.578-8-8s3.578-8
        8-8h80.012c4.422 0 7.998 3.578 7.998 8s-3.576 8-7.998 8z"
              fill=""
            ></path>
          </g>
        </svg>
        <p tw="ml-3 font-semibold">${siteConfig.title}</p>
      </div>
      <p>by ${siteConfig.author}</p>
    </div>
  </div>`;

export async function GET({ params: { slug } }: APIContext) {
  const post = await getEntryBySlug("post", slug!);
  const title = post?.data.title ?? siteConfig.title;
  const postDate = getFormattedDate(post?.data.updatedDate ?? post?.data.publishDate ?? Date.now(), {
    weekday: "long",
    month: "long",
  });
  const svg = await satori(markup(title, postDate), ogOptions);
  const png = new Resvg(svg).render().asPng();
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return posts.filter(({ data }) => !data.ogImage).map(({ slug }) => ({ params: { slug } }));
};
