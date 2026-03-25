import Image from "next/image";
import Link from "next/link";
import { blogs } from "../data/blog";

export async function BlogList() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {blogs.map((b) => (
        <div
          key={b.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {b.image && (
            <Image
              src={b.image}
              alt={b.slug}
              width={800}
              height={400}
              loading="eager"
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4 flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{b.title}</h3>
            <Link
              href={`/blogs/${b.slug}`}
              className="mt-2 text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
