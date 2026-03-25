// app/_components/CommentSkeleton.tsx
export function CommentSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="flex flex-col space-y-4 mt-10 max-w-2xl mx-auto animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="flex flex-col space-y-2">
          <div className="h-6 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-1/6"></div>
        </div>
      ))}
      <div className="h-8 bg-gray-300 rounded w-1/4 mt-4"></div>
    </div>
  );
}
