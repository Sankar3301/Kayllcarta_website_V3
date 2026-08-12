import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { getService, services, serviceProcess } from "@/components/site/services-data";
import { CONTACT } from "@/components/site/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    const url = absoluteUrl(`/services/${params.slug}`);
    return {
      meta: [
        { title: service?.seoTitle ?? "Services | Kaycarta Accountants" },
        { name: "description", content: service?.seoDescription ?? "" },
        { property: "og:title", content: service?.seoTitle ?? "Services | Kaycarta Accountants" },
        { property: "og:description", content: service?.seoDescription ?? "" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: service
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: service.title,
                  description: service.seoDescription,
                  url,
                  provider: { "@type": "AccountingService", name: "Kaycarta Accountants" },
                  areaServed: "AU",
                },
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: absoluteUrl("/"),
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Services",
                      item: absoluteUrl("/services"),
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: service.title,
                      item: url,
                    },
                  ],
                },
              ]),
            },
          ]
        : [],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <PageHero eyebrow={service.title} title={service.h1} intro={service.heroCopy} />

      <section className="mx-auto grid max-w-[1240px] gap-14 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{service.mainHeading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{service.mainCopy}</p>

          <h3 className="mt-12 text-xl">What this service can include</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.includes.map((item: string, i: number) => (
              <Reveal
                key={item}
                as="li"
                delay={i * 50}
                duration={400}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm transition-colors duration-300 hover:border-brand/40"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </Reveal>
            ))}
          </ul>

          <h3 className="mt-12 text-xl">How we work with you</h3>
          <ol className="mt-6 space-y-4">
            {serviceProcess.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent font-display text-sm font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 rounded-xl border border-border bg-secondary/60 p-6 text-sm text-muted-foreground">
            Services are provided subject to the agreed engagement. Information on this page is
            general in nature and does not constitute personal financial, taxation or legal advice.
          </p>
        </Reveal>

        <Reveal as="aside" delay={150} className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-soft">
            <h3 className="text-xl">Discuss {service.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Speak with Kaycarta about how this service applies to your circumstances.
            </p>
            <Link
              to="/contact"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-5 py-3.5 text-sm font-semibold text-brand-foreground transition-all duration-150 hover:bg-gradient-brand-strong"
            >
              Book a Consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-border bg-gradient-ghost px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-gradient-ghost-strong"
            >
              <Phone className="size-4" aria-hidden="true" />
              {CONTACT.phone}
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-8">
            <h3 className="text-base font-bold uppercase tracking-[0.14em]">Other services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group/link inline-flex items-center gap-2 text-brand hover:underline"
                  >
                    {s.title}
                    <ArrowRight
                      className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
