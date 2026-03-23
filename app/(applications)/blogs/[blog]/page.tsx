import Link from "next/link";
import { blogs } from "../../../data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

type BlogPageProps = {
  params: Promise<{ blog: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { blog: slug } = await params;

  // Find the blog from your mock data
  const blogData = blogs.find((b) => b.slug === slug);

  if (!blogData) notFound(); // 404 if blog not found

  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4 sm:px-6 lg:px-0">
      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full">
        {/* Blog Image */}
        {blogData.image && (
          <Image
            src={blogData.image}
            alt={blogData.title}
            width={800}
            height={400}
            className="rounded"
            priority
          />
        )}

        {/* Blog Content */}
        <div className="p-6 flex flex-col space-y-4">
          <h1 className="text-4xl font-bold text-indigo-600">{blogData.title}</h1>

          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Type:</span>{" "}
            <span className="text-indigo-500">{blogData.type}</span>
          </p>

          <p className="text-gray-700">{blogData.content}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              href={`/blogs/${slug}/comments`}
              className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Comments ({blogData.comments.length})
            </Link>

            <Link
              href={`/blogs`}
              className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}