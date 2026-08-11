import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Kaycarta Accountants" },
      {
        name: "description",
        content:
          "Terms governing the use of the Kaycarta Accountants website, including content, liability and third-party links.",
      },
      { property: "og:title", content: "Terms of Use | Kaycarta Accountants" },
      { property: "og:description", content: "Terms of use for the Kaycarta Accountants website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/terms") },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="By using this website you agree to the terms set out below."
      sections={[
        {
          heading: "Website content",
          body: "Content on this website is provided for general information only and may change without notice.",
        },
        {
          heading: "No client relationship",
          body: "Using this website or submitting an enquiry form does not create a client relationship. Engagements are confirmed in writing.",
        },
        {
          heading: "Third-party links",
          body: "We are not responsible for the content or availability of third-party websites linked from this site.",
        },
        {
          heading: "Liability",
          body: "To the extent permitted by law, Kaycarta Accountants is not liable for loss arising from reliance on general website content.",
        },
      ]}
    />
  ),
});
