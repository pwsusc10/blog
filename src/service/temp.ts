import { readdir, readFile } from "node:fs/promises";
import path from "path";

export type Post = {
  title: string;
  subtitle: string;
  date: string;
  categories: string;
  text: string;
};

export async function getPosts(): Promise<Post[]> {
  let posts: Post[] | undefined = [];
  try {
    const blogpath = path.join(process.cwd(), "public", "posts");
    const files = await readdir(blogpath);

    for (const file of files) {
      const filepath = path.join(blogpath, file);
      const datearr = file.split("-", 3);
      const date = datearr.join("-");
      const contents = await readFile(filepath, { encoding: "utf8" });
      const str = contents.split("\n", 6);
      str.splice(0, 1);

      const temp = contents.split("\n");
      temp.splice(0, 8);
      const text = temp.join("\n");

      const data = str.map((str) => {
        const temp = str.split(" ");
        temp.splice(0, 1);
        const result = temp.join(" ");
        return result;
      });

      const newblog: Post = {
        title: data[1],
        subtitle: data[2],
        date: date,
        categories: data[3],
        text: text,
      };
      posts = [...posts, newblog];

      // console.log(contents);
    }
  } catch (err) {
    console.error(err);
  }
  return posts;
}

export async function getPost(title: string): Promise<Post | undefined> {
  const posts = await getPosts();

  return posts.find((post) => post.title === title);
}
