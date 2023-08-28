import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import YouMayLike from "@/components/YouMayLike";

export default function HomePage() {
  return (
    <section>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
      {/* <YouMayLike /> */}
    </section>
  );
}
