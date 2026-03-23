import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold bg-white bg-clip-text text-transparent">
        My App
      </h1>

      {/* Links */}
      <div className="flex flex-wrap gap-2 sm:gap-4 text-sm font-medium">
        <Link
          href="/"
          className="px-3 py-1 rounded-full bg-black hover:bg-white/30 transition"
        >
          Home
        </Link>

        <Link
          href="/blogs"
          className="px-3 py-1 rounded-full bg-black hover:bg-white/30 transition"
        >
          Blogs
        </Link>

        <Link
          href="/images"
          className="px-3 py-1 rounded-full bg-black hover:bg-white/30 transition"
        >
          Images
        </Link>

        <Link
          href="/about"
          className="px-3 py-1 rounded-full bg-black hover:bg-white/30 transition"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="px-3 py-1 rounded-full bg-black hover:bg-white/30 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
