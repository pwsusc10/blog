import { getAllPosts } from "@/service/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import PostCard from "./PostCard";

export default async function YouMayLike() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const posts = await getAllPosts();
  return (
    <section>
      <h2 className="font-semibold text-2xl">You may like</h2>
      <Carousel responsive={responsive}>
        {/* {posts.map((post) => (
          <PostCard post={post} />
        ))} */}
      </Carousel>
    </section>
  );
}
