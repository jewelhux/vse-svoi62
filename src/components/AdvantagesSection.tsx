import { Box, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FiShield } from "react-icons/fi";
import type { LandingData } from "../types";
import { SectionBlock } from "./SectionBlock";

export type AdvantagesSectionProps = {
  data: LandingData;
};

export function AdvantagesSection({ data }: AdvantagesSectionProps) {
  return (
    <SectionBlock
      eyebrow="Преимущества"
      title="Почему к нам обращаются за ремонтом и обслуживанием"
      description={data.sectionIntro}
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
        {data.advantages.map((item) => (
          <Box
            key={item.title}
            p={5}
            bg="bg.card"
            borderRadius="xl"
            borderWidth="1px"
            borderColor="border.glass"
            boxShadow="shadow.glowBrand"
            backdropFilter="blur(12px)"
            transition="transform 180ms ease, background 180ms ease"
            _hover={{ transform: "translateY(-3px)", bg: "bg.glassStrong" }}
          >
            <Icon as={FiShield} color="brand.400" mb={3} />
            <Text fontWeight="700" mb={2}>
              {item.title}
            </Text>
            <Text color="fg.muted">{item.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </SectionBlock>
  );
}
