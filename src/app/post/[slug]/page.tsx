import { getPosts } from "@/service/temp";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPage() {
  // const temp = "## Hello, *world*!";

  getPosts();
  return (
    <div>
      BlogPage
      {/* <ReactMarkdown children={temp} /> */}
    </div>
  );
}
