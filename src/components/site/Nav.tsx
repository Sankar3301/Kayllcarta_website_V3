import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";
import { CONTACT } from "./site-data";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open, so the page
  // behind it doesn't scroll along with it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Let Escape close the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sticky top-0 z-40">
      <div className="hidden bg-surface text-surface-foreground/80 md:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-end gap-6 px-8 py-2 text-xs">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-brand-soft" aria-hidden="true" />
            {CONTACT.street}
          </span>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 hover:text-brand-soft"
          >
            <Phone className="size-3.5 text-brand-soft" aria-hidden="true" />
            {CONTACT.phone}
          </a>
        </div>
      </div>

      <header
        className={`border-b bg-card/95 backdrop-blur transition-shadow ${
          scrolled ? "border-border shadow-sm" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link to="/" aria-label="Kaycarta Accountants home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {mainLinks.map((l) => (
              <NavItem key={l.to} to={l.to} label={l.label} exact={l.to === "/"} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-lg bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition-all duration-150 hover:bg-gradient-brand-strong sm:inline-flex"
            >
              Book a Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <nav
              aria-label="Mobile"
              className={`border-t border-border bg-card px-5 pb-6 pt-3 transition-opacity duration-300 ${
                open ? "opacity-100 delay-100" : "opacity-0"
              }`}
            >
              <ul className="flex flex-col">
                {mainLinks.map((l) => (
                  <MobileItem
                    key={l.to}
                    to={l.to}
                    label={l.label}
                    exact={l.to === "/"}
                    onDone={() => setOpen(false)}
                  />
                ))}
              </ul>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center rounded-lg bg-gradient-brand px-5 py-3.5 text-sm font-semibold text-brand-foreground transition-all duration-150 hover:bg-gradient-brand-strong"
              >
                Book a Consultation
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

function NavItem({ to, label, exact }: { to: string; label: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: Boolean(exact) }}
      activeProps={{ className: "text-foreground [&>span]:scale-x-100", "aria-current": "page" }}
      className="group relative rounded-md px-3.5 py-2 text-sm font-semibold text-foreground transition-colors hover:text-foreground"
    >
      {label}
      <span
        aria-hidden="true"
        className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </Link>
  );
}

function MobileItem({
  to,
  label,
  exact,
  onDone,
}: {
  to: string;
  label: string;
  exact?: boolean;
  onDone: () => void;
}) {
  return (
    <li>
      <Link
        to={to}
        onClick={onDone}
        activeOptions={{ exact: Boolean(exact) }}
        activeProps={{ className: "text-brand", "aria-current": "page" }}
        className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground"
      >
        {label}
      </Link>
    </li>
  );
}
