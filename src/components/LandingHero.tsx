import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiCheckCircle, FiClock, FiMapPin, FiStar } from "react-icons/fi";
import type { LandingData } from "../types";
import Image from "next/image";
import type { CSSProperties } from "react";

export type LandingHeroProps = {
  data: LandingData;
};

export function LandingHero({ data }: LandingHeroProps) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="bg.card"
      minH={{ base: "520px", md: "620px" }}
    >
      <Image
        src="/images/services/background.jpg"
        alt="Автосервис — фон"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
      />
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(135deg, rgba(13,15,20,0.96) 0%, rgba(13,15,20,0.72) 55%, rgba(13,15,20,0.96) 100%)"
      />
      <Box
        position="absolute"
        inset={0}
        bg="radial-gradient(720px 420px at 75% 10%, rgba(47,170,255,0.22), rgba(0,0,0,0) 60%)"
      />
      <Box
        position="absolute"
        inset={0}
        bg="radial-gradient(640px 420px at 25% 95%, rgba(239,163,16,0.14), rgba(0,0,0,0) 62%)"
      />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height={{ base: "56px", md: "84px" }}
        // Маска нужна, чтобы верхняя кромка blur не читалась «линией» на фоне.
        backdropFilter="blur(4px) saturate(120%)"
        bg="linear-gradient(180deg, rgba(13,15,20,0) 0%, rgba(13,15,20,0.18) 25%, rgba(13,15,20,0.62) 78%, rgba(13,15,20,0.92) 100%)"
        style={
          {
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)",
          } as CSSProperties
        }
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative" py={{ base: 10, md: 14 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 14 }}>
          <Stack gap={6} pt={{ base: 0, lg: 4 }}>
            <Box
              display="inline-flex"
              alignSelf="flex-start"
              px={3}
              py={1.5}
              borderRadius="full"
              bg="rgba(239, 163, 16, 0.12)"
              borderWidth="1px"
              borderColor="rgba(239, 163, 16, 0.22)"
              color="brand.400"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              {data.heroBadge}
            </Box>

            <Stack gap={3}>
              <Text
                color="rgba(255,255,255,0.76)"
                fontWeight="700"
                letterSpacing="0.06em"
                textTransform="uppercase"
                fontSize="sm"
              >
                Автосервис в Рязани
              </Text>
              <Heading as="h1" size="2xl" letterSpacing="-0.03em">
                {data.heroTitle}
              </Heading>
              <Text
                color="rgba(255,255,255,0.82)"
                fontSize="lg"
                lineHeight="1.8"
              >
                {data.heroSubtitle}
              </Text>
            </Stack>

            <HStack gap={3} flexWrap="wrap">
              <HStack
                gap={2}
                px={3}
                py={2}
                borderRadius="full"
                bg="rgba(13, 15, 20, 0.42)"
                borderWidth="1px"
                borderColor="rgba(255,255,255,0.08)"
                backdropFilter="blur(10px)"
              >
                <Icon as={FiStar} color="brand.400" />
                <Text color="rgba(255,255,255,0.78)" fontSize="sm">
                  {data.ratingLabel}
                </Text>
              </HStack>
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={3} pt={2}>
              {data.heroHighlights.map((item) => (
                <HStack key={item} align="start">
                  <Icon as={FiCheckCircle} color="brand.400" mt={1} />
                  <Text color="rgba(255,255,255,0.78)">{item}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </Stack>

          <Stack
            gap={4}
            justify="center"
            align={{ base: "stretch", lg: "end" }}
            pb={{ base: 2, lg: 6 }}
          >
            <Box
              maxW={{ base: "100%", lg: "520px" }}
              bg="rgba(13, 15, 20, 0.52)"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              borderRadius="2xl"
              backdropFilter="blur(12px) saturate(120%)"
              boxShadow="shadow.glowCyan"
              p={{ base: 5, md: 6 }}
            >
              <Stack gap={4}>
                <Stack gap={2}>
                  <HStack gap={2} align="center">
                    <Image
                      src="/images/icons/yandex_goodplace.svg"
                      alt="Награда Яндекс Карты «Хорошее место»"
                      width={22}
                      height={22}
                      style={{ flex: "0 0 auto" }}
                    />
                    <Heading size="md" letterSpacing="-0.02em">
                      {data.brandName}
                    </Heading>
                  </HStack>
                  <Text color="rgba(255,255,255,0.76)">
                    Кузовной, слесарный и малярный ремонт с прозрачной сметой.
                  </Text>
                </Stack>

                <Stack gap={3}>
                  <Link
                    href={data.contacts.mapsPlaceUrl ?? "https://yandex.ru/maps/-/CPWkRK~f"}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    _hover={{ textDecoration: "none" }}
                    _focusVisible={{
                      outline: "2px solid",
                      outlineColor: "brand.400",
                      outlineOffset: "2px",
                      borderRadius: "xl",
                    }}
                    asChild
                  >
                    <HStack
                      as="a"
                      gap={3}
                      p={3}
                      borderRadius="xl"
                      bg="rgba(255,255,255,0.04)"
                      borderWidth="1px"
                      borderColor="rgba(255,255,255,0.08)"
                      cursor="pointer"
                      transition="background-color 160ms ease, border-color 160ms ease"
                      _hover={{
                        bg: "rgba(255,255,255,0.06)",
                        borderColor: "rgba(255,255,255,0.14)",
                      }}
                    >
                      <Icon as={FiMapPin} color="brand.400" />
                      <Stack gap={0} minW={0}>
                        <Text fontWeight="700">Рязань</Text>
                        <Text
                          color="rgba(255,255,255,0.74)"
                          fontSize="sm"
                          lineClamp={2}
                        >
                          {data.contacts.address}
                        </Text>
                      </Stack>
                    </HStack>
                  </Link>

                  <HStack gap={3} color="rgba(255,255,255,0.76)">
                    <Icon as={FiClock} color="brand.400" />
                    <Text fontSize="sm">{data.contacts.workingHours}</Text>
                  </HStack>
                </Stack>
              </Stack>
            </Box>

            <Box
              maxW={{ base: "100%", lg: "420px" }}
              bg="rgba(13, 15, 20, 0.42)"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              borderRadius="2xl"
              backdropFilter="blur(12px) saturate(120%)"
              boxShadow="shadow.glowBrand"
              p={{ base: 5, md: 6 }}
            >
              <Stack gap={2}>
                <Heading size="sm">Быстрая оценка по фото</Heading>
                <Text color="rgba(255,255,255,0.76)">
                  Скиньте фото и пару слов о проблеме — ответим по стоимости и
                  срокам.
                </Text>
                <Button
                  asChild
                  mt={2}
                  colorPalette="brand"
                  size="sm"
                  alignSelf="flex-start"
                  color="fg.default"
                  bg="rgba(239,163,16,0.12)"
                  borderWidth="1px"
                  borderColor="rgba(239,163,16,0.28)"
                  boxShadow="shadow.glowBrand"
                  transition="background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, color 160ms ease"
                  _hover={{
                    bg: "rgba(239,163,16,0.18)",
                    borderColor: "rgba(239,163,16,0.52)",
                    color: "fg.default",
                  }}
                  _active={{ bg: "rgba(239,163,16,0.22)" }}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "brand.400",
                    outlineOffset: "2px",
                  }}
                >
                  <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>
                    Получить расчёт
                  </Link>
                </Button>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
