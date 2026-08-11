import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { resourceArticles, resourceCategories } from "@/components/site/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Insights | Kaycarta Accountants" },
      {
        name: "description",
        content:
          "General accounting and tax information from Kaycarta Accountants, covering tax basics, small business, bookkeeping, business setup and superannuation.",
      },
      { property: "og:title", content: "Resources & Insights | Kaycarta Accountants" },
      {
        property: "og:description",
        content:
          "Plain-language guides on tax, bookkeeping and running a small business in Australia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/resources") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/resources") }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [active, setActive] = useState<string>("All");
  const categories = ["All", ...resourceCategories];
  const visible =
    active === "All" ? resourceArticles : resourceArticles.filter((a) => a.category === active);

  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <PageHero
        eyebrow="Resources"
        title="Useful Information, Explained Simply"
        intro="General guidance on tax, bookkeeping and business topics. These articles are informational only and do not constitute personal advice."
      />

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <ul className="flex flex-wrap gap-2" aria-label="Filter articles by topic">
          {categories.map((c) => {
            const selected = active === c;
            return (
              <li key={c}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    selected
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-brand/50 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((a) => (
            <article
              key={a.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                {a.category}
              </span>
              <h2 className="mt-4 text-lg leading-snug">{a.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            No articles in this topic yet — check back soon.
          </p>
        ) : null}
      </section>

      <CtaBand
        title="Have a Question About Your Own Situation?"
        body="General information only goes so far. Speak with Kaycarta about the details that apply to you."
      />
      <Footer />
    </div>
  );
}
