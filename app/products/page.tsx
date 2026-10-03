import ProductsSection from "@/components/products/ProductsSection";
import { getProducts } from "@/lib/api/products";
import { getCategories } from "@/lib/api/categories";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Products",
  description: "Browse and explore available products.",
};

type Props = {
  searchParams: Promise<{ sort?: string }>;
};

export default async function Products({ searchParams }: Props) {
  const { sort } = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts(sort),
    getCategories(),
  ]);
  return (
    <main
      className="sm:px-4 md:px-16 py-8 bg-white
    "
    >
      <ProductsSection products={products} categories={categories} />
    </main>
  );
}
