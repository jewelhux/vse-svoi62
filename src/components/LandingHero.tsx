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
import { FiCheckCircle, FiStar } from "react-icons/fi";
import { CtaButtons } from "./CtaButtons";
import type { LandingData } from "../types";
import Image from "next/image";

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
        height={{ base: "36px", md: "48px" }}
        // Плавно «размываем» низ изображения, чтобы переход был мягче.
        backdropFilter="blur(4px)"
        bg="linear-gradient(180deg, rgba(13,15,20,0) 0%, rgba(13,15,20,0.58) 55%, rgba(13,15,20,1) 100%)"
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative" py={{ base: 10, md: 14 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 14 }}>
      <Stack
        gap={5}
        bg="rgba(13, 15, 20, 0.62)"
        borderWidth="1px"
        borderColor="rgba(255,255,255,0.08)"
        borderRadius="2xl"
        backdropFilter="blur(10px)"
        px={{ base: 5, md: 7 }}
        py={{ base: 6, md: 7 }}
        boxShadow="shadow.glowBrand"
      >
        <Box
          display="inline-flex"
          alignSelf="flex-start"
          px={3}
          py={1.5}
          borderRadius="full"
          bg="rgba(239, 163, 16, 0.12)"
          borderWidth="1px"
          borderColor="rgba(239, 163, 16, 0.22)"
          color="brand.300"
          fontWeight="700"
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="0.08em"
        >
          {data.heroBadge}
        </Box>
        <Heading as="h1" size="2xl" letterSpacing="-0.03em">
          {data.heroTitle}
        </Heading>
        <Text color="rgba(255,255,255,0.82)" fontSize="lg" lineHeight="1.8">
          {data.heroSubtitle}
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
          {data.heroHighlights.map((item) => (
            <HStack key={item} align="start">
              <Icon as={FiCheckCircle} color="brand.400" mt={1} />
              <Text color="rgba(255,255,255,0.78)">{item}</Text>
            </HStack>
          ))}
        </SimpleGrid>
        <HStack gap={3} flexWrap="wrap">
          <Button
            asChild
            colorPalette="brand"
            size="md"
            boxShadow="shadow.glowBrand"
            _hover={{ transform: "translateY(-1px)" }}
            transition="transform 180ms ease"
          >
            <Link href={data.contacts.telegramUrl} target="_blank">
              Написать в Telegram
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="md"
            borderColor="border.glass"
            bg="bg.glass"
            backdropFilter="blur(12px)"
            _hover={{ bg: "bg.glassStrong", transform: "translateY(-1px)" }}
            transition="transform 180ms ease"
          >
            <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>
              Позвонить
            </Link>
          </Button>
        </HStack>
        <HStack gap={3} color="fg.subtle">
          <Icon as={FiStar} color="brand.400" />
          <Text>{data.ratingLabel}</Text>
        </HStack>
      </Stack>

      <Box display={{ base: "none", lg: "block" }} />
    </SimpleGrid>
      </Container>
    </Box>
  );
}
