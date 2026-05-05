import { Button, HStack, Icon, Link } from "@chakra-ui/react";
import { FiPhone, FiSend } from "react-icons/fi";

export type CtaButtonsProps = {
  phone: string;
  telegramUrl: string;
  compact?: boolean;
};

export function CtaButtons({ phone, telegramUrl, compact = false }: CtaButtonsProps) {
  return (
    <HStack gap={3} flexWrap="wrap">
      <Button asChild colorPalette="brand" size={compact ? "sm" : "md"}>
        <Link href={telegramUrl} target="_blank">
          <Icon as={FiSend} /> Написать в Telegram
        </Link>
      </Button>
      <Button asChild variant="outline" size={compact ? "sm" : "md"}>
        <Link href={`tel:${phone.replace(/\s/g, "")}`}>
          <Icon as={FiPhone} /> Позвонить
        </Link>
      </Button>
    </HStack>
  );
}

