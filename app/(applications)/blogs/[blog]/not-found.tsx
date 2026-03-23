import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-screen">
      <h1 className="text-4xl font-bold text-indigo-600">Blog Not Found</h1>
      <p className="text-gray-700 text-lg">
        Could not find the <b>Blog</b> you are looking for.
      </p>
      <Link
        href="/blogs"
        className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Back
      </Link>
    </div>
  );
}
