import Category from "@/components/Category";
import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts, getCategories } from "@/service/posts";

export default async function PostPage() {
  const posts = await getAllPosts();
  // const categories = await getCategories();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <FilterablePosts posts={posts} categories={categories}></FilterablePosts>
  );
}
