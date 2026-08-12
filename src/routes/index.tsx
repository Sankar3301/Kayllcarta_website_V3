import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { OfficeMap } from "@/components/site/OfficeMap";
import { Reveal } from "@/components/site/Reveal";
import { services, serviceProcess } from "@/components/site/services-data";
import { industries } from "@/components/site/site-data";
import heroOffice from "@/assets/hero-office.jpg";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaycarta Accountants | Tax, Accounting & Advisory in Thomastown" },
      {
        name: "description",
        content:
          "Kaycarta Accountants provides tax, accounting and advisory support for individuals and businesses in Thomastown and across Melbourne.",
      },
      {
        property: "og:title",
        content: "Kaycarta Accountants | Tax, Accounting & Advisory in Thomastown",
      },
      {
        property: "og:description",
        content:
          "Clear accounting, taxation and advisory support led by a Registered Tax Agent in Thomastown, Victoria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["AccountingService", "LocalBusiness"],
          "@id": absoluteUrl("/#organization"),
          name: "Kaycarta Accountants",
          url: absoluteUrl("/"),
          image: absoluteUrl("/og-image.jpg"),
          telephone: "+61 3 9464 1144",
          email: "info@kaycarta.com.au",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Level 1, 179 B High Street",
            addressLocality: "Thomastown",
            addressRegion: "VIC",
            postalCode: "3074",
            addressCountry: "AU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -37.6807,
            longitude: 145.0006,
          },
          areaServed: [
            {
              "@type": "Place",
              name: "Thomastown VIC 3074",
            },
            {
              "@type": "Place",
              name: "Greater Melbourne",
            },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "17:00",
            },
          ],
          founder: {
            "@type": "Person",
            name: "Prathyusha Nadempalli",
            jobTitle: "Principal Accountant & Registered Tax Agent",
          },
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              url: absoluteUrl(`/services/${s.slug}`),
              areaServed: "AU",
              provider: { "@id": absoluteUrl("/#organization") },
            },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-surface text-surface-foreground">
        <Nav />
        <section className="relative isolate min-h-[560px] overflow-hidden md:min-h-[640px]">
          <img
            src={heroOffice}
            alt="Kaycarta Accountants office in Thomastown, Melbourne"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-20 h-full w-full animate-ken-burns object-cover"
          />
          {/* Scrim: blends the photo into the surface color so overlaid text stays
              legible — built from --surface (the site's own charcoal token), not a
              flat black, so it reads as part of this palette. */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `linear-gradient(115deg, color-mix(in oklab, var(--surface) 96%, transparent) 0%, color-mix(in oklab, var(--surface) 78%, transparent) 42%, color-mix(in oklab, var(--surface) 35%, transparent) 100%), linear-gradient(to top, color-mix(in oklab, var(--surface) 92%, transparent) 0%, transparent 55%)`,
            }}
            aria-hidden="true"
          />
          <div
            className="motif absolute inset-0 -z-10 text-surface-foreground opacity-40"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:py-32">
            <div className="max-w-2xl">
              <Reveal variant="up" duration={500}>
                <p className="eyebrow text-brand-soft">
                  <span
                    className="h-px w-8 origin-left animate-draw-underline bg-brand-soft"
                    aria-hidden="true"
                  />
                  Tax · Accounting · Advisory
                </p>
              </Reveal>
              <Reveal variant="up" delay={100} duration={500}>
                <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                  Clear Accounting Support for Individuals and Businesses
                </h1>
              </Reveal>
              <Reveal variant="up" delay={200} duration={500}>
                <p className="mt-6 max-w-xl text-lg text-surface-foreground/75">
                  Kaycarta Accountants provides accounting, taxation and advisory support designed
                  to help you understand your obligations and make informed financial decisions.
                </p>
              </Reveal>
              <Reveal variant="up" delay={300} duration={500}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-4 text-sm font-semibold text-brand-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gradient-brand-strong"
                  >
                    Book a Consultation
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-lg border border-surface-foreground/25 bg-gradient-ghost px-6 py-4 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-gradient-ghost-strong"
                  >
                    Explore our services
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Who we are
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl">
              Practical Accounting Advice, Explained Properly
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Kaycarta Accountants is a Thomastown practice supporting individuals, sole traders and
              growing companies with tax, accounting and advisory work. Every engagement begins with
              understanding your circumstances.
            </p>
            <p>
              We keep the language plain, the process organised and the advice tied to decisions you
              actually need to make.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
            >
              More about the firm
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Our services
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
              Accounting Services Tailored to Your Circumstances
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, body, slug }, i) => (
              <Reveal key={slug} delay={i * 90} duration={500} className="h-full">
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-soft"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-surface px-6 py-4 text-sm font-semibold text-surface-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gradient-surface-strong"
              >
                Explore our services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Why Kaycarta
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
            A Considered Approach to Your Numbers
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Qualified and registered",
              "Led by a Registered Tax Agent, Member of IPA and Fellow NTAA.",
            ],
            ["Clear communication", "Financial matters explained in language you can act on."],
            ["Organised process", "Structured engagements so nothing is left uncertain."],
            ["Long-term relationships", "Support that continues beyond a single lodgement."],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 90} duration={500} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <Check
                  className="size-5 text-brand transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 text-surface-foreground md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-brand-soft">
              <span className="h-px w-8 bg-brand-soft" aria-hidden="true" />
              How we work
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">A Simple, Structured Process</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {serviceProcess.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                variant="scale"
                delay={i * 100}
                duration={450}
                className="rounded-2xl border border-surface-foreground/15 bg-surface-foreground/5 p-6 transition-colors duration-300 hover:border-brand-soft/40"
              >
                <span className="font-display text-sm font-bold text-brand-soft">0{i + 1}</span>
                <h3 className="mt-3 text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-surface-foreground/70">{step.detail}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Industries
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
            Experience Across Different Sectors
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80} duration={500} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <Icon
                  className="size-5 text-brand transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <Link
            to="/industries"
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
          >
            View all industries
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Visit us
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl">Our Thomastown Office</h2>
          </Reveal>
          <Reveal delay={150} duration={700} className="mt-10">
            <OfficeMap />
          </Reveal>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
