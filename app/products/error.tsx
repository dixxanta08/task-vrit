"use client";

export default function Error() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fefcf7] px-6">
      <div className="text-center">
        <p className="text-6xl font-bold text-gray-900">500</p>

        <h1 className="mt-3 text-2xl font-semibold text-gray-800">
          Something Went Wrong
        </h1>

        <p className="mt-2 text-sm text-gray-500">Please try again later.</p>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 text-sm font-medium text-amber-600 hover:text-amber-700"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
