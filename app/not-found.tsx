export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-screen">
      <h1 className="text-4xl font-bold text-indigo-600">Page Not Found</h1>
      <p className="text-gray-700 text-lg">
        Could not find the <b>page</b> you are looking for.
      </p>
    </div>
  );
}
