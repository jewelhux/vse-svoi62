import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vsesvoy62.ru",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
