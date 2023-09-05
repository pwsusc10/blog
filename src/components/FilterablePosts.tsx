"use client";

import { Post } from "@/service/posts";
import React, { useState } from "react";
import Category from "./Category";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POST = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POST);
  const filteredPosts =
    selected === ALL_POST
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filteredPosts} />
      <Category
        categories={[ALL_POST, ...categories]}
        selected={selected}
        onClick={(category) => setSelected(category)}
      />
    </section>
  );
}
