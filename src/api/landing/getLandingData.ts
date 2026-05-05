import { landingContent } from "@/features/landing/content";
import { LandingData } from "@/features/landing/types";

export async function getLandingData(): Promise<LandingData> {
  // Здесь оставляем mock API-контракт, чтобы безболезненно заменить на реальный endpoint.
  return Promise.resolve(landingContent);
}
