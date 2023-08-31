import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostByPath } from "@/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: Props) {
  const { title, description, date, path, content } = await getPostByPath(
    params.slug
  );

  return (
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width="760"
        height="420"
      />
      <h1>{title}</h1>
      <MarkdownViewer content={content} />
    </article>
  );
}
