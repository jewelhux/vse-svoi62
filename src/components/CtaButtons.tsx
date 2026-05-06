import { Button, HStack, Icon, Link } from "@chakra-ui/react";
import { FiPhone, FiSend } from "react-icons/fi";

export type CtaButtonsProps = {
  phone: string;
  telegramUrl: string;
  compact?: boolean;
};

export function CtaButtons({ phone, telegramUrl, compact = false }: CtaButtonsProps) {
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;
  const shared = {
    transition: "background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, color 160ms ease",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "brand.400",
      outlineOffset: "2px",
    },
  } as const;

  return (
    <HStack gap={3} flexWrap="wrap">
      <Button
        asChild
        variant="outline"
        size={compact ? "sm" : "md"}
        borderColor="rgba(239,163,16,0.28)"
        color="fg.default"
        bg="bg.glass"
        backdropFilter="blur(12px)"
        boxShadow="shadow.glowBrand"
        _hover={{
          bg: "rgba(239,163,16,0.12)",
          borderColor: "rgba(239,163,16,0.52)",
          color: "fg.default",
        }}
        _active={{ bg: "rgba(239,163,16,0.16)" }}
        transition={shared.transition}
        _focusVisible={shared._focusVisible}
      >
        <Link href={telegramUrl} target="_blank">
          <Icon as={FiSend} /> Написать в Telegram
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size={compact ? "sm" : "md"}
        borderColor="border.glass"
        color="fg.default"
        bg="bg.glass"
        backdropFilter="blur(12px)"
        boxShadow="shadow.glowBrand"
        _hover={{
          bg: "bg.glassStrong",
          borderColor: "rgba(239,163,16,0.45)",
        }}
        _active={{ bg: "bg.glassStrong" }}
        transition={shared.transition}
        _focusVisible={shared._focusVisible}
      >
        <Link href={phoneHref}>
          <Icon as={FiPhone} /> Позвонить
        </Link>
      </Button>
    </HStack>
  );
}

