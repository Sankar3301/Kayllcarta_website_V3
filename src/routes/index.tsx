import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { OfficeMap } from "@/components/site/OfficeMap";
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
          email: "prathyusha@kaycarta.com.au",
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
      <div className="bg-surface text-surface-foreground">
        <Nav />
        <section className="relative overflow-hidden">
          <div
            className="motif absolute inset-0 text-surface-foreground opacity-70"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div>
              <p className="eyebrow text-brand-soft">
                <span className="h-px w-8 bg-brand-soft" aria-hidden="true" />
                Tax · Accounting · Advisory
              </p>
              <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                Clear Accounting Support for Individuals and Businesses
              </h1>
              <p className="mt-6 max-w-xl text-lg text-surface-foreground/75">
                Kaycarta Accountants provides accounting, taxation and advisory support designed to
                help you understand your obligations and make informed financial decisions.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-4 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-soft"
                >
                  Book a Consultation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg border border-surface-foreground/25 px-6 py-4 text-sm font-semibold transition-colors hover:bg-surface-foreground/10"
                >
                  Explore our services
                </Link>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-surface-foreground/15 pt-8">
                {[
                  ["Registered", "Tax Agent"],
                  ["Member", "of IPA"],
                  ["Fellow", "NTAA"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <dt className="text-xs uppercase tracking-[0.16em] text-surface-foreground/55">
                      {a}
                    </dt>
                    <dd className="mt-1 font-display text-lg font-bold">{b}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <img
                src={heroOffice}
                alt="Kaycarta Accountants office in Thomastown, Melbourne"
                width={1200}
                height={900}
                className="w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
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
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <p className="eyebrow text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Our services
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
            Accounting Services Tailored to Your Circumstances
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, body, slug }) => (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">
                  Learn more
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-surface px-6 py-4 text-sm font-semibold text-surface-foreground transition-opacity hover:opacity-90"
            >
              Explore our services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <p className="eyebrow text-brand">
          <span className="h-px w-8 bg-brand" aria-hidden="true" />
          Why Kaycarta
        </p>
        <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">
          A Considered Approach to Your Numbers
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Qualified and registered",
              "Led by a Registered Tax Agent, Member of IPA and Fellow NTAA.",
            ],
            ["Clear communication", "Financial matters explained in language you can act on."],
            ["Organised process", "Structured engagements so nothing is left uncertain."],
            ["Long-term relationships", "Support that continues beyond a single lodgement."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <Check className="size-5 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 text-surface-foreground md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <p className="eyebrow text-brand-soft">
            <span className="h-px w-8 bg-brand-soft" aria-hidden="true" />
            How we work
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">A Simple, Structured Process</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {serviceProcess.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-surface-foreground/15 bg-surface-foreground/5 p-6"
              >
                <span className="font-display text-sm font-bold text-brand-soft">0{i + 1}</span>
                <h3 className="mt-3 text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-surface-foreground/70">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <p className="eyebrow text-brand">
          <span className="h-px w-8 bg-brand" aria-hidden="true" />
          Industries
        </p>
        <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl">Experience Across Different Sectors</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <Icon className="size-5 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <Link
          to="/industries"
          className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
        >
          View all industries
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <p className="eyebrow text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Visit us
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl">Our Thomastown Office</h2>
          <div className="mt-10">
            <OfficeMap />
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
