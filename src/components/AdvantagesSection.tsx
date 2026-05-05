import { Box, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FiShield } from "react-icons/fi";
import type { LandingData } from "../features/landing/types";
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
            bg="white"
            borderRadius="xl"
            borderWidth="1px"
            boxShadow="sm"
          >
            <Icon as={FiShield} color="blue.500" mb={3} />
            <Text fontWeight="700" mb={2}>
              {item.title}
            </Text>
            <Text color="gray.600">{item.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </SectionBlock>
  );
}
