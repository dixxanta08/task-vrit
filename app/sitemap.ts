import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fakestore.com",
      lastModified: new Date(),
    },
    {
      url: "https://fakestore.com/products",
      lastModified: new Date(),
    },
  ];
}
