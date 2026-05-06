import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { withBasePath } from "@/lib/withBasePath";
import type { LandingData } from "../types";
import { SectionBlock } from "./SectionBlock";

export type AdvantagesSectionProps = {
  data: LandingData;
};

/** SVG в public с чёрной заливкой: цвет задаётся токеном `brand` через mask. */
function AdvantageIcon({ src }: { src: string }) {
  const iconSrc = withBasePath(src);

  return (
    <Box
      aria-hidden
      mb={3}
      w="32px"
      h="32px"
      flexShrink={0}
      bg="brand.400"
      style={{
        WebkitMaskImage: `url(${iconSrc})`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url(${iconSrc})`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );
}

export function AdvantagesSection({ data }: AdvantagesSectionProps) {
  return (
    <SectionBlock
      title="Преимущества"
      subtitle="Почему к нам обращаются за ремонтом и обслуживанием"
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
            transition="transform 180ms ease"
            _hover={{ transform: "translateY(-3px)" }}
          >
            <AdvantageIcon src={item.iconSrc} />
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
