// src/lib/server/posts.ts
import { getCollection } from "astro:content";

export async function getAllPosts() {
  return getCollection("post", ({ data }) => (import.meta.env.PROD ? data.draft !== true : true));
}
