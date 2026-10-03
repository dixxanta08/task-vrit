export default function ProductCategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  readonly categories: string[];
  readonly selectedCategory: string | null;
  readonly setSelectedCategory: (category: string | null) => void;
}) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-gray-900">Categories</h3>
      <ul className="flex flex-wrap gap-2 text-sm font-medium">
        {categories.map((category) => {
          const active = selectedCategory === category;
          return (
            <li key={category}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(active ? null : category)}
                className={`rounded-full px-3 py-1 transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
