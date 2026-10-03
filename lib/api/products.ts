import { apiClient } from "./client";
import type { Product } from "@/types/product";

export async function getProducts(sort?: string): Promise<Product[]> {
  const endpoint = sort ? `/products?sort=${sort}` : "/products";
  return apiClient<Product[]>(endpoint);
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    return await apiClient<Product>(`/products/${id}`);
  } catch {
    return null;
  }
}
