import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Все Свои 62",
    short_name: "Все Свои 62",
    description: "Автосервис в Рязани: ремонт, кузовные и малярные работы, полировка и диагностика.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9fafb",
    theme_color: "#111827",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
