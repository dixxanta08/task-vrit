import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";
import AddToCartButton from "../cart/AddToCartButton";

export default function ProductCard({
  product,
}: {
  readonly product: Product;
}) {
  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/products/${product.id}`}
        className="relative block h-60 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
          className="object-contain p-6 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 pt-4">
        <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
          {product.category}
        </span>
        <Link
          href={`/products/${product.id}`}
          className="line-clamp-2 text-lg font-semibold leading-7 text-gray-900 hover:text-blue-600"
        >
          {product.title}
        </Link>

        <p className="line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <span className="text-xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        <AddToCartButton product={product} />
      </div>
    </article>
  );
}
