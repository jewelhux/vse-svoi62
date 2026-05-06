import {
  Box,
  Container,
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
      py={{ base: 8, md: 10 }}
      pb={{ base: "calc(32px + env(safe-area-inset-bottom))", md: 10 }}
      borderTopWidth="1px"
      borderColor="border.glass"
    >
      <Container maxW="1200px">
        <Text fontSize="sm" color="fg.subtle" textAlign="center">
          {data.brandName} — автосервис в Рязани. © Все права защищены.
        </Text>
      </Container>
    </Box>
  );
}
