import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | My App",
    default: "My App",
  },
  description: "My Next App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <header className="bg-gray-900 text-white p-4">
          <Navbar />
        </header>

        <main className="flex-1 p-4">{children}</main>

        <footer className="bg-gray-900 text-gray-300 text-center p-4 border-t border-gray-700">
          <p className="text-sm">
            My App
          </p>
        </footer>
      </body>
    </html>
  );
}
