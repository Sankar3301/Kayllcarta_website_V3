import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { industries } from "@/components/site/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Support | Kaycarta Accountants" },
      {
        name: "description",
        content:
          "Kaycarta supports trades, professional services, retail, property, healthcare and small business clients with accounting, tax and advisory work.",
      },
      { property: "og:title", content: "Industries We Support | Kaycarta Accountants" },
      {
        property: "og:description",
        content:
          "Accounting and taxation support across trades, professional services, retail, property, healthcare and startups.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/industries") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/industries") }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <PageHero
        eyebrow="Industries"
        title="Accounting Support Across Different Sectors"
        intro="Different industries carry different reporting, compliance and cash-flow considerations. Kaycarta works with clients across a range of sectors."
      />

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 70} duration={500} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-xl">{title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <p className="mt-12 max-w-3xl rounded-xl border border-border bg-secondary/60 p-6 text-sm text-muted-foreground">
            Industry support is provided subject to the services Kaycarta offers and the agreed
            engagement. Information on this page is general in nature.
          </p>
        </Reveal>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
