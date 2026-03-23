import Link from "next/link";

type BlogPageProps = {
  params: Promise<{
    blog: string;
  }>;
};

export default async function Comment({ params }: BlogPageProps) {
  const { blog } = await params;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-10">
      <h1 className="text-4xl font-bold text-indigo-600">Title: {blog}</h1>

      <div className="flex flex-col space-y-2">
        <h3 className="text-xl text-gray-700">Comment 1</h3>
        <h3 className="text-xl text-gray-700">Comment 2</h3>
        <h3 className="text-xl text-gray-700">Comment 3</h3>
      </div>

      <Link
        href={`/blogs/${blog}`}
        className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Back
      </Link>
    </div>
  );
}
