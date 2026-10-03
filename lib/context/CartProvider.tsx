"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Product } from "@/types/product";

type CartContextType = {
  cartItems: Product[];
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  itemInCart: (product: Product) => boolean;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const itemInCart = (product: Product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const addItem = (product: Product) => {
    if (!itemInCart(product)) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const removeItem = (product: Product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        itemInCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
