import Image from "next/image";
import Link from "next/link";
import profileImage from "public/images/profile.jpg";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        src={profileImage}
        alt="progile"
        width="250"
        height="250"
        className="rounded-full mx-auto"
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Sungpyo"}</h2>
      <h3 className="text-xl font-semibold">Full-stack engineer</h3>
      <p>{"꿈을 코딩하는 사람."}</p>
      <Link href="/contact">
        <button className="rounded-xl bg-amber-400 font-bold px-4 py-1 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
