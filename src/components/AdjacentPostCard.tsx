import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: Post;
  type: "prev" | "next";
};
export default function AdjacentPostCard({ post, type }: Props) {
  return (
    <Link
      href={`/post/${post.path}`}
      className="relative w-full bg-black max-h-56"
    >
      <Image
        className="w-full opacity-40"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={150}
        height={100}
      />
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center text-white px-8">
        {type === "prev" && (
          <FaArrowLeft className="text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl" />
        )}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{post.title}</h3>
          <p className="font-bold">{post.description}</p>
        </div>
        {type === "next" && (
          <FaArrowRight className="text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl" />
        )}
      </div>
    </Link>
  );
}
