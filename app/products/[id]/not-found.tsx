import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fefcf7] px-6">
      <div className="text-center">
        <p className="text-6xl font-bold text-gray-900">404</p>

        <h1 className="mt-3 text-2xl font-semibold text-gray-800">
          Product Not Found
        </h1>

        <Link
          href="/products"
          className="mt-6 inline-block text-sm font-medium text-amber-600 hover:text-amber-700"
        >
          Back to Products
        </Link>
      </div>
    </main>
  );
}
