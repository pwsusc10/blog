import { getAllPosts } from "@/service/posts";
import React from "react";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function CarouselPosts() {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => post.featured != true);
  return (
    <section className="my-10">
      <h2 className="font-semibold text-2xl">You may like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
