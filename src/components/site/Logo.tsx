type LogoProps = {
  /** "dark" renders charcoal wordmark (light backgrounds), "light" renders ivory wordmark. */
  tone?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
};

/** Kaycarta wordmark: kay | two rising bars | carta, with "accountants" rule beneath. */
export function Logo({ tone = "dark", withTagline = false, className = "" }: LogoProps) {
  const word = tone === "light" ? "text-surface-foreground" : "text-foreground";
  const rule = tone === "light" ? "bg-surface-foreground/35" : "bg-foreground/25";
  const sub = tone === "light" ? "text-surface-foreground/80" : "text-foreground/70";

  return (
    <span className={`flex flex-col items-center leading-none ${className}`}>
      <span className="flex items-end gap-[0.06em]">
        <span className={`font-display text-[1.55rem] font-bold tracking-[-0.03em] ${word}`}>
          kay
        </span>
        <svg
          viewBox="0 0 26 40"
          aria-hidden="true"
          className="mx-[0.12em] h-[1.7rem] w-[1.1rem] shrink-0"
        >
          <polygon points="2,40 2,14 11,8 11,40" className="fill-brand" />
          <polygon points="14,40 14,8 23,2 23,40" fill="#8A8F94" />
        </svg>
        <span className={`font-display text-[1.55rem] font-bold tracking-[-0.03em] ${word}`}>
          carta
        </span>
      </span>

      <span className="mt-[0.35em] flex w-full items-center gap-2">
        <span className={`h-px flex-1 ${rule}`} />
        <span className={`text-[0.6rem] font-medium uppercase tracking-[0.34em] ${sub}`}>
          accountants
        </span>
        <span className={`h-px flex-1 ${rule}`} />
      </span>

      {withTagline ? (
        <span className={`mt-[0.5em] text-[0.55rem] uppercase tracking-[0.26em] ${sub}`}>
          Tax <span className="text-brand">|</span> Accounting <span className="text-brand">|</span>{" "}
          Advisory
        </span>
      ) : null}
    </span>
  );
}
