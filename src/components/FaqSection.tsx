import { Accordion, Text } from "@chakra-ui/react";
import type { LandingData } from "../features/landing/types";
import { SectionBlock } from "./SectionBlock";

export type FaqSectionProps = {
  data: LandingData;
};

export function FaqSection({ data }: FaqSectionProps) {
  return (
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
              <Accordion.ItemBody color="gray.600">
                {faqItem.answer}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </SectionBlock>
  );
}
