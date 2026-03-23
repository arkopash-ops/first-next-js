import Link from "next/link";

type BlogPageProps = {
  params: Promise<{
    blog: string;
    comment: string;
  }>;
};

export default async function Comment({ params }: BlogPageProps) {
  const { blog, comment } = await params;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-10">
      <h1 className="text-4xl font-bold text-indigo-600">Title: {blog}</h1>
      <h2 className="text-2xl text-gray-700">Comment: {comment}</h2>

      <Link
        href={`/blogs/${blog}/comments`}
        className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Back
      </Link>
    </div>
  );
}
