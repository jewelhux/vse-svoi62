import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Токены держим компактными: одна палитра акцента + тёмные нейтралы + semanticTokens,
// чтобы секции не разносили хардкод цветов по компонентам.
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "var(--font-sans), system-ui, -apple-system, Segoe UI, sans-serif" },
        heading: { value: "var(--font-sans), system-ui, -apple-system, Segoe UI, sans-serif" },
      },
      colors: {
        brand: {
          50: { value: "#FFFAEB" },
          100: { value: "#FEEFC7" },
          200: { value: "#FDE68A" },
          300: { value: "#F8D26A" },
          400: { value: "#F4BD3A" },
          500: { value: "#EFA310" },
          600: { value: "#CC8208" },
          700: { value: "#B45309" },
          800: { value: "#92400E" },
          900: { value: "#78350F" },
        },
        // Вторичный акцент — холодное свечение (Persona-like, но без ухода в «кислоту»).
        glow: {
          50: { value: "#E9F7FF" },
          100: { value: "#CFEFFF" },
          200: { value: "#9FDCFF" },
          300: { value: "#6AC7FF" },
          400: { value: "#2FAAFF" },
          500: { value: "#1A86E6" },
          600: { value: "#156BCC" },
          700: { value: "#1257A8" },
          800: { value: "#0E417D" },
          900: { value: "#0A2F57" },
        },
        // Нейтралы под тёмный Persona-стиль (графит без «синевы»)
        night: {
          50: { value: "#F6F7F9" },
          100: { value: "#E9ECF1" },
          200: { value: "#C9D0DB" },
          300: { value: "#98A4B5" },
          400: { value: "#6B768A" },
          500: { value: "#4A5466" },
          600: { value: "#353C4B" },
          700: { value: "#262B36" },
          800: { value: "#171A22" },
          900: { value: "#0D0F14" },
        },
      },
      radii: {
        md: { value: "12px" },
        lg: { value: "16px" },
        xl: { value: "20px" },
      },
      shadows: {
        sm: { value: "0 1px 2px rgba(0,0,0,0.28)" },
        md: { value: "0 10px 30px rgba(0,0,0,0.42)" },
      },
    },
    semanticTokens: {
      colors: {
        "bg.canvas": { value: "{colors.night.900}" },
        "bg.surface": { value: "{colors.night.800}" },
        "bg.surface2": { value: "{colors.night.700}" },
        "bg.glass": { value: "rgba(23, 26, 34, 0.55)" },
        "bg.glassStrong": { value: "rgba(23, 26, 34, 0.78)" },
        "bg.card": { value: "rgba(23, 26, 34, 0.72)" },
        "border.subtle": { value: "rgba(255,255,255,0.08)" },
        "border.glass": { value: "rgba(255,255,255,0.10)" },
        "overlay.backdrop": { value: "rgba(13, 15, 20, 0.72)" },
        "fg.default": { value: "{colors.night.50}" },
        "fg.muted": { value: "rgba(255,255,255,0.72)" },
        "fg.subtle": { value: "rgba(255,255,255,0.55)" },
        "shadow.glowBrand": { value: "0 0 0 1px rgba(239,163,16,0.08), 0 18px 55px rgba(239,163,16,0.10)" },
        "shadow.glowCyan": { value: "0 0 0 1px rgba(47,170,255,0.08), 0 18px 55px rgba(47,170,255,0.12)" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

