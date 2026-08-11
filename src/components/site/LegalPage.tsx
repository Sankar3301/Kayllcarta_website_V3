import { PageHero } from "./PageHero";
import { Footer } from "./Footer";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <div id="main-content" tabIndex={-1} className="min-h-screen bg-background">
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-24">
        {sections.map((s) => (
          <div key={s.heading} className="mt-10 first:mt-0">
            <h2 className="text-xl">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
        <p className="mt-12 rounded-xl border border-border bg-secondary/60 p-6 text-sm text-muted-foreground">
          Questions about this page can be directed to our office on 03 9464 1144.
        </p>
      </section>
      <Footer />
    </div>
  );
}
