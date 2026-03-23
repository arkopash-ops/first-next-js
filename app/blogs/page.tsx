import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Blogs() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold text-indigo-600">Blogs Page</h1>

      <h3 className="text-xl text-gray-700">Blog 1</h3>
      <h3 className="text-xl text-gray-700">Blog 2</h3>
      <h3 className="text-xl text-gray-700">Blog 3</h3>
    </div>
  );
}
