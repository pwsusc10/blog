import BlogCard from "@/components/blogcard";
// import { getPost, getPosts } from "@/service/post";
import Link from "next/link";

export default async function PostPage() {
  // const posts = await getPosts();
  // const post = await getPost("이진 탐색");

  // console.log(posts[1].title);

  // console.log(post);

  return (
    <div className="flex">
      <ul className="flex justify-around">
        {/* {posts.map((post, index) => {
          <li key={index}>
            <Link href={`/post/${post.title}`}>{post.title}</Link>
          </li>;
        })} */}
        {/* <li>
          <Link href={`/post/${post?.title}`}>{post?.title}</Link>
        </li> */}
      </ul>
      <p>Category</p>
    </div>
  );
}
