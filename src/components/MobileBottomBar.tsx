import { Box, Button, HStack, Link } from "@chakra-ui/react";
import type { LandingData } from "../types";

export type MobileBottomBarProps = {
  data: LandingData;
};

export function MobileBottomBar({ data }: MobileBottomBarProps) {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="rgba(13, 15, 20, 0.78)"
      borderTopWidth="1px"
      borderColor="border.glass"
      px={3}
      pt={3}
      pb="calc(12px + env(safe-area-inset-bottom))"
      zIndex={20}
      backdropFilter="blur(12px)"
    >
      <HStack>
        <Button
          asChild
          flex={1}
          variant="outline"
          borderColor="rgba(239,163,16,0.28)"
          boxShadow="shadow.glowBrand"
          color="fg.default"
          bg="bg.glass"
          backdropFilter="blur(12px)"
          transition="background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, color 160ms ease"
          _hover={{
            bg: "rgba(239,163,16,0.12)",
            borderColor: "rgba(239,163,16,0.52)",
          }}
          _active={{ bg: "rgba(239,163,16,0.16)" }}
          _focusVisible={{
            outline: "2px solid",
            outlineColor: "brand.400",
            outlineOffset: "2px",
          }}
        >
          <Link href={data.contacts.telegramUrl} target="_blank">
            Telegram
          </Link>
        </Button>
        <Button
          asChild
          flex={1}
          variant="outline"
          borderColor="border.glass"
          color="fg.default"
          bg="bg.glass"
          backdropFilter="blur(12px)"
          boxShadow="shadow.glowBrand"
          transition="background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease"
          _hover={{
            bg: "bg.glassStrong",
            borderColor: "rgba(239,163,16,0.45)",
          }}
          _active={{ bg: "bg.glassStrong" }}
          _focusVisible={{
            outline: "2px solid",
            outlineColor: "brand.400",
            outlineOffset: "2px",
          }}
        >
          <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>
            Позвонить
          </Link>
        </Button>
      </HStack>
    </Box>
  );
}
