"use client";

import { Button, Container, Flex, HStack, Icon, Link, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { CtaButtons } from "./CtaButtons";
import type { LandingData } from "../types";

export type LandingHeaderProps = {
  data: LandingData;
};

export function LandingHeader({ data }: LandingHeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container maxW="1200px" py={4}>
      <Flex align="center" justify="space-between" gap={4}>
        <Link href="#" display="inline-flex" alignItems="center">
          <Image src={data.logoSrc} alt={`${data.brandName} логотип`} width={220} height={56} priority />
        </Link>
        <HStack display={{ base: "none", md: "flex" }} gap={6}>
          <Link href="#services">Услуги</Link>
          <Link href="#works">Работы</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contacts">Контакты</Link>
        </HStack>
        <HStack display={{ base: "none", lg: "flex" }}>
          <CtaButtons phone={data.contacts.phone} telegramUrl={data.contacts.telegramUrl} compact />
        </HStack>
        <Button size="sm" display={{ base: "inline-flex", md: "none" }} onClick={() => setMobileMenuOpen((p) => !p)}>
          Меню
        </Button>
      </Flex>

      {isMobileMenuOpen && (
        <Stack pt={3} display={{ base: "flex", md: "none" }} gap={3}>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)}>
            Услуги
          </Link>
          <Link href="#works" onClick={() => setMobileMenuOpen(false)}>
            Работы
          </Link>
          <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </Link>
          <Link href="#contacts" onClick={() => setMobileMenuOpen(false)}>
            Контакты
          </Link>
          <CtaButtons phone={data.contacts.phone} telegramUrl={data.contacts.telegramUrl} compact />
        </Stack>
      )}
    </Container>
  );
}

