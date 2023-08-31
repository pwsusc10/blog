import { getPostByPath } from "@/service/posts";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: Props) {
  console.log(params.slug);
  const data = await getPostByPath(params.slug);

  // return <div>{data}</div>
  return <ReactMarkdown>{data.content}</ReactMarkdown>;
}
