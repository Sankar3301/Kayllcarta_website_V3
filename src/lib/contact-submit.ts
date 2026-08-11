import { createServerFn } from "@tanstack/react-start";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export type ContactResult =
  { ok: true } | { ok: false; fallback: true } | { ok: false; error: "invalid" | "send_failed" };

function parseEnquiry(payload: EnquiryPayload): EnquiryPayload | null {
  const name = typeof payload?.name === "string" ? payload.name.trim() : "";
  const email = typeof payload?.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload?.phone === "string" ? payload.phone.trim() : "";
  const service = typeof payload?.service === "string" ? payload.service.trim() : "";
  const message = typeof payload?.message === "string" ? payload.message.trim() : "";

  if (!name || name.length > 100) return null;
  if (!emailPattern.test(email) || email.length > 255) return null;
  if (phone && (phone.length > 30 || !/^[0-9+()\s-]+$/.test(phone))) return null;
  if (!message || message.length > 2000) return null;

  return { name, email, phone, service, message };
}

/**
 * Handles contact form submissions on the server.
 *
 * Set VITE_CONTACT_FORM_ENDPOINT (e.g. a Formspree or similar form endpoint) to
 * have enquiries emailed directly. Without it, the client falls back to opening
 * the visitor's email app so submissions are never lost.
 */
export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((payload: EnquiryPayload) => payload)
  .handler(async ({ data }) => {
    const enquiry = parseEnquiry(data);
    if (!enquiry) return { ok: false, error: "invalid" } satisfies ContactResult;

    const endpoint = import.meta.env["VITE_CONTACT_FORM_ENDPOINT"] as string | undefined;
    if (!endpoint) return { ok: false, fallback: true } satisfies ContactResult;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...enquiry,
          _subject: `Website enquiry${enquiry.service ? ` — ${enquiry.service}` : ""} from ${enquiry.name}`,
          _replyto: enquiry.email,
        }),
      });

      if (!res.ok) return { ok: false, error: "send_failed" } satisfies ContactResult;
      return { ok: true } satisfies ContactResult;
    } catch {
      return { ok: false, error: "send_failed" } satisfies ContactResult;
    }
  });
