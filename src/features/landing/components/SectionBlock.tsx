import type { ReactNode } from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

export type SectionBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionBlock({ id, eyebrow, title, description, children }: SectionBlockProps) {
  return (
    <Stack id={id} gap={6} mt={16}>
      <Stack gap={3} maxW="720px">
        {eyebrow ? (
          <Text color="blue.600" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" fontSize="sm">
            {eyebrow}
          </Text>
        ) : null}
        <Heading size="xl">{title}</Heading>
        {description ? <Text color="gray.600">{description}</Text> : null}
      </Stack>
      {children}
    </Stack>
  );
}

