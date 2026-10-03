import { XIcon } from "lucide-react";
import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductPriceRange from "./ProductPriceRange";
import ProductSearch from "./ProductSearch";
import ProductSort from "./ProductSort";
export function ProductsFilter({
  categories,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortOption,
  setSortOption,
  priceCeiling,
  onReset,
}: {
  readonly categories: string[];
  readonly searchQuery: string;
  readonly setSearchQuery: (query: string) => void;
  readonly selectedCategory: string | null;
  readonly setSelectedCategory: (category: string | null) => void;
  readonly minPrice: number;
  readonly setMinPrice: (price: number) => void;
  readonly maxPrice: number;
  readonly setMaxPrice: (price: number) => void;
  readonly sortOption: string | null;
  readonly setSortOption: (option: string | null) => void;
  readonly priceCeiling: number;
  readonly onReset: () => void;
}) {
  return (
    <aside className="lg:w-1/5 flex flex-col gap-6 self-start rounded-2xl border border-gray-200 bg-gray-50 p-5 lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-800"
        >
          <XIcon className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      <ProductSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductCategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductPriceRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        ceiling={priceCeiling}
      />
      <ProductSort setSortOption={setSortOption} sortOption={sortOption} />
    </aside>
  );
}
