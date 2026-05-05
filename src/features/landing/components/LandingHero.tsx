import { Box, Heading, HStack, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FiCheckCircle, FiStar } from "react-icons/fi";
import { CtaButtons } from "./CtaButtons";
import type { LandingData } from "../types";

export type LandingHeroProps = {
  data: LandingData;
};

export function LandingHero({ data }: LandingHeroProps) {
  return (
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
    </SimpleGrid>
  );
}

