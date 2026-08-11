import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { ContactCards } from "@/components/site/ContactCard";
import { ContactForm } from "@/components/site/ContactForm";
import { OfficeMap } from "@/components/site/OfficeMap";
import { Reveal } from "@/components/site/Reveal";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kaycarta Accountants | Thomastown, Victoria" },
      {
        name: "description",
        content:
          "Contact Kaycarta Accountants: Level 1, 179 B High Street Thomastown VIC 3074, phone 03 9464 1144, email info@kaycarta.com.au.",
      },
      { property: "og:title", content: "Contact Kaycarta Accountants | Thomastown, Victoria" },
      {
        property: "og:description",
        content: "Book a consultation with a Registered Tax Agent in Thomastown, Melbourne.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/contact") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <PageHero
        eyebrow="Get in touch"
        title="Speak With Kaycarta Accountants"
        intro="Send an enquiry or call the office. We will respond during business hours and arrange a time that suits you."
      />

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <ContactCards />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0}>
            <ContactForm />
          </Reveal>
          <Reveal delay={150}>
            <OfficeMap />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
