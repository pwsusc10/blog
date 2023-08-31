import path from "path";
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs
    .readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));

  return data;
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  let categories: string[] = ["All Posts"];

  posts.map((post) => {
    if (categories.find((category) => category === post.category) === undefined)
      categories.push(post.category);
  });
  return categories;
}

export async function getPostByPath(source: string): Promise<PostData> {
  const postPath = path.join(process.cwd(), "data", "posts", `${source}.md`);
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === source));
  if (!metadata) throw new Error(`${source}에 해당하는 포스트를 찾을 수 없음`);
  const content = await fs.readFile(postPath, "utf-8");
  return { ...metadata, content };
}
