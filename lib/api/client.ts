const API_BASE_URL = "https://fakestoreapi.com";

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok)
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    );

  const text = await response.text();

  if (!text) {
    throw new Error(`Empty API response: ${endpoint}`);
  }

  return JSON.parse(text) as T;
}
