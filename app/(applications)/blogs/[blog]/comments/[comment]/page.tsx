import Link from "next/link";
import { blogs } from "../../../../../data/blog";
import { notFound } from "next/navigation";

type CommentPageProps = {
  params: Promise<{ blog: string; comment: string }>;
};

export default async function CommentPage({ params }: CommentPageProps) {
  const { blog: slug, comment: commentId } = await params;

  // Find the blog
  const blogData = blogs.find((b) => b.slug === slug);
  if (!blogData) notFound();

  // Find the comment
  const commentData = blogData.comments.find((c) => c.id === commentId);
  if (!commentData) notFound();

  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-600">{blogData.title}</h1>
      <p className="text-xl text-gray-700">{commentData.comment}</p>

      <div className="flex space-x-4">
        <Link
          href={`/blogs/${slug}/comments`}
          className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Back to Comments
        </Link>
        <Link
          href={`/blogs/${slug}`}
          className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
