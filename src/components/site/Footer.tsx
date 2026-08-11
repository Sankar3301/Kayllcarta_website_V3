import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "./Logo";
import { services } from "./services-data";
import { CONTACT } from "./site-data";

export function Footer() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <Logo tone="light" withTagline />
          <p className="mt-6 text-sm leading-relaxed text-surface-foreground/70">
            Accounting, taxation and advisory support for individuals and businesses in Thomastown
            and across Melbourne.
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-soft">
            Services
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-surface-foreground/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-surface-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-soft">Company</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-surface-foreground/70">
            <li>
              <Link to="/about" className="hover:text-surface-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-surface-foreground">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-surface-foreground">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-surface-foreground">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-surface-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-surface-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-surface-foreground">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-surface-foreground">
                Disclaimer
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-soft">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-surface-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-soft" aria-hidden="true" />
              <span>
                {CONTACT.street}
                <br />
                {CONTACT.postal}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-soft" aria-hidden="true" />
              <a href={CONTACT.phoneHref} className="hover:text-surface-foreground">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-soft" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all hover:text-surface-foreground"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-foreground/12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-6 text-xs text-surface-foreground/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Kaycarta Accountants. All rights reserved.</p>
          <p>
            Information on this website is general in nature and does not constitute personal
            financial, taxation or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
