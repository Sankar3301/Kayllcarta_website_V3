import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { values } from "@/components/site/site-data";
import aboutTeam from "@/assets/about-team.jpg";
import prathyushaImg from "@/assets/prathyusha.png";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kaycarta Accountants | Thomastown, Victoria" },
      {
        name: "description",
        content:
          "Kaycarta Accountants in Thomastown, Victoria brings together Erkan Sahin (22 years in accounting and business) and Prathyusha Nadempalli, Director and Registered Tax Agent.",
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
            <h2 className="mt-5 text-3xl sm:text-4xl">Meet the Team</h2>
          </Reveal>

          <Reveal
            as="article"
            delay={100}
            className="mt-12 rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-soft"
          >
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              <span className="inline-flex size-40 items-center justify-center rounded-2xl bg-accent font-display text-4xl font-bold text-accent-foreground">
                ES
              </span>
              <div>
                <h3 className="text-2xl">Erkan Sahin</h3>
                <p className="mt-1 text-lg font-semibold text-brand">Senior Accountant</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  22 years of experience in accounting and business
                </p>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  With 22 years of experience in accounting and business, Erkan Sahin brings
                  extensive knowledge, practical insight, and a genuine passion for helping clients
                  achieve their financial goals.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Erkan is known for his approachable personality and his love of talking with
                  people. He enjoys getting to know his clients, understanding their businesses, and
                  having meaningful conversations about their financial and business needs. His
                  friendly and down-to-earth approach makes clients feel comfortable discussing even
                  complex accounting matters.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  At Kaycarta Accountants, Erkan combines his years of experience with a
                  people-focused approach, helping clients navigate their accounting, taxation, and
                  business requirements with confidence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Principal
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl">Meet Prathyusha Nadempalli</h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-[auto_1fr]">
          <Reveal variant="scale" delay={100} duration={600}>
            <img
              src={prathyushaImg}
              alt="Prathyusha Nadempalli, Director and Registered Tax Agent at Kaycarta Accountants"
              width={640}
              height={640}
              loading="lazy"
              className="size-52 rounded-2xl object-cover object-top shadow-soft-lg"
            />
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg font-semibold text-brand">Director &amp; Registered Tax Agent</p>
            <p className="mt-2 text-sm text-muted-foreground">
              B.Com (Acc) · MPA · Member of IPA · Fellow NTAA
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Prathyusha Nadempalli is the Director and Registered Tax Agent at Kaycarta
              Accountants, bringing over 14 years of experience across taxation, accounting and
              business advisory. She holds a Bachelor of Commerce (B.Com), Master of Professional
              Accounting (MPA), and is a Member of the Institute of Public Accountants (MIPA) and
              Fellow of the National Tax and Accountants&apos; Association (NTAA).
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Prathyusha takes a client-focused approach, helping individuals and businesses manage
              their financial responsibilities with clarity and confidence. Her experience covers
              bookkeeping, taxation, tax planning, payroll management and compliance across a
              diverse range of industries.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Known for her attention to detail and practical approach, Prathyusha works closely
              with each client to understand their circumstances and provide clear, commercially
              focused financial guidance. Outside her professional work, she enjoys travelling and
              exploring new destinations.
            </p>
          </Reveal>
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
            <Reveal key={v.title} delay={i * 90} duration={500} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <h3 className="text-lg">{v.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
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
