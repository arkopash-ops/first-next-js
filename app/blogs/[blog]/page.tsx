import Link from "next/link";

type BlogPageProps = {
  params: Promise<{
    blog: string;
  }>;
};

export default async function Blogs({ params }: BlogPageProps) {
  const { blog } = await params;
  return (
    <div>
      <h1>Title: {blog}</h1>
      <Link href={`/blogs/${blog}/comments`}>Comments | </Link>
      <Link href={`/blogs`}>Back</Link>
    </div>
  );
}
