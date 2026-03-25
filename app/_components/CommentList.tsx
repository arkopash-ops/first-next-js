import { notFound } from "next/navigation";
import { blogs } from "../data/blog";
import Link from "next/link";

export type CommentsProps = {
  params: Promise<{ blog: string }>;
};

export default async function CommentList({ params }: CommentsProps) {
  const { blog: slug } = await params;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const blogData = blogs.find((b) => b.slug === slug);
  if (!blogData) notFound();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-600">
        {blogData.title} - Comments
      </h1>

      {blogData.comments.length === 0 ? (
        <p className="text-gray-700">No comments yet.</p>
      ) : (
        blogData.comments.map((comment) => (
          <div key={comment.id} className="flex items-center space-x-3">
            <h3 className="text-xl text-gray-700">{comment.comment}</h3>
            <Link
              href={`/blogs/${slug}/comments/${comment.id}`}
              className="text-blue-500 hover:underline"
            >
              View
            </Link>
          </div>
        ))
      )}

      <Link
        href={`/blogs/${slug}`}
        className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Back
      </Link>
    </div>
  );
}
