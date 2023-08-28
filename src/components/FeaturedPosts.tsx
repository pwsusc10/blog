import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/service/posts";
import React from "react";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured == true);
  return (
    <div>
      <h2 className="font-bold text-2xl">Featured Posts</h2>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {featuredPosts.map((post, index) => (
          <li key={index}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
