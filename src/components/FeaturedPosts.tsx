import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/service/posts";
import React from "react";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured == true);

  return (
    <div>
      <h2 className="font-bold text-2xl">Featured Posts</h2>
      <PostsGrid posts={featuredPosts} />
    </div>
  );
}
