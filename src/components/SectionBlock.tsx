import type { ReactNode } from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export type SectionBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionBlock({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionBlockProps) {
  return (
    <Stack id={id} gap={{ base: 8, md: 10 }} mt={{ base: 18, md: 24 }}>
      <Stack gap={{ base: 4, md: 5 }} maxW="780px" position="relative">
        {eyebrow ? (
          <Text
            position="absolute"
            top={{ base: "-22px", md: "-34px" }}
            left={0}
            fontSize={{ base: "44px", md: "64px" }}
            fontWeight="800"
            letterSpacing="0.14em"
            lineHeight="1"
            color="transparent"
            userSelect="none"
            pointerEvents="none"
            whiteSpace="nowrap"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.16)",
              textShadow: "0 0 28px rgba(47,170,255,0.06)",
            }}
          >
            {eyebrow}
          </Text>
        ) : null}

        {eyebrow ? (
          <Text
            color="brand.300"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.16em"
            fontSize="xs"
          >
            {eyebrow}
          </Text>
        ) : null}

        <Heading size="xl" letterSpacing="-0.03em" lineHeight="1.1">
          {title}
        </Heading>

        <Box
          height="1px"
          width="140px"
          bg="linear-gradient(90deg, rgba(239,163,16,0.34), rgba(47,170,255,0.18), rgba(255,255,255,0))"
          opacity={0.9}
        />

        {description ? (
          <Text color="fg.muted" lineHeight="1.85" letterSpacing="0.01em">
            {description}
          </Text>
        ) : null}
      </Stack>
      {children}
    </Stack>
  );
}
