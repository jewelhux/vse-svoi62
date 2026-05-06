import { MetadataRoute } from "next";

export const dynamic = "force-static";

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
