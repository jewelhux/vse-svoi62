import { useEffect, useState } from "react";
import type { LandingData, Review, ReviewsApiResponse } from "../types";
import {
  Badge,
  Box,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { SectionBlock } from "./SectionBlock";

function clampRating(value: number | undefined) {
  if (!Number.isFinite(value)) return undefined;
  return Math.min(5, Math.max(1, Math.round(value as number)));
}

function formatCurrentMonthYear() {
  const now = new Date();
  // Важно: используем текущую дату (маркетинговый блок), без привязки к API.
  return now.toLocaleDateString("ru-RU", { year: "numeric", month: "long" });
}

function getDisplayReviews(remote: ReviewsApiResponse | null, localReviews: Review[]) {
  const remoteReviews = remote?.reviews;
  if (!remoteReviews?.length) {
    return localReviews.slice(0, 4);
  }

  const uniqKey = (review: Review) => `${review.author}::${review.text}`;
  const existing = new Set(remoteReviews.map(uniqKey));
  const reviews = [...remoteReviews];

  for (const review of localReviews) {
    if (reviews.length >= 4) {
      break;
    }

    const key = uniqKey(review);
    if (existing.has(key)) {
      continue;
    }

    reviews.push(review);
    existing.add(key);
  }

  return reviews.slice(0, 4);
}

type RenderItem =
  | { kind: "skeleton"; key: string }
  | { kind: "review"; key: string; review: Review };

function getRenderItems(loading: boolean, remote: ReviewsApiResponse | null, reviews: Review[]): RenderItem[] {
  if (loading && !remote) {
    return Array.from({ length: 4 }, (_, index) => ({
      kind: "skeleton" as const,
      key: `sk-${index}`,
    }));
  }

  return reviews.map((review, index) => ({
    kind: "review" as const,
    key: `${review.author}-${index}`,
    review,
  }));
}

function RatingStars({ rating, label }: { rating: number; label: string }) {
  return (
    <HStack gap={1} aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          as={FaStar}
          boxSize={4}
          color={index < rating ? "brand.400" : "rgba(255,255,255,0.22)"}
        />
      ))}
    </HStack>
  );
}

export type ReviewsSectionProps = {
  data: LandingData;
};

export function ReviewsSection({ data }: ReviewsSectionProps) {
  const [remote, setRemote] = useState<ReviewsApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const endpointUrl =
    data.reviewsSource?.endpointUrl?.trim() ||
    (process.env.NEXT_PUBLIC_YANDEX_REVIEWS_ENDPOINT?.trim() ?? "");

  const placeUrl = data.reviewsSource?.placeUrl ?? data.contacts.mapsPlaceUrl;
  const remoteRating = clampRating(remote?.rating);
  const reviews = getDisplayReviews(remote, data.reviews);
  const renderItems = getRenderItems(loading, remote, reviews);
  const reviewPageUrl = remote?.placeUrl ?? placeUrl;
  const hasRemoteMeta = Boolean(remote && (remoteRating || remote.ratingCount || remote.updatedAt));

  useEffect(() => {
    if (!endpointUrl) return;

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 8000);
    const startLoadingId = window.setTimeout(() => setLoading(true), 0);

    fetch(endpointUrl, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Bad response: ${res.status}`);
        return (await res.json()) as ReviewsApiResponse;
      })
      .then((payload) => setRemote(payload))
      .catch(() => {
        // Fallback на локальные отзывы — страницу не ломаем.
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
        window.clearTimeout(startLoadingId);
        setLoading(false);
      });

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(startLoadingId);
      controller.abort();
    };
  }, [endpointUrl]);

  return (
    <SectionBlock
      title="Отзывы"
      subtitle="Что говорят клиенты"
      description="Честная диагностика, понятная смета и человеческое отношение — это чаще всего отмечают в отзывах."
    >
      <SimpleGrid columns={{ base: 1, lg: 12 }} gap={4} alignItems="stretch">
        <Box
          gridColumn={{ base: "1 / -1", lg: "1 / span 4" }}
          p={5}
          bg="bg.card"
          borderRadius="xl"
          boxShadow="shadow.glowBrand"
          backdropFilter="blur(12px)"
          position="relative"
          overflow="hidden"
          h="full"
          display="flex"
          flexDirection="column"
        >
          <Box
            position="absolute"
            inset={0}
            bg="radial-gradient(520px 320px at 35% 25%, rgba(239,163,16,0.14), rgba(0,0,0,0) 62%)"
            pointerEvents="none"
          />
          <Stack gap={4} position="relative" flex="1">
            <Box
              borderRadius="xl"
              overflow="hidden"
              bg="rgba(255,255,255,0.02)"
              position="relative"
              flex="1"
              // Умеренный размер: не "мылит" картинку и не ломает сетку справа
              minH={{ base: "300px", md: "340px" }}
              maxH={{ base: "360px", md: "420px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Stack
                position="relative"
                w="full"
                h="full"
                px={{ base: 5, md: 7 }}
                py={{ base: 6, md: 8 }}
                justify="center"
                align="center"
                textAlign="center"
                gap={4}
              >
                <Box
                  position="absolute"
                  inset={0}
                  bg="radial-gradient(420px 260px at 50% 30%, rgba(239,163,16,0.16), rgba(0,0,0,0) 62%)"
                  pointerEvents="none"
                />
                <Stack position="relative" gap={3} align="center">
                  <Image
                    src="/images/icons/yandex_goodplace.svg"
                    alt="Яндекс Карты — Хорошее место"
                    width={88}
                    height={88}
                    style={{ display: "block" }}
                  />
                  <Stack gap={1}>
                    <Text fontWeight="900" fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.03em">
                      Хорошее место 2026
                    </Text>
                    <Text color="fg.muted" fontWeight="600">
                      Яндекс.Карты
                    </Text>
                  </Stack>
                </Stack>

                {hasRemoteMeta ? (
                  <Stack position="relative" gap={2} w="full" maxW="360px">
                    {remote?.rating ? (
                      <HStack justify="center" gap={2} flexWrap="wrap">
                        <RatingStars rating={remoteRating ?? 0} label={`Рейтинг: ${remote.rating} из 5`} />
                        <Badge
                          bg="rgba(255,255,255,0.06)"
                          borderWidth="1px"
                          borderColor="rgba(255,255,255,0.10)"
                          color="rgba(255,255,255,0.88)"
                          fontWeight="800"
                        >
                          {remote.rating.toFixed(1)}
                        </Badge>
                        {remote.ratingCount ? (
                          <Text fontSize="sm" color="fg.muted" fontWeight="600">
                            {remote.ratingCount} отзывов
                          </Text>
                        ) : null}
                      </HStack>
                    ) : null}

                    <Text fontSize="sm" color="rgba(255,255,255,0.62)" fontWeight="600">
                      Обновлено: {formatCurrentMonthYear()}
                    </Text>
                  </Stack>
                ) : (
                  <Text position="relative" color="rgba(255,255,255,0.72)" fontWeight="700">
                    Награда по версии клиентов — спасибо за доверие.
                  </Text>
                )}

                {reviewPageUrl ? (
                  <Link
                    href={reviewPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    fontWeight="800"
                    fontSize="sm"
                    color="rgba(255,255,255,0.84)"
                    bg="rgba(255,255,255,0.06)"
                    borderWidth="1px"
                    borderColor="rgba(255,255,255,0.12)"
                    px={4}
                    py={2}
                    borderRadius="full"
                    _hover={{ bg: "rgba(255,255,255,0.10)", borderColor: "rgba(239,163,16,0.34)", textDecoration: "none" }}
                    _focusVisible={{
                      outline: "2px solid",
                      outlineColor: "brand.400",
                      outlineOffset: "2px",
                      borderRadius: "full",
                    }}
                  >
                    <Text>Посмотреть все отзывы</Text>
                    <Icon as={FiExternalLink} />
                  </Link>
                ) : null}
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box gridColumn={{ base: "1 / -1", lg: "5 / -1" }} h="full">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} alignItems="stretch" gridAutoRows="1fr">
            {renderItems.map((item) => {
              if (item.kind === "skeleton") {
                return (
                  <Box
                    key={item.key}
                    p={5}
                    bg="bg.card"
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="border.glass"
                    boxShadow="shadow.glowCyan"
                    backdropFilter="blur(12px)"
                    h="full"
                  >
                    <SkeletonText noOfLines={4} gap={3} />
                    <Skeleton height="18px" mt={4} width="40%" />
                  </Box>
                );
              }

              const review = item.review;
              const rating = clampRating(review.rating);
              const photos = (review.photoUrls ?? []).filter(Boolean).slice(0, 8);

              return (
                <Box
                  key={item.key}
                  p={5}
                  bg="bg.card"
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="border.glass"
                  boxShadow="shadow.glowCyan"
                  backdropFilter="blur(12px)"
                  transition="transform 180ms ease, background 180ms ease"
                  _hover={{ transform: "translateY(-3px)", bg: "bg.glassStrong" }}
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  h="full"
                >
                  <Stack gap={2}>
                    <HStack justify="space-between" align="start" gap={3}>
                      <Text fontWeight="800" color="fg.default">
                        {review.author}
                      </Text>
                    </HStack>

                    {rating ? (
                      <RatingStars rating={rating} label={`Рейтинг: ${rating} из 5`} />
                    ) : null}
                  </Stack>

                  <Text flex="1" color="fg.muted" lineHeight="1.8">
                    {review.text}
                  </Text>

                  {photos.length ? (
                    <SimpleGrid columns={{ base: 3, md: 4 }} gap={2}>
                      {photos.map((url) => (
                        <Link
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          borderRadius="lg"
                          overflow="hidden"
                          borderWidth="1px"
                          borderColor="rgba(255,255,255,0.10)"
                          bg="rgba(255,255,255,0.02)"
                          _hover={{ borderColor: "rgba(239,163,16,0.42)" }}
                          _focusVisible={{
                            outline: "2px solid",
                            outlineColor: "brand.400",
                            outlineOffset: "2px",
                          }}
                        >
                          <Image
                            src={url}
                            alt="Фото из отзыва"
                            width={220}
                            height={220}
                            unoptimized
                            style={{ width: "100%", height: "auto", display: "block" }}
                          />
                        </Link>
                      ))}
                    </SimpleGrid>
                  ) : null}

                  {review.sourceUrl ? (
                    <Link
                      href={review.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                      fontWeight="700"
                      fontSize="sm"
                      color="rgba(255,255,255,0.78)"
                      alignSelf="flex-start"
                      _hover={{ color: "fg.default", textDecoration: "none" }}
                      _focusVisible={{
                        outline: "2px solid",
                        outlineColor: "brand.400",
                        outlineOffset: "2px",
                        borderRadius: "md",
                      }}
                    >
                      <Text>Открыть отзыв</Text>
                      <Icon as={FiExternalLink} />
                    </Link>
                  ) : null}
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </SectionBlock>
  );
}

