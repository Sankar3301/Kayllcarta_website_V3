const MAP_QUERY = "Level 1, 179B High Street, Thomastown VIC 3074";

export function OfficeMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-foreground/18 bg-surface-foreground/5">
      <iframe
        title="Kaycarta Accountants office location on Google Maps"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[380px] w-full border-0"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 text-sm text-surface-foreground/85">
        <span>Level 1, 179 B High Street, Thomastown VIC 3074</span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand hover:underline"
        >
          Get directions
        </a>
      </div>
    </div>
  );
}
