import type { ReactNode } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { CONTACT } from "./site-data";

export function ContactCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <Card icon={<MapPin className="size-5" aria-hidden="true" />} title="Office">
        <p>{CONTACT.street}</p>
        <p className="mt-2 text-sm opacity-75">{CONTACT.postal}</p>
      </Card>
      <Card icon={<Phone className="size-5" aria-hidden="true" />} title="Phone">
        <a href={CONTACT.phoneHref} className="font-semibold hover:text-brand">
          {CONTACT.phone}
        </a>
      </Card>
      <Card icon={<Mail className="size-5" aria-hidden="true" />} title="Email">
        <a href={`mailto:${CONTACT.email}`} className="break-all font-semibold hover:text-brand">
          {CONTACT.email}
        </a>
      </Card>
      <Card icon={<Clock className="size-5" aria-hidden="true" />} title="Hours">
        <ul className="space-y-1 text-sm">
          {CONTACT.hours.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

function Card({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
        {icon}
      </span>
      <h3 className="mt-5 text-base font-bold uppercase tracking-[0.14em]">{title}</h3>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </div>
  );
}
