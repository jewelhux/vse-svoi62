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
  SectionBlock,
  ServicesSection
} from "./components";

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
            <Box
              p={5}
              bg="bg.card"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="border.glass"
              boxShadow="shadow.glowBrand"
              backdropFilter="blur(12px)"
            >
              <Text fontSize="3xl" fontWeight="800" color="brand.400">
                2006
              </Text>
              <Text color="fg.muted">Работаем с автомобилями и сопровождаем ремонт от диагностики до выдачи.</Text>
            </Box>
            <Box
              p={5}
              bg="bg.card"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="border.glass"
              boxShadow="shadow.glowCyan"
              backdropFilter="blur(12px)"
            >
              <Text fontSize="3xl" fontWeight="800" color="brand.400">
                6+
              </Text>
              <Text color="fg.muted">Основных направлений: от кузовных работ до полировки и тюнинга.</Text>
            </Box>
            <Box
              p={5}
              bg="bg.card"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="border.glass"
              boxShadow="shadow.glowBrand"
              backdropFilter="blur(12px)"
            >
              <Text fontSize="3xl" fontWeight="800" color="brand.400">
                1
              </Text>
              <Text color="fg.muted">Основной сценарий связи: Telegram или звонок без лишних промежуточных шагов.</Text>
            </Box>
          </SimpleGrid>
          </SectionBlock>
        </Reveal>

        <Reveal delayMs={90}>
          <SectionBlock
            title="Отзывы"
            subtitle="Что говорят клиенты"
            description="В отзывах повторяется одно и то же: честная диагностика, понятная смета и человеческое отношение."
          >
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            {data.reviews.map((review) => (
              <Box
                key={review.author}
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
              >
                {/* flex:1 держит подпись внизу карточки при разной длине текста */}
                <Text flex="1" color="fg.muted" mb={4}>
                  {review.text}
                </Text>
                <Text
                  fontWeight="700"
                  color="brand.400"
                  textAlign="right"
                  flexShrink={0}
                >
                  {review.author}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
          </SectionBlock>
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
                p={4}
                bg="bg.card"
                borderRadius="xl"
                borderWidth="1px"
                borderColor="border.glass"
                boxShadow="shadow.glowBrand"
                backdropFilter="blur(12px)"
                transition="transform 180ms ease, background 180ms ease"
                _hover={{ transform: "translateY(-3px)", bg: "bg.glassStrong" }}
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

        <Reveal delayMs={120}>
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
