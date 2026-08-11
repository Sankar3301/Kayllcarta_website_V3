import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { absoluteUrl } from "@/lib/site-url";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Kaycarta Accountants" },
      {
        name: "description",
        content:
          "How Kaycarta Accountants collects, uses and protects personal information provided by clients and website visitors.",
      },
      { property: "og:title", content: "Privacy Policy | Kaycarta Accountants" },
      { property: "og:description", content: "Kaycarta Accountants privacy practices." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/privacy") },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Kaycarta Accountants respects the privacy of clients and website visitors."
      sections={[
        {
          heading: "Information we collect",
          body: "We may collect personal and financial information necessary to provide accounting, taxation and advisory services, including contact details and records you provide to us.",
        },
        {
          heading: "How we use information",
          body: "Information is used to deliver the services agreed with you, meet professional and legal obligations, and communicate with you about your engagement.",
        },
        {
          heading: "Disclosure",
          body: "We do not sell personal information. Information may be disclosed to regulators or service providers where required to deliver services or comply with law.",
        },
        {
          heading: "Storage and security",
          body: "We take reasonable steps to protect information from misuse, loss and unauthorised access.",
        },
        {
          heading: "Access and enquiries",
          body: "You may request access to the personal information we hold about you by contacting our office.",
        },
      ]}
    />
  ),
});
