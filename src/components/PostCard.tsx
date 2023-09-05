import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.path}`}>
      <article className="overflow-hidden rounded-lg shadow-md m-3 hover:shadow-xl">
        <Image
          src={`/images/posts/${post.path}.png`}
          alt="post"
          width="300"
          height="200"
          className="w-full"
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-xs text-gray-700">
            {post.date.toString()}
          </time>
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="w-full truncate text-center">{post.description}</p>
          <span className="bg-teal-200 rounded-full px-2 my-2 text-sm">
            {post.category}
          </span>
        </div>
      </article>
    </Link>
  );
}
