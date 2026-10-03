"use client";
import { useAuth } from "@/lib/context/AuthProvider";
import { useCart } from "@/lib/context/CartProvider";
import { toast } from "react-toastify";
import { Product } from "@/types/product";

const base =
  "w-full rounded-xl px-6 py-3.5 font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98]";

const styles = {
  light: {
    add: "bg-gray-900 text-white hover:bg-gray-700",
    remove: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  },
  dark: {
    add: "bg-white text-gray-900 hover:bg-slate-200",
    remove: "border border-white/30 text-white hover:bg-white/10",
  },
};

export default function AddToCartButton({
  product,
  variant = "light",
}: {
  readonly product: Product;
  readonly variant?: "light" | "dark";
}) {
  const { isAuthenticated } = useAuth();
  const { itemInCart, addItem, removeItem } = useCart();
  const alreadyAdded = isAuthenticated && itemInCart(product);

  const handleAdd = () => {
    if (!isAuthenticated) {
      toast.error("Please login to add to cart!");
      return;
    }
    addItem(product);
  };

  return alreadyAdded ? (
    <button
      type="button"
      onClick={() => removeItem(product)}
      className={`${base} ${styles[variant].remove}`}
    >
      Remove from cart
    </button>
  ) : (
    <button
      type="button"
      onClick={handleAdd}
      className={`${base} ${styles[variant].add}`}
    >
      Add to cart
    </button>
  );
}
