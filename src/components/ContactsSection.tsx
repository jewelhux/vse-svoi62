import { Box, HStack, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FiPhone, FiSend } from "react-icons/fi";
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
      title="Контакты"
      subtitle="Связаться с сервисом"
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
          <Text fontWeight="700">Связаться</Text>
          <Stack gap={2}>
            <HStack gap={2} color="fg.default" align="flex-start">
              <Icon as={FiSend} color="brand.400" boxSize={5} />
              <Text fontWeight="600" flex={1} minW={0} lineHeight="short">
                Telegram: @Zheka_vsesvoi
              </Text>
            </HStack>
            <HStack gap={2} color="fg.default" align="flex-start">
              <Icon as={FiPhone} color="brand.400" boxSize={5} />
              <Text fontWeight="600" flex={1} minW={0} lineHeight="short">
                Телефон: {data.contacts.phone}
              </Text>
            </HStack>
          </Stack>
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
