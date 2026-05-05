import { Box, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { LandingData } from "../types";
import { CtaButtons } from "./CtaButtons";
import { SectionBlock } from "./SectionBlock";

export type ContactsSectionProps = {
  data: LandingData;
};

export function ContactsSection({ data }: ContactsSectionProps) {
  return (
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
  );
}

