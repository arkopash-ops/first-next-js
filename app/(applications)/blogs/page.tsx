import { BlogList } from "@/app/_components/BlogList";
import { BlogSkeleton } from "@/app/_components/BlogSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Blogs() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Blogs Page</h1>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
