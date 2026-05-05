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

  return (
    <Box bg="bg.canvas" color="fg.default">
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

      <Box as="main">
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
            eyebrow="О сервисе"
            title="Опыт, прозрачность и понятная коммуникация"
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
            eyebrow="Отзывы"
            title="Что говорят клиенты"
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
              >
                <Text color="fg.muted" mb={3}>
                  {review.text}
                </Text>
                <Text fontWeight="700">{review.author}</Text>
                <Text color="fg.subtle" fontSize="sm">
                  {review.role}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
          </SectionBlock>
        </Reveal>

        <Reveal delayMs={100}>
          <SectionBlock
            eyebrow="Процесс"
            title="Как проходит работа с сервисом"
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
          <HStack mb={2}>
            <Icon as={FiClock} color="brand.400" />
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
