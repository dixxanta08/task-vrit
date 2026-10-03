"use client";

import Image from "next/image";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useAuth } from "@/lib/context/AuthProvider";
import { useCart } from "@/lib/context/CartProvider";
import { toast } from "react-toastify";

import { Manrope } from "next/font/google";

const font = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function CartPage() {
  const { cartItems, removeItem } = useCart();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <main
        className={`${font.className} flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#fefcf7] px-6`}
      >
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f2e6d6]">
            <ShieldCheck className="h-7 w-7 text-amber-500" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Sign in to view your cart
          </h1>

          <p className="mt-3 leading-6 text-slate-500">
            Please sign in to access your saved products and continue shopping.
          </p>
        </div>
      </main>
    );
  }

  const subtotal = cartItems.reduce(
    (total, product) => total + product.price,
    0,
  );

  return (
    <main
      className={`${font.className} min-h-[calc(100vh-5rem)] bg-[#fefcf7] px-4 py-10 sm:px-6 lg:px-8`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Shopping Cart
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Cart
          </h1>

          <p className="mt-2 text-slate-500">
            {cartItems.length === 0
              ? "Your cart is currently empty."
              : `${cartItems.length} ${
                  cartItems.length === 1 ? "item" : "items"
                } in your cart`}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f2e6d6]">
              <span className="text-3xl">🛒</span>
            </div>

            <h2 className="mt-6 text-xl font-semibold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-2 text-slate-500">
              Add some products and they will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-6 py-5">
                <h2 className="font-semibold text-gray-900">Cart Items</h2>
              </div>

              <div className="divide-y divide-slate-100">
                {cartItems.map((product) => (
                  <div key={product.id} className="flex gap-5 p-5 sm:p-6">
                    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-amber-200 bg-[#f2e6d6] p-3 sm:h-32 sm:w-32">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={140}
                        height={140}
                        className="h-full w-full object-contain mix-blend-multiply"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          {product.category}
                        </span>

                        <h3 className="mt-1 line-clamp-2 font-semibold leading-6 text-gray-900">
                          {product.title}
                        </h3>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-lg font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </p>

                        <button
                          type="button"
                          onClick={() => removeItem(product)}
                          className="text-sm font-medium text-slate-500 transition hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-medium text-emerald-600">Free</span>
                </div>
              </div>

              <div className="my-6 border-t border-slate-100" />

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Total</span>

                <span className="text-2xl font-bold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => toast.info("Not implemented")}
                className="mt-6 w-full rounded-xl bg-gray-900 px-5 py-3.5 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
              >
                Place Order
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                Checkout functionality is not implemented yet.
              </p>

              <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Fast delivery
                    </p>

                    <p className="text-xs text-slate-500">
                      Ships within 2 days
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <RotateCcw className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Free returns
                    </p>

                    <p className="text-xs text-slate-500">
                      30 days, no questions asked
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Secure checkout
                    </p>

                    <p className="text-xs text-slate-500">
                      Your payment is protected
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
