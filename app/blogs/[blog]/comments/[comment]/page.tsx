import Link from "next/link";

type BlogPageProps = {
  params: Promise<{
    blog: string;
    comment: string;
  }>;
};

export default async function Comment({ params }: BlogPageProps) {
  const { blog, comment } = await params;
  return (
    <div>
      <h1>Title: {blog}</h1>
      <h2>Comment: {comment}</h2>
      <Link href={`/blogs/${blog}/comments`}>Back</Link>
    </div>
  );
}
