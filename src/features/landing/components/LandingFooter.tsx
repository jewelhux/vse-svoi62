import { Box, Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { LandingData } from "../types";

export type LandingFooterProps = {
  data: LandingData;
};

export function LandingFooter({ data }: LandingFooterProps) {
  return (
    <Box as="footer" bg="gray.900" color="gray.100" py={8}>
      <Container maxW="1200px">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <Stack gap={2}>
            <Text fontWeight="700">{data.brandName}</Text>
            <Text fontSize="sm" color="gray.400">
              Автосервис в Рязани. Все права защищены.
            </Text>
          </Stack>
          <Stack gap={2}>
            <Link href="#services">Услуги</Link>
            <Link href="#contacts">Контакты</Link>
          </Stack>
          <Stack gap={2}>
            <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>{data.contacts.phone}</Link>
            <Link href={data.contacts.telegramUrl} target="_blank">
              Telegram
            </Link>
            <Text color="gray.400">{data.contacts.address}</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

