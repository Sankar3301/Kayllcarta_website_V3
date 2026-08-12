import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/components/site/services-data";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Accounting Services in Thomastown | Kaycarta Accountants" },
      {
        name: "description",
        content:
          "Tax and accounting, business setup, bookkeeping, ASIC compliance, SMSF, tax planning, business advisory and payroll support from Kaycarta Accountants.",
      },
      { property: "og:title", content: "Accounting Services in Thomastown | Kaycarta Accountants" },
      {
        property: "og:description",
        content:
          "A full suite of accounting, taxation and advisory services for individuals and businesses in Melbourne.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/services") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <PageHero
        eyebrow="Our Services"
        title="Accounting Services Built Around Your Circumstances"
        intro="Kaycarta provides accounting, taxation and advisory services for individuals and businesses. The support you receive depends on your situation and the agreed engagement."
      />

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, slug }, i) => (
            <Reveal key={slug} delay={i * 80} duration={500} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-soft">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-xl">{title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
                >
                  Learn more
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
