import fs from "fs/promises";
import path from "path";

export async function post({ request }: any) {
  const post = await request.json();

  const fileName = `${post.slug}.md`;
  const filePath = path.join(process.cwd(), "src", "content", "blog", fileName);

  const frontmatter = `---
title: ${post.title}
description: ${post.description}
isDraft: ${post.isDraft}
---

`;

  const fileContent = frontmatter + post.content;

  try {
    await fs.writeFile(filePath, fileContent);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Error saving post:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
