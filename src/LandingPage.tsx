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
  SectionBlock,
  ServicesSection
} from "./components";

export default function LandingPage() {
  const data = landingContent;

  return (
    <Box bg="gray.50" color="gray.900">
      <Box as="header" bg="white" borderBottomWidth="1px" position="sticky" top={0} zIndex={10}>
        <LandingHeader data={data} />
      </Box>

      <Container as="main" maxW="1200px" py={{ base: 8, md: 16 }}>
        <LandingHero data={data} />

        <AdvantagesSection data={data} />

        <ServicesSection data={data} />

        <SectionBlock
          eyebrow="О сервисе"
          title="Опыт, прозрачность и понятная коммуникация"
          description={data.companyDescription}
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            <Box p={5} bg="white" borderRadius="xl" borderWidth="1px">
              <Text fontSize="3xl" fontWeight="800" color="blue.600">
                2006
              </Text>
              <Text color="gray.600">Работаем с автомобилями и сопровождаем ремонт от диагностики до выдачи.</Text>
            </Box>
            <Box p={5} bg="white" borderRadius="xl" borderWidth="1px">
              <Text fontSize="3xl" fontWeight="800" color="blue.600">
                6+
              </Text>
              <Text color="gray.600">Основных направлений: от кузовных работ до полировки и тюнинга.</Text>
            </Box>
            <Box p={5} bg="white" borderRadius="xl" borderWidth="1px">
              <Text fontSize="3xl" fontWeight="800" color="blue.600">
                1
              </Text>
              <Text color="gray.600">Основной сценарий связи: Telegram или звонок без лишних промежуточных шагов.</Text>
            </Box>
          </SimpleGrid>
        </SectionBlock>

        <SectionBlock
          eyebrow="Отзывы"
          title="Что говорят клиенты"
          description="В отзывах повторяется одно и то же: честная диагностика, понятная смета и человеческое отношение."
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            {data.reviews.map((review) => (
              <Box key={review.author} p={5} bg="white" borderRadius="xl" borderWidth="1px">
                <Text color="gray.700" mb={3}>
                  {review.text}
                </Text>
                <Text fontWeight="700">{review.author}</Text>
                <Text color="gray.500" fontSize="sm">
                  {review.role}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </SectionBlock>

        <SectionBlock
          eyebrow="Процесс"
          title="Как проходит работа с сервисом"
          description="Упростили путь клиента до нескольких понятных шагов: от обращения до выдачи автомобиля."
        >
          <SimpleGrid columns={{ base: 1, md: 5 }} gap={4}>
            {data.workSteps.map((step, index) => (
              <Box key={step.title} p={4} bg="white" borderRadius="xl" borderWidth="1px">
                <Text fontWeight="700">
                  {index + 1}. {step.title}
                </Text>
                <Text color="gray.600" fontSize="sm">
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </SectionBlock>

        <Box mt={16} p={6} borderRadius="xl" bg="blue.50" borderWidth="1px">
          <HStack mb={2}>
            <Icon as={FiClock} color="blue.500" />
            <Heading size="md">Как быстро оценить стоимость</Heading>
          </HStack>
          <Text color="gray.700">{data.quickEstimateText}</Text>
        </Box>

        <FaqSection data={data} />

        <ContactsSection data={data} />
      </Container>

      <MobileBottomBar data={data} />

      <LandingFooter data={data} />
    </Box>
  );
}
