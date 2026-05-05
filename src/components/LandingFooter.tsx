import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { LandingData } from "../types";

export type LandingFooterProps = {
  data: LandingData;
};

export function LandingFooter({ data }: LandingFooterProps) {
  return (
    <Box
      as="footer"
      bg="bg.canvas"
      color="fg.default"
      py={10}
      borderTopWidth="1px"
      borderColor="border.glass"
    >
      <Container maxW="1200px">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <Stack gap={2}>
            <Text fontWeight="700">{data.brandName}</Text>
            <Text fontSize="sm" color="fg.subtle">
              Автосервис в Рязани. Все права защищены.
            </Text>
          </Stack>
          <Stack gap={2} color="fg.muted">
            <Link href="#services" _hover={{ color: "fg.default" }}>
              Услуги
            </Link>
            <Link href="#contacts" _hover={{ color: "fg.default" }}>
              Контакты
            </Link>
          </Stack>
          <Stack gap={2} color="fg.muted">
            <Link
              href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}
              _hover={{ color: "fg.default" }}
            >
              {data.contacts.phone}
            </Link>
            <Link
              href={data.contacts.telegramUrl}
              target="_blank"
              color="brand.300"
              _hover={{ color: "brand.200" }}
            >
              Telegram
            </Link>
            <Text color="fg.subtle">{data.contacts.address}</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
