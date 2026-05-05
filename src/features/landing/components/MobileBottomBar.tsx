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
      bg="white"
      borderTopWidth="1px"
      p={3}
      zIndex={20}
    >
      <HStack>
        <Button asChild flex={1} colorPalette="blue">
          <Link href={data.contacts.telegramUrl} target="_blank">
            Telegram
          </Link>
        </Button>
        <Button asChild flex={1} variant="outline">
          <Link href={`tel:${data.contacts.phone.replace(/\s/g, "")}`}>Позвонить</Link>
        </Button>
      </HStack>
    </Box>
  );
}

