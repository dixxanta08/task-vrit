const thumb =
  "pointer-events-none absolute inset-0 h-5 w-full appearance-none bg-transparent " +
  "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:shadow " +
  "[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-blue-600";

export default function ProductPriceRange({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  ceiling,
}: {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  ceiling: number;
}) {
  const pct = (v: number) => (ceiling ? Math.min(100, (v / ceiling) * 100) : 0);

  return (
    <div className="w-full">
      <h3 className="mb-2 text-sm font-semibold text-gray-900">Price range</h3>
      <div className="mb-3 flex justify-between text-sm text-gray-600">
        <span>${Math.round(minPrice)}</span>
        <span>${Math.round(maxPrice)}</span>
      </div>

      <div className="relative h-5">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded bg-gray-300" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded bg-blue-600"
          style={{
            left: `${pct(minPrice)}%`,
            width: `${Math.max(0, pct(maxPrice) - pct(minPrice))}%`,
          }}
        />

        <input
          type="range"
          min={0}
          max={ceiling}
          step={1}
          value={minPrice}
          aria-label="Minimum price"
          onChange={(e) =>
            setMinPrice(Math.min(Number(e.target.value), maxPrice))
          }
          className={thumb}
        />
        <input
          type="range"
          min={0}
          max={ceiling}
          step={1}
          value={maxPrice}
          aria-label="Maximum price"
          onChange={(e) =>
            setMaxPrice(Math.max(Number(e.target.value), minPrice))
          }
          className={thumb}
        />
      </div>
    </div>
  );
}
