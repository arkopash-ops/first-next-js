import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold text-indigo-600">Contact Page</h1>

      <h2 className="text-xl text-gray-700">Contact Us on</h2>

      <ul className="flex flex-col space-y-2 text-indigo-600">
        <li>
          <Link href="/contact/phone" className="hover:underline">
            Phone
          </Link>
        </li>
        <li>
          <Link href="/contact/email" className="hover:underline">
            Email
          </Link>
        </li>
        <li>
          <Link href="/contact/instagram" className="hover:underline">
            Instagram
          </Link>
        </li>
      </ul>
    </div>
  );
}
