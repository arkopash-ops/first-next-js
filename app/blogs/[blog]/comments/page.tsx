import Link from "next/link";

type BlogPageProps = {
  params: Promise<{
    blog: string;
  }>;
};

export default async function Comment({ params }: BlogPageProps) {
  const { blog } = await params;
  return (
    <div>
      <h1>Title: {blog}</h1>

      <h3>Comment 1</h3>
      <h3>Comment 2</h3>
      <h3>Comment 3</h3>
      <Link href={`/blogs/${blog}`}>Back</Link>
    </div>
  );
}
