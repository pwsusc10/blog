import ImageCard from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "성표의 소개",
};

const TITLE_CLASS = "font-bold text-2xl text-gray-800";
export default function AboutPage() {
  return (
    <div>
      <ImageCard></ImageCard>
      <section className="flex flex-col text-center bg-gray-100 p-8 m-8 shadow-lg">
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>
          사람과 개발을 사랑하는 풀스택 개발자
          <br />
          사람과 디자인을 담는 웹앱을 만드는 것이 목표이다.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>아주대학교 졸업</p>
        <h2 className={TITLE_CLASS}>Skill</h2>
        <p>React, Node, Git, Next.js, C, Python, TypeScript</p>
      </section>
    </div>
  );
}
