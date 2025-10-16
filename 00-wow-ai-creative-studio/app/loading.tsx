export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="inline-block">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-t-4 border-purple-400"></div>
        </div>

        {/* Loading text */}
        <p className="mt-6 text-xl text-gray-300 animate-pulse">
          Loading AI Creative Studio...
        </p>
      </div>
    </div>
  );
}
