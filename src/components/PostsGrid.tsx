import { Post } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {posts.map((post, index) => (
        <li key={index}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
