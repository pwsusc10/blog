import ImageCard from "@/components/imagecard";

export default function Page() {
  return (
    <div className="">
      <ImageCard></ImageCard>
      <section>
        <p className="font-semibold text-2xl">Featured Posts</p>
      </section>
      <section>
        <p className="font-semibold text-2xl">You may like</p>
      </section>
    </div>
  );
}
