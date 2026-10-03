"use client";

import ProductCard from "./ProductCard";
import { useState } from "react";
import { Product } from "@/types/product";
import ProductPagination from "./ProductPagination";
import { ProductsFilter } from "./ProductsFilter";

export default function ProductsSection({
  products,
  categories,
}: {
  readonly products: Product[];
  readonly categories: string[];
}) {
  const highestPrice = products.reduce(
    (max, product) => Math.max(max, product.price),
    0,
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(highestPrice);
  const [sortOption, setSortOption] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setMinPrice(0);
    setMaxPrice(highestPrice);
    setSortOption(null);
    setCurrentPage(1);
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!selectedCategory || product.category === selectedCategory) &&
        product.price >= minPrice &&
        product.price <= maxPrice
      );
    })
    .sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      }

      if (sortOption === "price-desc") {
        return b.price - a.price;
      }

      return 0;
    });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Explore Products</h2>

        <p className="text-lg">
          Find best deals on tech, apparel, and premium jewelry.
        </p>
      </div>

      <div className="flex gap-4">
        <ProductsFilter
          categories={categories}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sortOption={sortOption}
          setSortOption={setSortOption}
          priceCeiling={Math.ceil(highestPrice)}
          onReset={handleReset}
        />

        <div className="w-full lg:w-4/5">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <ProductPagination
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </div>
    </>
  );
}
