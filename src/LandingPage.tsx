"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { useEffect } from "react";
import { landingContent } from "./content";
import {
  AdvantagesSection,
  ContactsSection,
  FaqSection,
  LandingFooter,
  LandingHeader,
  LandingHero,
  MobileBottomBar,
  Reveal,
  ReviewsSection,
  SectionBlock,
  ServicesSection
} from "./components";

const aboutHighlights = [
  {
    value: "2006",
    description: "Работаем с автомобилями и сопровождаем ремонт от диагностики до выдачи.",
    boxShadow: "shadow.glowBrand",
  },
  {
    value: "6+",
    description: "Основных направлений: от кузовных работ до полировки и тюнинга.",
    boxShadow: "shadow.glowCyan",
  },
  {
    value: "1",
    description: "Основной сценарий связи: Telegram или звонок без лишних промежуточных шагов.",
    boxShadow: "shadow.glowBrand",
  },
] as const;

const staticCardProps = {
  bg: "bg.card",
  borderRadius: "xl",
  borderWidth: "1px",
  borderColor: "border.glass",
  backdropFilter: "blur(12px)",
} as const;

const interactiveCardProps = {
  ...staticCardProps,
  transition: "transform 180ms ease, background 180ms ease",
  _hover: { transform: "translateY(-3px)", bg: "bg.glassStrong" },
} as const;

export default function LandingPage() {
  const data = landingContent;

  useEffect(() => {
    if (!window.location.hash) return;

    // На обновлении страницы не даём браузеру «проваливаться» по якорю.
    const nextUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(window.history.state, "", nextUrl);

    // Перебиваем возможный авто-скролл к якорю.
    window.requestAnimationFrame(() => window.scrollTo(0, 0));
  }, []);

  return (
    <Box bg="bg.canvas" color="fg.default" overflowX="clip">
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={10}
        bg="rgba(13, 15, 20, 0.72)"
        borderBottomWidth="1px"
        borderColor="border.glass"
        backdropFilter="blur(12px)"
      >
        <LandingHeader data={data} />
      </Box>

      <Box as="main" pb={{ base: "calc(96px + env(safe-area-inset-bottom))", md: 0 }}>
        <Reveal>
          <LandingHero data={data} />
        </Reveal>

        <Container maxW="1200px" py={{ base: 10, md: 20 }}>
          <Reveal delayMs={40}>
            <AdvantagesSection data={data} />
          </Reveal>

          <Reveal delayMs={60}>
            <ServicesSection data={data} />
          </Reveal>

          <Reveal delayMs={80}>
            <SectionBlock
              title="О сервисе"
              subtitle="Опыт, прозрачность и понятная коммуникация"
              description={data.companyDescription}
            >
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
                {aboutHighlights.map((item) => (
                  <Box
                    key={item.value}
                    {...staticCardProps}
                    p={5}
                    boxShadow={item.boxShadow}
                  >
                    <Text fontSize="3xl" fontWeight="800" color="brand.400">
                      {item.value}
                    </Text>
                    <Text color="fg.muted">{item.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </SectionBlock>
          </Reveal>

          <Reveal delayMs={90}>
            <ReviewsSection data={data} />
          </Reveal>

          <Reveal delayMs={100}>
            <SectionBlock
              id="process"
              title="Процесс"
              subtitle="Как проходит работа с сервисом"
              description="Упростили путь клиента до нескольких понятных шагов: от обращения до выдачи автомобиля."
            >
              <SimpleGrid columns={{ base: 1, md: 5 }} gap={4}>
                {data.workSteps.map((step, index) => (
                  <Box
                    key={step.title}
                    {...interactiveCardProps}
                    p={4}
                    boxShadow="shadow.glowBrand"
                  >
                    <Text fontWeight="700">
                      {index + 1}. {step.title}
                    </Text>
                    <Text color="fg.muted" fontSize="sm">
                      {step.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </SectionBlock>
          </Reveal>

          <Reveal delayMs={110}>
            <Box
              mt={16}
              p={6}
              borderRadius="xl"
              bg="bg.glassStrong"
              borderWidth="1px"
              borderColor="border.glass"
              boxShadow="shadow.glowBrand"
              backdropFilter="blur(12px)"
            >
              <HStack mb={2} align="center" flexWrap="wrap">
                <Icon as={FiClock} color="brand.400" boxSize={5} flexShrink={0} />
                <Heading size="md">Как быстро оценить стоимость</Heading>
              </HStack>
              <Text color="fg.muted">{data.quickEstimateText}</Text>
            </Box>
          </Reveal>

          <Reveal delayMs={0} animate={false}>
            <FaqSection data={data} />
          </Reveal>

          <Reveal delayMs={130}>
            <ContactsSection data={data} />
          </Reveal>
        </Container>
      </Box>

      <MobileBottomBar data={data} />

      <LandingFooter data={data} />
    </Box>
  );
}
