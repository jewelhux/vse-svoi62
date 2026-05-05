import type { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Автосервис в Рязани - Все Свои 62",
  description:
    "Автосервис в Рязани: кузовной и слесарный ремонт, покраска, полировка и диагностика. Быстро, честно, с гарантией.",
  metadataBase: new URL("https://vsesvoy62.ru"),
  openGraph: {
    title: "Все Свои 62 - автосервис в Рязани",
    description:
      "Ремонт и обслуживание авто в Рязани. Telegram и телефон для быстрой связи.",
    type: "website",
    locale: "ru_RU",
    url: "https://vsesvoy62.ru",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Все Свои 62 - автосервис в Рязани"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Автосервис в Рязани - Все Свои 62",
    description:
      "Кузовные, малярные, слесарные работы и тюнинг. Запись через Telegram.",
    images: ["/images/og-image.svg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
