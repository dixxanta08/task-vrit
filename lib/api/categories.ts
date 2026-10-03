import { apiClient } from "./client";

export async function getCategories(): Promise<string[]> {
  const endpoint = "/products/categories";

  return apiClient<string[]>(endpoint);
}
