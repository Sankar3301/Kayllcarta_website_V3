import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has scrolled into the viewport, so callers can
 * trigger an entrance animation the first time it becomes visible. Fires
 * once and then disconnects — this is for "reveal on scroll" moments, not
 * ongoing visibility tracking.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = "0px 0px -80px 0px",
}: {
  threshold?: number;
  rootMargin?: string;
} = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect prefers-reduced-motion at the source: skip the observer and
    // just mark everything visible immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
