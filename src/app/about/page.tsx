import ImageCard from "@/components/imagecard";

export default function AboutPage() {
  return (
    <div>
      <ImageCard></ImageCard>
      <section className="flex flex-col items-center bg-zinc-200 p-7">
        <p className="font-semibold text-2xl">Who am I?</p>
        <p>개발을 사랑하는 풀스택 개발자</p>
        <p>사람과 디자인을 담는 웹앱을 만드는 것이 목표이다.</p>
        <p className="font-semibold text-2xl">Career</p>
        <p>아주대학교 졸업</p>
        <p className="font-semibold text-2xl">Skill</p>
        <p>React, Node, Git, Next.js, C, Python, TypeScript</p>
      </section>
    </div>
  );
}
