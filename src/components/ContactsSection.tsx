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
        <Stack
          bg="bg.glassStrong"
          borderWidth="1px"
          borderColor="border.glass"
          borderRadius="xl"
          p={6}
          gap={3}
          boxShadow="shadow.glowBrand"
          backdropFilter="blur(12px)"
        >
          <Text fontWeight="700">Телефон</Text>
          <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`} color="fg.default" _hover={{ color: "brand.300" }}>
            {data.contacts.phone}
          </Link>
          <Text fontWeight="700" mt={2}>
            Telegram
          </Text>
          <Link
            href={data.contacts.telegramUrl}
            target="_blank"
            color="brand.300"
            _hover={{ color: "brand.200" }}
          >
            {data.contacts.telegramUrl}
          </Link>
          <Text fontWeight="700" mt={2}>
            Адрес
          </Text>
          <Text color="fg.muted">{data.contacts.address}</Text>
          <Text fontWeight="700" mt={2}>
            Режим работы
          </Text>
          <Text color="fg.muted">{data.contacts.workingHours}</Text>
          <CtaButtons
            phone={data.contacts.phone}
            telegramUrl={data.contacts.telegramUrl}
          />
        </Stack>
        <Box
          borderRadius="xl"
          overflow="hidden"
          minH="320px"
          bg="bg.glassStrong"
          borderWidth="1px"
          borderColor="border.glass"
          boxShadow="shadow.glowCyan"
          backdropFilter="blur(12px)"
        >
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
