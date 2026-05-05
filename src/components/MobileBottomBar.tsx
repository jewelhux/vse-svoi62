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
      p={3}
      zIndex={20}
      backdropFilter="blur(12px)"
    >
      <HStack>
        <Button asChild flex={1} colorPalette="brand">
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
          _hover={{ bg: "bg.glassStrong" }}
        >
          <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>
            Позвонить
          </Link>
        </Button>
      </HStack>
    </Box>
  );
}
