import { getAllPosts, getPostData } from "@/service/posts";
import Image from "next/image";
import React from "react";
import PostContent from "@/components/PostContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description } = await getPostData(params.slug);
  return {
    title,
    description,
  };
}

export default async function BlogPage({ params }: Props) {
  const posts = await getAllPosts();

  const post = await getPostData(params.slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
      {/* <ExtraPage prev={posts[targetIndex - 1]} next={posts[targetIndex + 1]} /> */}
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured == true);
  return featuredPosts.map((post) => ({ slug: post.path }));
}
