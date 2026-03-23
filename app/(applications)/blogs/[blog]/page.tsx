import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPageProps = {
  params: Promise<{
    blog: string;
  }>;
};

export default async function Blogs({ params }: BlogPageProps) {
  const { blog } = await params;

  // Show 404 page if blog is a number
  if (!isNaN(Number(blog))) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-10">
      <h1 className="text-4xl font-bold text-indigo-600">Title: {blog}</h1>

      <div className="flex space-x-4">
        <Link
          href={`/blogs/${blog}/comments`}
          className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Comments
        </Link>
        <Link
          href="/blogs"
          className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
