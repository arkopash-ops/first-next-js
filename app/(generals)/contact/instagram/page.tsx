import Link from "next/link";
import Contact from "../page";

export default function Instagram() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Contact />

      <h3 className="text-xl font-semibold text-indigo-600">Instagram Page</h3>

      <Link
        href="/contact"
        className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Back
      </Link>
    </div>
  );
}
