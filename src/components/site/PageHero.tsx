import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { Nav } from "./Nav";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <div className="bg-surface text-surface-foreground">
      <Nav />
      <section className="relative overflow-hidden">
        <div
          className="motif absolute inset-0 text-surface-foreground opacity-70"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
          <p className="eyebrow text-brand-soft">
            <span className="h-px w-8 bg-brand-soft" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-surface-foreground/75">{intro}</p>
          {children ?? (
            <Link
              to="/contact"
              className="mt-9 inline-flex rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-soft"
            >
              Book a Consultation
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
