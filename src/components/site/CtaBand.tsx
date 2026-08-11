import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { CONTACT } from "./site-data";

export function CtaBand({
  title = "Speak With an Accountant About Your Situation",
  body = "Every situation is different. A short conversation is the easiest way to find out how Kaycarta can help.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-brand-foreground/85">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex rounded-lg bg-surface px-6 py-3.5 text-sm font-semibold text-surface-foreground transition-opacity hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border border-brand-foreground/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-brand-foreground/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
