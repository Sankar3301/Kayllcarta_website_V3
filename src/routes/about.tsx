import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { values } from "@/components/site/site-data";
import aboutTeam from "@/assets/about-team.jpg";
import prathyushaAsset from "@/assets/prathyusha.png.asset.json";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kaycarta Accountants | Thomastown, Victoria" },
      {
        name: "description",
        content:
          "Kaycarta Accountants is led by Prathyusha Nadempalli, B.Com(acc) MPA, Member of IPA, Fellow NTAA and Registered Tax Agent in Thomastown, Victoria.",
      },
      { property: "og:title", content: "About Kaycarta Accountants | Thomastown, Victoria" },
      {
        property: "og:description",
        content:
          "A Thomastown practice built on integrity, clarity and long-term client relationships.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/about") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <PageHero
        eyebrow="About Our Firm"
        title="A Practice Built on Clarity and Trust"
        intro="Kaycarta Accountants supports individuals and businesses with accounting, taxation and advisory work, delivered with straightforward communication at every stage."
      />

      <section className="mx-auto grid max-w-[1240px] items-start gap-14 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Our story
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl">Accounting Support With a Long-Term View</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Kaycarta was established to provide accessible, high-quality accounting support to
            individuals, sole traders and growing companies across Melbourne&apos;s north. The firm
            works from Thomastown and takes on engagements where it can genuinely add value.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every engagement starts with understanding your situation, then turning the numbers into
            decisions you can act on — clearly explained, without jargon.
          </p>
        </Reveal>
        <Reveal variant="scale" delay={150} duration={700}>
          <img
            src={aboutTeam}
            alt="Accountant advising clients at Kaycarta Accountants"
            width={1200}
            height={1008}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-soft-lg"
          />
        </Reveal>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Our team
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl">Led by a Registered Tax Agent</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal
              as="article"
              delay={0}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-soft"
            >
              <img
                src={prathyushaAsset.url}
                alt="Prathyusha Nadempalli, Principal Accountant at Kaycarta Accountants"
                width={640}
                height={640}
                loading="lazy"
                className="size-40 rounded-2xl object-cover object-top shadow-soft"
              />
              <h3 className="mt-6 text-2xl">Prathyusha Nadempalli</h3>
              <p className="mt-1 text-lg font-semibold text-brand">
                Principal Accountant &amp; Registered Tax Agent
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                B.Com(acc) MPA · Member of IPA · Fellow NTAA
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Prathyusha leads the practice with experience across tax, compliance and advisory
                work for individuals, sole traders and companies. She focuses on explaining
                financial matters clearly so clients can act with confidence.
              </p>
            </Reveal>

            <Reveal
              as="article"
              delay={120}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-soft"
            >
              <span className="inline-flex size-40 items-center justify-center rounded-2xl bg-accent font-display text-4xl font-bold text-accent-foreground">
                ES
              </span>
              <h3 className="mt-6 text-2xl">Erkan Sahin</h3>
              <p className="mt-1 text-lg font-semibold text-brand">Senior Accountant</p>
              <p className="mt-2 text-sm text-muted-foreground">21+ years of experience</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Erkan brings more than twenty-one years of accounting experience to the team,
                supporting clients with taxation, compliance and business reporting across a broad
                range of industries.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Our values
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl">What Guides Our Work</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} duration={500}>
              <div className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <h3 className="text-lg">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <Link
            to="/services"
            className="mt-12 inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-4 text-sm font-semibold text-brand-foreground transition-all duration-150 hover:bg-gradient-brand-strong"
          >
            Explore our services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <CtaBand />
      <Footer />
    </div>
  );
}
