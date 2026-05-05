"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { CtaButtons } from "./CtaButtons";
import type { LandingData } from "../types";

export type LandingHeaderProps = {
  data: LandingData;
};

export function LandingHeader({ data }: LandingHeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  const navItems = useMemo(
    () => [
      { href: "#services", label: "Услуги" },
      { href: "#works", label: "Работы" },
      { href: "#faq", label: "FAQ" },
      { href: "#contacts", label: "Контакты" },
    ],
    [],
  );

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    // Компенсируем исчезновение скроллбара, чтобы не было «прыжка» верстки.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setPortalNode(document.body);
  }, []);

  return (
    <Container maxW="1200px" py={{ base: 3, md: 4 }}>
      <Flex align="center" justify="space-between" gap={4}>
        <Link href="#" display="inline-flex" alignItems="center">
          <Image
            src={data.logoSrc}
            alt={`${data.brandName} логотип`}
            width={184}
            height={44}
            priority
            style={{ height: "auto", width: "auto", maxHeight: 44 }}
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
          bg="rgba(13, 15, 20, 0.92)"
          _hover={{ bg: "rgba(13, 15, 20, 1)" }}
          onClick={() => setMobileMenuOpen((p) => !p)}
          px={3}
        >
          <Icon as={isMobileMenuOpen ? FiX : FiMenu} boxSize={5} />
        </Button>
      </Flex>

      {isMobileMenuOpen && portalNode
        ? createPortal(
            <Box
              display={{ base: "block", md: "none" }}
              position="fixed"
              inset={0}
              zIndex={2000}
              bg="bg.canvas"
            >
              <Container maxW="1200px" py={5}>
                <Flex align="center" justify="space-between" gap={4}>
                  <Link
                    href="#"
                    display="inline-flex"
                    alignItems="center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src={data.logoSrc}
                      alt={`${data.brandName} логотип`}
                      width={184}
                      height={44}
                      style={{ height: "auto", width: "auto", maxHeight: 44 }}
                    />
                  </Link>
                  <Button
                    size="sm"
                    variant="outline"
                    borderColor="border.glass"
                    bg="rgba(13, 15, 20, 0.92)"
                    color="fg.default"
                    _hover={{ bg: "rgba(13, 15, 20, 1)" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon as={FiX} boxSize={5} />
                  </Button>
                </Flex>
              </Container>

              <Container maxW="1200px" height="calc(100% - 88px)" pb={8}>
                <Stack height="100%" gap={6}>
                  <Stack gap={2} pt={2}>
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="800"
                        letterSpacing="-0.02em"
                        py={4}
                        px={4}
                        borderRadius="xl"
                        bg="rgba(23,26,34,0.92)"
                        borderWidth="1px"
                        borderColor="rgba(255,255,255,0.08)"
                        _hover={{ bg: "rgba(23,26,34,1)", color: "brand.300" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </Stack>

                  <Box mt="auto">
                    <Box
                      bg="rgba(23,26,34,0.92)"
                      borderWidth="1px"
                      borderColor="rgba(255,255,255,0.08)"
                      borderRadius="2xl"
                      p={5}
                    >
                      <CtaButtons phone={data.contacts.phone} telegramUrl={data.contacts.telegramUrl} />
                      <Text mt={4} fontSize="sm" color="fg.subtle">
                        {data.contacts.workingHours}
                      </Text>
                      <Text fontSize="sm" color="fg.subtle">
                        {data.contacts.address}
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              </Container>
            </Box>,
            portalNode,
          )
        : null}
    </Container>
  );
}
