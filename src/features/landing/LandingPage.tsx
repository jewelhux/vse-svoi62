"use client";

import {
  Accordion,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useLandingQuery } from "@/api/landing/hooks/useLandingQuery";
import { FiArrowRight, FiCheckCircle, FiClock, FiPhone, FiSend, FiShield, FiStar } from "react-icons/fi";
import { useUiStore } from "@/stores/useUiStore";

type CtaProps = {
  phone: string;
  telegramUrl: string;
  compact?: boolean;
};

type SectionBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

function CtaButtons({ phone, telegramUrl, compact = false }: CtaProps) {
  return (
    <HStack gap={3} flexWrap="wrap">
      <Button asChild colorPalette="blue" size={compact ? "sm" : "md"}>
        <Link href={telegramUrl} target="_blank">
          <Icon as={FiSend} /> Написать в Telegram
        </Link>
      </Button>
      <Button asChild variant="outline" size={compact ? "sm" : "md"}>
        <Link href={`tel:${phone.replace(/\s/g, "")}`}>
          <Icon as={FiPhone} /> Позвонить
        </Link>
      </Button>
    </HStack>
  );
}

function SectionBlock({ id, eyebrow, title, description, children }: SectionBlockProps) {
  return (
    <Stack id={id} gap={6} mt={16}>
      <Stack gap={3} maxW="720px">
        {eyebrow ? (
          <Text color="blue.600" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" fontSize="sm">
            {eyebrow}
          </Text>
        ) : null}
        <Heading size="xl">{title}</Heading>
        {description ? <Text color="gray.600">{description}</Text> : null}
      </Stack>
      {children}
    </Stack>
  );
}

export default function LandingPage() {
  const { data } = useLandingQuery();
  const { isMobileMenuOpen, setMobileMenuOpen } = useUiStore();

  if (!data) return null;

  return (
    <Box bg="gray.50" color="gray.900">
      <Box as="header" bg="white" borderBottomWidth="1px" position="sticky" top={0} zIndex={10}>
        <Container maxW="1200px" py={4}>
          <Flex align="center" justify="space-between" gap={4}>
            <Link href="#" display="inline-flex" alignItems="center">
              <Image src={data.logoSrc} alt={`${data.brandName} логотип`} width={220} height={56} priority />
            </Link>
            <HStack display={{ base: "none", md: "flex" }} gap={6}>
              <Link href="#services">Услуги</Link>
              <Link href="#works">Работы</Link>
              <Link href="#faq">FAQ</Link>
              <Link href="#contacts">Контакты</Link>
            </HStack>
            <HStack display={{ base: "none", lg: "flex" }}>
              <CtaButtons phone={data.contacts.phone} telegramUrl={data.contacts.telegramUrl} compact />
            </HStack>
            <Button
              size="sm"
              display={{ base: "inline-flex", md: "none" }}
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              Меню
            </Button>
          </Flex>
          {isMobileMenuOpen && (
            <Stack pt={3} display={{ base: "flex", md: "none" }} gap={3}>
              <Link href="#services" onClick={() => setMobileMenuOpen(false)}>
                Услуги
              </Link>
              <Link href="#works" onClick={() => setMobileMenuOpen(false)}>
                Работы
              </Link>
              <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="#contacts" onClick={() => setMobileMenuOpen(false)}>
                Контакты
              </Link>
              <CtaButtons phone={data.contacts.phone} telegramUrl={data.contacts.telegramUrl} compact />
            </Stack>
          )}
        </Container>
      </Box>

      <Container as="main" maxW="1200px" py={{ base: 8, md: 16 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, lg: 10 }}>
          <Stack gap={5}>
            <Box
              display="inline-flex"
              alignSelf="flex-start"
              px={3}
              py={1.5}
              borderRadius="full"
              bg="blue.50"
              color="blue.700"
              fontWeight="700"
              fontSize="sm"
            >
              {data.heroBadge}
            </Box>
            <Heading as="h1" size="2xl">
              {data.heroTitle}
            </Heading>
            <Text color="gray.600" fontSize="lg">
              {data.heroSubtitle}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
              {data.heroHighlights.map((item) => (
                <HStack key={item} align="start">
                  <Icon as={FiCheckCircle} color="green.500" mt={1} />
                  <Text>{item}</Text>
                </HStack>
              ))}
            </SimpleGrid>
            <CtaButtons phone={data.contacts.phone} telegramUrl={data.contacts.telegramUrl} />
            <HStack gap={3} color="gray.600">
              <Icon as={FiStar} color="orange.400" />
              <Text>{data.ratingLabel}</Text>
            </HStack>
          </Stack>
          <Box borderRadius="xl" overflow="hidden" minH="320px" position="relative">
            <Image src={data.galleryImages[0]} alt="Автосервис Все Свои 62" fill style={{ objectFit: "cover" }} />
          </Box>
        </SimpleGrid>

        <SectionBlock
          eyebrow="Преимущества"
          title="Почему к нам обращаются за ремонтом и обслуживанием"
          description={data.sectionIntro}
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
            {data.advantages.map((item) => (
              <Box key={item.title} p={5} bg="white" borderRadius="xl" borderWidth="1px" boxShadow="sm">
                <Icon as={FiShield} color="blue.500" mb={3} />
                <Text fontWeight="700" mb={2}>
                  {item.title}
                </Text>
                <Text color="gray.600">{item.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </SectionBlock>

        <SectionBlock
          id="services"
          eyebrow="Услуги"
          title="Основные направления работы сервиса"
          description="Закрываем как локальные задачи, так и полноценный комплекс кузовного, слесарного и малярного ремонта."
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            {data.services.map((service) => (
              <Box key={service.title} p={5} bg="white" borderRadius="xl" borderWidth="1px" boxShadow="sm">
                <Text fontWeight="700" mb={2}>
                  {service.title}
                </Text>
                <Text color="gray.600" mb={4}>
                  {service.description}
                </Text>
                <Button asChild size="sm" variant="outline">
                  <Link href={data.contacts.telegramUrl} target="_blank">
                    Запросить расчет <Icon as={FiArrowRight} />
                  </Link>
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </SectionBlock>

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
          id="works"
          eyebrow="Портфолио"
          title="Наши работы"
          description="Подготовили стартовую галерею, чтобы показать общий характер работ и визуальную подачу сервиса."
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
            {data.galleryImages.map((imageUrl, index) => (
              <Box key={imageUrl} borderRadius="xl" overflow="hidden" position="relative" minH="220px">
                <Image src={imageUrl} alt={`Пример работы автосервиса ${index + 1}`} fill style={{ objectFit: "cover" }} />
              </Box>
            ))}
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

        <SectionBlock
          id="faq"
          eyebrow="FAQ"
          title="Частые вопросы"
          description="Собрали базовые ответы, которые помогают быстро понять сценарий работы сервиса."
        >
          <Accordion.Root collapsible>
            {data.faq.map((faqItem, index) => (
              <Accordion.Item key={faqItem.question} value={`item-${index}`}>
                <Accordion.ItemTrigger>
                  <Text flex="1" textAlign="left">
                    {faqItem.question}
                  </Text>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody color="gray.600">{faqItem.answer}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </SectionBlock>

        <SectionBlock
          id="contacts"
          eyebrow="Контакты"
          title="Связаться с сервисом"
          description="Можно сразу написать в Telegram, позвонить или приехать по адресу в Рязани."
        >
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            <Stack bg="white" borderWidth="1px" borderRadius="xl" p={6} gap={3}>
              <Text fontWeight="700">Телефон</Text>
              <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>{data.contacts.phone}</Link>
              <Text fontWeight="700" mt={2}>
                Telegram
              </Text>
              <Link href={data.contacts.telegramUrl} target="_blank" color="blue.600">
                {data.contacts.telegramUrl}
              </Link>
              <Text fontWeight="700" mt={2}>
                Адрес
              </Text>
              <Text>{data.contacts.address}</Text>
              <Text fontWeight="700" mt={2}>
                Режим работы
              </Text>
              <Text>{data.contacts.workingHours}</Text>
              <CtaButtons phone={data.contacts.phone} telegramUrl={data.contacts.telegramUrl} />
            </Stack>
            <Box borderRadius="xl" overflow="hidden" minH="320px" bg="white" borderWidth="1px">
              <iframe
                title="Карта автосервиса"
                src={data.contacts.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                loading="lazy"
              />
            </Box>
          </SimpleGrid>
        </SectionBlock>
      </Container>

      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg="white"
        borderTopWidth="1px"
        p={3}
        zIndex={20}
      >
        <HStack>
          <Button asChild flex={1} colorPalette="blue">
            <Link href={data.contacts.telegramUrl} target="_blank">
              Telegram
            </Link>
          </Button>
          <Button asChild flex={1} variant="outline">
            <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>Позвонить</Link>
          </Button>
        </HStack>
      </Box>

      <Box as="footer" bg="gray.900" color="gray.100" py={8}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <Stack gap={2}>
              <Text fontWeight="700">{data.brandName}</Text>
              <Text fontSize="sm" color="gray.400">
                Автосервис в Рязани. Все права защищены.
              </Text>
            </Stack>
            <Stack gap={2}>
              <Link href="#services">Услуги</Link>
              <Link href="#works">Наши работы</Link>
              <Link href="#contacts">Контакты</Link>
            </Stack>
            <Stack gap={2}>
              <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>{data.contacts.phone}</Link>
              <Link href={data.contacts.telegramUrl} target="_blank">
                Telegram
              </Link>
              <Text color="gray.400">{data.contacts.address}</Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
