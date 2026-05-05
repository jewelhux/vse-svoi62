import { Box, Button, Icon, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import type { LandingData } from "../features/landing/types";
import { SectionBlock } from "./SectionBlock";

export type ServicesSectionProps = {
  data: LandingData;
};

export function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <SectionBlock
      id="services"
      eyebrow="Услуги"
      title="Основные направления работы сервиса"
      description="Закрываем как локальные задачи, так и полноценный комплекс кузовного, слесарного и малярного ремонта."
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {data.services.map((service) => (
          <Box
            key={service.title}
            p={5}
            bg="white"
            borderRadius="xl"
            borderWidth="1px"
            boxShadow="sm"
          >
            <Box
              mb={4}
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              height="140px"
            >
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                sizes="(max-width: 48em) 100vw, (max-width: 62em) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
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
  );
}
