import Image from "next/image";
import Link from "next/link";

export default function ImageCard() {
  return (
    <section className="flex flex-col items-center p-7">
      <Image
        src="/images/profile.jpg"
        alt="progile"
        width="300"
        height="300"
        className="rounded-full my-2"
      ></Image>
      <p className="font-semibold text-3xl">Hi, I'm Sungpyo</p>
      <p className="font-medium text-xl">Full-stack engineer</p>
      <p>꿈을 코딩하는 사람.</p>
      <Link
        href="/contact"
        className="rounded-lg bg-amber-400 px-3 font-semibold my-1"
      >
        Contact Me
      </Link>
    </section>
  );
}
