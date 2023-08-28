import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <div className="flex flex-col w-50 m-5 border-4 rounded-md">
      <Image
        src="/images/profile.jpg"
        alt="image"
        width="300"
        height="300"
      ></Image>
      <div className="flex flex-col items-center">
        <p className="flex">2023-12-31</p>
        <p>2023년 review</p>
        <p>2023년 한해 동안 배운 기술들, 생각들 정리</p>
        <p>my story</p>
      </div>
    </div>
  );
}
