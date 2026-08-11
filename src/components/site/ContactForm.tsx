import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { services } from "./services-data";
import { CONTACT } from "./site-data";
import { submitEnquiry, type ContactResult } from "@/lib/contact-submit";

type Values = { name: string; email: string; phone: string; service: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type SentState = false | "mailto" | "sent";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  const name = v.name.trim();
  const email = v.email.trim();
  const phone = v.phone.trim();
  const message = v.message.trim();

  if (!name) e.name = "Please enter your name.";
  else if (name.length > 100) e.name = "Name must be under 100 characters.";

  if (!email) e.email = "Please enter your email.";
  else if (!emailPattern.test(email) || email.length > 255)
    e.email = "Enter a valid email address.";

  if (phone && (phone.length > 30 || !/^[0-9+()\s-]+$/.test(phone)))
    e.phone = "Enter a valid phone number.";

  if (!message) e.message = "Please tell us how we can help.";
  else if (message.length > 2000) e.message = "Message must be under 2000 characters.";

  return e;
}

function buildMailto(v: Values) {
  const subject = `Website enquiry${v.service ? ` — ${v.service}` : ""} from ${v.name.trim()}`;
  const body = [
    `Name: ${v.name.trim()}`,
    `Email: ${v.email.trim()}`,
    v.phone.trim() ? `Phone: ${v.phone.trim()}` : null,
    v.service ? `Service of interest: ${v.service}` : null,
    "",
    v.message.trim(),
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const empty: Values = { name: "", email: "", phone: "", service: "", message: "" };

const SUBMIT_ERROR =
  "We couldn't send your enquiry right now. Please try again, email us directly or call the office.";

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<SentState>(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = (key: keyof Values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitError(null);
    setSubmitting(true);
    try {
      const company = new FormData(event.currentTarget).get("company") ?? "";
      // Honeypot filled? Pretend it worked and drop the submission silently.
      if (typeof company === "string" && company.length > 0) {
        setSent("sent");
        return;
      }

      const result: ContactResult = await submitEnquiry({ data: values });
      if (result.ok) {
        setSent("sent");
      } else if ("fallback" in result && result.fallback) {
        window.location.href = buildMailto(values);
        setSent("mailto");
      } else {
        setSubmitError(SUBMIT_ERROR);
      }
    } catch {
      setSubmitError(SUBMIT_ERROR);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <CheckCircle2 className="size-8 text-brand" aria-hidden="true" />
        <h2 className="mt-4 text-2xl">
          {sent === "sent" ? "Your enquiry has been sent" : "Your email is ready to send"}
        </h2>
        {sent === "sent" ? (
          <p className="mt-3 text-muted-foreground">
            Thanks for getting in touch. Kaycarta will respond to your enquiry during business
            hours.
          </p>
        ) : (
          <p className="mt-3 text-muted-foreground">
            We opened your email app with the enquiry pre-filled — press send and it reaches us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-brand">
              {CONTACT.email}
            </a>
            . If nothing opened, email us directly or call{" "}
            <a href={CONTACT.phoneHref} className="font-semibold text-brand">
              {CONTACT.phone}
            </a>
            .
          </p>
        )}
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setSent(false);
          }}
          className="mt-6 inline-flex rounded-lg border border-input px-5 py-3 text-sm font-semibold"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card p-8"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* Honeypot: hidden from humans, tempting for bots. Must stay empty. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
      />

      <h2 className="text-2xl">Send an enquiry</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us a little about what you need and we will respond during business hours.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          maxLength={100}
          required
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          maxLength={255}
          required
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
          maxLength={30}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-sm font-semibold">
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(e) => set("service")(e.target.value)}
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm"
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Submit enquiry"
        )}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Submitting this form sends your enquiry to Kaycarta. Submitting does not create a client
        relationship, and information provided is general in nature.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  error,
  maxLength,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  maxLength?: number | undefined;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm"
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
