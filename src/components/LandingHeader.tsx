"use client";

import {
  Box,
  Button,
  CloseButton,
  Container,
  Drawer,
  Flex,
  HStack,
  Icon,
  Link,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { CtaButtons } from "./CtaButtons";
import type { LandingData } from "../types";
import { withBasePath } from "@/lib/withBasePath";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" },
];

export type LandingHeaderProps = {
  data: LandingData;
};

export function LandingHeader({ data }: LandingHeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 48em)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Drawer.Root
      open={isMobileMenuOpen}
      onOpenChange={(details) => setMobileMenuOpen(details.open)}
      placement="end"
      size="xs"
      lazyMount
      unmountOnExit
    >
      <Container maxW="1200px" py={{ base: 2, md: 4 }}>
        <Flex align="center" justify="space-between" gap={4}>
          <Link href="#" display="inline-flex" alignItems="center">
            <Image
              src={withBasePath(data.logoSrc)}
              alt={`${data.brandName} логотип`}
              width={184}
              height={44}
              priority
              style={{
                display: "block",
                width: "64px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
          <HStack display={{ base: "none", md: "flex" }} gap={6}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                fontWeight="600"
                color="fg.muted"
                _hover={{ color: "fg.default" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
          <HStack display={{ base: "none", lg: "flex" }}>
            <CtaButtons
              phone={data.contacts.phone}
              telegramUrl={data.contacts.telegramUrl}
              compact
            />
          </HStack>
          <Button
            size="sm"
            display={{ base: "inline-flex", md: "none" }}
            variant="outline"
            borderColor="border.glass"
            color="fg.default"
            bg="bg.glass"
            backdropFilter="blur(12px)"
            _hover={{ bg: "bg.glassStrong" }}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            px={3}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileMenuId}
          >
            <Icon as={isMobileMenuOpen ? FiX : FiMenu} boxSize={5} />
          </Button>
        </Flex>
      </Container>

      <Portal>
        <Drawer.Backdrop
          display={{ base: "block", md: "none" }}
          bg="rgba(13, 15, 20, 0.88)"
          backdropFilter="blur(12px)"
        />
        <Drawer.Positioner display={{ base: "flex", md: "none" }}>
          <Drawer.Content
            id={mobileMenuId}
            bg="rgba(13, 15, 20, 0.96)"
            borderLeftWidth="1px"
            borderColor="border.glass"
            boxShadow="shadow.glowBrand"
            maxW="min(92vw, 420px)"
          >
            <Drawer.Header px={6} pt={6} pb={4}>
              <Stack gap={1}>
                <Text
                  color="fg.subtle"
                  fontSize="xs"
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                >
                  Навигация
                </Text>
                <Drawer.Title fontSize="xl" fontWeight="700" color="fg.default">
                  Меню
                </Drawer.Title>
                <Drawer.Description color="fg.muted">
                  Быстрые переходы по разделам и основные способы связи.
                </Drawer.Description>
              </Stack>
            </Drawer.Header>

            <Drawer.CloseTrigger asChild>
              <CloseButton
                size="sm"
                position="absolute"
                top={4}
                right={4}
                color="fg.default"
                bg="bg.glass"
                borderWidth="1px"
                borderColor="border.glass"
                _hover={{ bg: "bg.glassStrong" }}
              />
            </Drawer.CloseTrigger>

            <Drawer.Body px={6} pb={6}>
              <Stack minH="100%" gap={8}>
                <Stack gap={4}>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      fontSize="xl"
                      fontWeight="700"
                      color="fg.default"
                      _hover={{ color: "brand.400" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>

                <Box mt="auto">
                  <CtaButtons
                    phone={data.contacts.phone}
                    telegramUrl={data.contacts.telegramUrl}
                  />
                  <Text mt={3} fontSize="sm" color="fg.subtle">
                    {data.contacts.workingHours}
                  </Text>
                  <Text fontSize="sm" color="fg.subtle">
                    {data.contacts.address}
                  </Text>
                </Box>
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
