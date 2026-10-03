export default function ProductSort({
  sortOption,
  setSortOption,
}: {
  sortOption: string | null;
  setSortOption: (option: string | null) => void;
}) {
  return (
    <div>
      <label
        htmlFor="sort"
        className="mb-2 block text-sm font-semibold text-gray-900"
      >
        Sort by
      </label>
      <select
        id="sort"
        value={sortOption || ""}
        onChange={(e) => setSortOption(e.target.value || null)}
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        <option value="">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
