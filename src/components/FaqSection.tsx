import { Accordion, Box, Text } from "@chakra-ui/react";
import type { LandingData } from "../types";
import { SectionBlock } from "./SectionBlock";

export type FaqSectionProps = {
  data: LandingData;
};

export function FaqSection({ data }: FaqSectionProps) {
  return (
    <SectionBlock
      id="faq"
      title="FAQ"
      subtitle="Частые вопросы"
      description="Собрали базовые ответы, которые помогают быстро понять сценарий работы сервиса."
    >
      <Accordion.Root collapsible display="grid" gap={3}>
        {data.faq.map((faqItem, index) => (
          <Accordion.Item
            key={faqItem.question}
            value={`item-${index}`}
            border="none"
          >
            <Box
              bg="bg.card"
              borderWidth="1px"
              borderColor="border.glass"
              borderRadius="xl"
              overflow="hidden"
              backdropFilter="blur(12px)"
              boxShadow="shadow.glowBrand"
              transition="transform 180ms ease, background 180ms ease"
              _hover={{ transform: "translateY(-2px)", bg: "bg.glassStrong" }}
            >
              <Accordion.ItemTrigger px={5} py={4} bg="transparent">
                <Text
                  flex="1"
                  textAlign="left"
                  fontWeight="700"
                  color="fg.default"
                >
                  {faqItem.question}
                </Text>
                <Accordion.ItemIndicator color="brand.400" />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody
                  px={5}
                  pb={5}
                  pt={0}
                  bg="transparent"
                  color="fg.muted"
                >
                  {faqItem.answer}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Box>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </SectionBlock>
  );
}
