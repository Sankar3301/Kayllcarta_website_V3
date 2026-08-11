import type { ElementType, ReactNode } from "react";

import { useInView } from "@/hooks/use-in-view";

type RevealVariant = "up" | "fade" | "scale";

const VARIANT_HIDDEN: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-6",
  fade: "opacity-0",
  scale: "opacity-0 scale-95",
};

const VARIANT_VISIBLE: Record<RevealVariant, string> = {
  up: "opacity-100 translate-y-0",
  fade: "opacity-100",
  scale: "opacity-100 scale-100",
};

/**
 * Reveals its children with a short transition the first time they scroll
 * into view. Pass `delay` (ms) to stagger a series of siblings — e.g. cards
 * in a grid — so they cascade in rather than appearing in lockstep.
 */
export function Reveal({
  children,
  as: Component = "div",
  variant = "up",
  delay = 0,
  duration = 600,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Component
      ref={ref}
      className={`transition-[opacity,transform] ease-out will-change-transform ${
        inView ? VARIANT_VISIBLE[variant] : VARIANT_HIDDEN[variant]
      } ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
