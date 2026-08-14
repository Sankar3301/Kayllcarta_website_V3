import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { values } from "@/components/site/site-data";
import aboutTeam from "@/assets/about-team.jpg";
import erkanImg from "@/assets/erkan.png";
import prathyushaImg from "@/assets/prathyusha.png";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kaycarta Accountants | Thomastown, Victoria" },
      {
        name: "description",
        content:
          "Kaycarta Accountants in Thomastown, Victoria brings together Erkan Sahin (Senior Accountant, 22+ years) and Prathyusha Nadempalli, Registered Tax Agent.",
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
              Our partners
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl">Meet the Team</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal
              as="article"
              delay={0}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-soft"
            >
              <img
                src={erkanImg}
                alt="Erkan Sahin, Senior Accountant at Kaycarta Accountants"
                width={768}
                height={1365}
                loading="lazy"
                className="size-40 rounded-2xl object-cover object-[50%_40%] shadow-soft"
              />
              <h3 className="mt-6 text-2xl">Erkan Sahin</h3>
              <p className="mt-1 text-lg font-semibold text-brand">Senior Accountant</p>
              <p className="mt-2 text-sm text-muted-foreground">B.Com (Acc) · Member of IPA</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Erkan Sahin is a Senior Accountant at Kaycarta Accountants, bringing over 22 years
                of experience in accounting and financial services. He holds a Bachelor of Commerce
                (Accounting), B.Com (Acc), and is a Member of the Institute of Public Accountants
                (IPA).
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                With extensive professional experience across accounting, taxation, financial
                reporting and business advisory, Erkan has developed a strong understanding of the
                financial and compliance needs of businesses and individuals. As a Director, he
                plays an active role in overseeing client relationships and maintaining the high
                standards of service delivered by Kaycarta Accountants.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                His extensive industry experience, professional knowledge and commitment to
                providing practical and reliable financial solutions make him an integral part of
                the Kaycarta team.
              </p>
            </Reveal>

            <Reveal
              as="article"
              delay={120}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-soft"
            >
              <img
                src={prathyushaImg}
                alt="Prathyusha Nadempalli, Registered Tax Agent at Kaycarta Accountants"
                width={1280}
                height={853}
                loading="lazy"
                className="size-40 rounded-2xl object-cover object-top shadow-soft"
              />
              <h3 className="mt-6 text-2xl">Prathyusha Nadempalli</h3>
              <p className="mt-1 text-lg font-semibold text-brand">Registered Tax Agent</p>
              <p className="mt-2 text-sm text-muted-foreground">
                B.Com · MPA · Member of IPA (MIPA)
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Prathyusha Nadempalli is a Registered Tax Agent at Kaycarta Accountants, bringing
                over 14 years of experience in taxation, accounting, and business advisory services.
                She holds a Bachelor of Commerce (B.Com), a Master of Professional Accounting (MPA),
                and is a Member of the Institute of Public Accountants (MIPA).
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Prathyusha is passionate about helping clients manage their financial
                responsibilities efficiently and achieve their long-term goals. Known for her
                attention to detail and client-focused approach, she works closely with individuals
                and businesses to provide clear, practical, and results-driven financial guidance.
                Her expertise spans across bookkeeping, tax planning, payroll management, and
                compliance for a wide range of industries.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Outside of her professional work, Prathyusha enjoys travelling and exploring new
                destinations, drawing inspiration and balance from discovering new cultures and
                experiences.
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
