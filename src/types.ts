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
  /** 1..5, если источник отдаёт рейтинг */
  rating?: number;
  /** Фото, приложенные к отзыву (если есть) */
  photoUrls?: string[];
  /** Ссылка на оригинал (например, конкретный отзыв на Яндекс.Картах) */
  sourceUrl?: string;
};

export type ReviewsApiResponse = {
  reviews: Review[];
  updatedAt?: string;
  rating?: number;
  ratingCount?: number;
  placeUrl?: string;
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
  /** Ссылка на карточку организации в Яндекс.Картах */
  mapsPlaceUrl?: string;
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
  /** Настройки источника отзывов (опционально) */
  reviewsSource?: {
    /** URL JSON-эндпойнта, который отдаёт отзывы (например, ваш прокси к Яндекс) */
    endpointUrl?: string;
    /** Ссылка на Яндекс.Карты для кнопки "Смотреть все" */
    placeUrl?: string;
  };
};
