type LogoProps = {
  /** "dark" renders charcoal wordmark (light backgrounds), "light" renders ivory wordmark. */
  tone?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
};

/** Kaycarta wordmark: kay | two rising bars | carta, with "accountants" rule beneath. */
export function Logo({ tone = "dark", withTagline = false, className = "" }: LogoProps) {
  const word = tone === "light" ? "text-surface-foreground" : "text-foreground";
  const sub = tone === "light" ? "text-surface-foreground/85" : "text-foreground/75";

  return (
    <span className={`flex flex-col items-start leading-none ${className}`}>
      <span className="flex items-end gap-[0.06em]">
        <span className={`font-display text-[1.75rem] font-bold tracking-[-0.03em] ${word}`}>
          kay
        </span>
        <svg
          viewBox="0 0 34 40"
          aria-hidden="true"
          className="mx-[0.12em] h-[1.95rem] w-[1.66rem] shrink-0"
        >
          {/* Two straight vertical bars, centered in the viewBox */}
          <polygon points="5,40 5,14 15,14 15,40" className="fill-brand" />
          <polygon points="19,40 19,2 29,2 29,40" fill="#8A8F94" />
        </svg>
        <span className={`font-display text-[1.75rem] font-bold tracking-[-0.03em] ${word}`}>
          carta
        </span>
      </span>

      <span
        className={`mt-[0.3em] pl-[0.05em] text-[0.6rem] font-medium uppercase tracking-[0.34em] ${sub}`}
      >
        accountants
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
