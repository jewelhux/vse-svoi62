import type { ReactNode } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

export type SectionBlockProps = {
  id?: string;
  /** Короткая метка — крупный «обводной» заголовок (раньше eyebrow). */
  title: string;
  /** Основной заголовок секции (раньше title в Heading). */
  subtitle?: string;
  description?: string;
  children: ReactNode;
};

export function SectionBlock({
  id,
  title,
  subtitle,
  description,
  children,
}: SectionBlockProps) {
  return (
    <Stack
      id={id}
      gap={{ base: 8, md: 10 }}
      mt={{ base: 18, md: 24 }}
      scrollMarginTop={{ base: "88px", md: "104px" }}
    >
      <Stack gap={{ base: 4, md: 5 }} maxW="780px" position="relative">
        <Text
          as={subtitle ? "span" : "h2"}
          aria-hidden={subtitle ? true : undefined}
          fontSize={{ base: "36px", md: "64px" }}
          fontWeight="800"
          letterSpacing="0.14em"
          lineHeight={{ base: "1.05", md: "1" }}
          color="transparent"
          userSelect="none"
          pointerEvents={subtitle ? "none" : undefined}
          whiteSpace={{ base: "normal", md: "nowrap" }}
          overflowWrap="anywhere"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.16)",
            // Снаружи букв — очень лёгкое золотое ореол (без плотного «заливного» слоя у контура)
            textShadow: "0 0 52px rgba(239,163,16,0.055)",
          }}
        >
          {title}
        </Text>

        {subtitle ? (
          <Text
            as="h2"
            color="fg.default"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            letterSpacing="-0.03em"
            lineHeight="1.15"
            maxW="48rem"
          >
            {subtitle}
          </Text>
        ) : null}

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
