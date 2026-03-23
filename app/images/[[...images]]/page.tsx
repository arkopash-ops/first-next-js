import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Images",
};

type ImagePageProps = {
  params: {
    images?: string[];
  };
};

export default async function Images({ params }: ImagePageProps) {
  const { images } = await params;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold text-indigo-600">Images Page</h1>

      <pre className="bg-gray-100 p-4 rounded text-gray-700">
        Images /{images?.join("/")}
      </pre>

      <Link
        href="/images"
        className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Back
      </Link>
    </div>
  );
}