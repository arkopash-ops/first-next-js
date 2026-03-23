import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-indigo-600">About Page</h1>
    </div>
  );
}