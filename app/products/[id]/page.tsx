import Image from "next/image";
import { Manrope } from "next/font/google";
import { RotateCcw, ShieldCheck, Truck } from "lucide-react";
import type { Product } from "@/types/product";
import { getProduct } from "@/lib/api/products";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

const font = Manrope({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return {
    title: product?.title,
    description: product?.description,
  };
}

const perks = [
  {
    icon: RotateCcw,
    title: "Free returns",
    text: "30 days, no questions asked",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    text: "Ships within 2 days",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    text: "Your payment is protected",
  },
];

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let product: Product | null = null;
  try {
    product = await getProduct(id);
  } catch (error) {
    notFound();
  }

  const rate = 3.9;
  const count = 120;

  if (!product) {
    notFound();
  }
  console.log(product);
  return (
    <section
      className={`${font.className} min-h-[calc(100vh-5rem)] bg-[#fefcf7] text-gray-900`}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-8 sm:px-6 md:grid-cols-2 md:py-14 lg:gap-16">
        <div className="flex aspect-square items-center justify-center rounded-3xl border border-amber-400  bg-[#f2e6d6] p-8 shadow-sm sm:p-12">
          <Image
            src={product.image}
            alt={product.title}
            width={520}
            height={520}
            priority
            className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 ease-out hover:-rotate-3 hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium capitalize text-slate-600">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {product.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-sm text-slate-500">
              <span className="text-amber-500">
                {"★".repeat(Math.round(rate))}
                {"☆".repeat(5 - Math.round(rate))}
              </span>{" "}
              {rate} from {count} reviews
            </p>
          </div>

          <p className="flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            In stock · Ships in 2 days
          </p>

          <p className="max-w-prose text-base leading-7 text-slate-600">
            {product.description}
          </p>

          <AddToCartButton product={product} variant="light" />

          <ul className="mt-2 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
            {perks.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3 sm:flex-col">
                <Icon className="h-5 w-5 shrink-0 text-amber-500" />

                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>

                  <p className="text-sm text-slate-500">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
