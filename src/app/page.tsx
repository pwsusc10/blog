import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      <section>
        <p className="font-semibold text-2xl">You may like</p>
      </section>
    </section>
  );
}
