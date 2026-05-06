import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

export type RevealProps = {
  children: ReactNode;
  /**
   * Важно: анимации должны быть мягкими и не навязчивыми,
   * а при prefers-reduced-motion — отключаться.
   */
  delayMs?: number;
  y?: number;
  /**
   * Полностью отключает анимацию появления (без IntersectionObserver).
   * Нужен точечно, когда блок визуально "прыгает" при появлении.
   */
  animate?: boolean;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function Reveal({
  children,
  delayMs = 0,
  y = 10,
  animate = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const shouldAnimate = animate && !reducedMotion;
  const visible = shouldAnimate ? isInView : true;

  const transition = useMemo(() => {
    if (!shouldAnimate) return "none";
    return `opacity 520ms cubic-bezier(0.2, 0.9, 0.2, 1) ${delayMs}ms, transform 520ms cubic-bezier(0.2, 0.9, 0.2, 1) ${delayMs}ms`;
  }, [delayMs, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.14, rootMargin: "120px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldAnimate]);

  return (
    <Box
      ref={ref}
      opacity={visible ? 1 : 0}
      transform={visible ? "translateY(0)" : `translateY(${y}px)`}
      transition={transition}
      willChange={shouldAnimate ? "opacity, transform" : "auto"}
    >
      {children}
    </Box>
  );
}

