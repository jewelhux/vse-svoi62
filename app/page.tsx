import { landingContent } from "@/features/landing/content";
import LandingPage from "@/features/landing/LandingPage";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: landingContent.brandName,
    image: "https://vsesvoy62.ru/images/og-image.svg",
    telephone: landingContent.contacts.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: landingContent.contacts.address,
      addressLocality: "Рязань",
      addressCountry: "RU"
    },
    openingHours: "Mo-Su",
    url: "https://vsesvoy62.ru",
    sameAs: [landingContent.contacts.telegramUrl]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPage />
    </>
  );
}
