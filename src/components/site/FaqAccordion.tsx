import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "./Reveal";

export function FaqAccordion({ items }: { items: readonly { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Reveal
      as="div"
      className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card"
    >
      {items.map((item, i) => {
        const open = openIndex === i;
        const triggerId = `faq-trigger-${i}`;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left font-display text-lg font-bold transition-colors hover:bg-secondary/40"
              >
                {item.q}
                <ChevronDown
                  className={`size-5 shrink-0 text-brand transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${open ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-7 pb-7 text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Reveal>
  );
}
