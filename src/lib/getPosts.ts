import fs from "fs";
import { resolve } from "path";
import matter from "gray-matter";

export default function getPosts() {
  const postDir = resolve(process.cwd(), "src", "posts");
  const posts = fs.readdirSync(postDir);

  return posts.map((post) => {
    const postContent = fs.readFileSync(resolve(postDir, post), "utf-8");
    const { data, content } = matter(postContent);

    return { data, content };
  });
}
