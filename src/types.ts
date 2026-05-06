export type Service = {
  title: string;
  description: string;
  imageSrc: string;
};

export type Advantage = {
  title: string;
  description: string;
  /** Иконка из `public/images/icons` (маска под цвет `brand`) */
  iconSrc: string;
};

export type Review = {
  author: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type WorkStep = {
  title: string;
  description: string;
};

export type ContactInfo = {
  phone: string;
  telegramUrl: string;
  address: string;
  workingHours: string;
  mapEmbedUrl: string;
};

export type LandingData = {
  brandName: string;
  logoSrc: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHighlights: string[];
  heroBadge: string;
  companyDescription: string;
  sectionIntro: string;
  services: Service[];
  advantages: Advantage[];
  reviews: Review[];
  faq: FaqItem[];
  workSteps: WorkStep[];
  quickEstimateText: string;
  ratingLabel: string;
  contacts: ContactInfo;
  galleryImages: string[];
};
