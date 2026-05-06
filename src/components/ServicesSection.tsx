import { Box, Button, Icon, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import type { LandingData } from "../types";
import { SectionBlock } from "./SectionBlock";

export type ServicesSectionProps = {
  data: LandingData;
};

export function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <SectionBlock
      id="services"
      title="Услуги"
      subtitle="Основные направления работы сервиса"
      description="Закрываем как локальные задачи, так и полноценный комплекс кузовного, слесарного и малярного ремонта."
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {data.services.map((service) => (
          <Box
            key={service.title}
            bg="bg.card"
            borderRadius="xl"
            borderWidth="1px"
            borderColor="border.glass"
            boxShadow="shadow.glowCyan"
            backdropFilter="blur(12px)"
            transition="transform 180ms ease, background 180ms ease"
            _hover={{ transform: "translateY(-3px)", bg: "bg.glassStrong" }}
            overflow="hidden"
          >
            <Box position="relative" height={{ base: "160px", md: "180px" }}>
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                sizes="(max-width: 48em) 100vw, (max-width: 62em) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(180deg, rgba(13,15,20,0.10) 0%, rgba(13,15,20,0.85) 100%)"
              />
            </Box>
            <Box p={5}>
              <Text fontWeight="700" mb={2}>
                {service.title}
              </Text>
              <Text color="fg.muted" mb={4}>
                {service.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </SectionBlock>
  );
}
