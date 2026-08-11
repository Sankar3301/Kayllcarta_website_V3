import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Kaycarta Accountants" },
      {
        name: "description",
        content:
          "General information disclaimer for the Kaycarta Accountants website. Content is not personal financial, taxation or legal advice.",
      },
      { property: "og:title", content: "Disclaimer | Kaycarta Accountants" },
      { property: "og:description", content: "General information disclaimer." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/disclaimer") },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/disclaimer") }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      intro="Information published on this website is general in nature."
      sections={[
        {
          heading: "General information only",
          body: "Content does not take into account your objectives, financial situation or needs and does not constitute personal financial, taxation or legal advice.",
        },
        {
          heading: "Seek advice",
          body: "Before acting on any information, seek advice appropriate to your circumstances from a qualified professional.",
        },
        {
          heading: "Accuracy",
          body: "While we aim to keep information current, tax and regulatory requirements change and no warranty of accuracy is given.",
        },
        {
          heading: "Services",
          body: "Services described are provided subject to the firm's authorisations and the agreed engagement.",
        },
      ]}
    />
  ),
});
