import { Suspense } from "react";
import { CommentSkeleton } from "@/app/_components/CommentSkeleton";
import CommentList, { CommentsProps } from "@/app/_components/CommentList";

export default function Comments({ params }: CommentsProps) {
  return (
    <Suspense fallback={<CommentSkeleton />}>
      <CommentList params={params} />
    </Suspense>
  );
}
