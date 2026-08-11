import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { faqs } from "@/components/site/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Kaycarta Accountants" },
      {
        name: "description",
        content:
          "Answers to common questions about Kaycarta's accounting services, appointments, bookkeeping, tax planning and office location in Thomastown.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Kaycarta Accountants" },
      {
        property: "og:description",
        content:
          "Common questions about working with Kaycarta Accountants in Thomastown, Victoria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/faq") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/faq") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        intro="Answers to questions we are asked most often. If yours is not covered here, get in touch."
      />

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-24">
        <FaqAccordion items={faqs} />
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
