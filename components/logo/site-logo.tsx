export function SiteLogo() {
  return (
    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-copper/35 bg-[#161616] text-copper shadow-soft sm:h-12 sm:w-12">
        <svg viewBox="0 0 48 48" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" fill="none">
          <path d="M7 8h34v32H7z" stroke="currentColor" strokeWidth="2.4" />
          <path
            d="M7 27 16 18h8l6-6h11M16 40l8-10h8l9-7M7 16h12l8 8h14M24 8v10M30 12v12M16 18v9M24 30v10M32 24v16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="min-w-0 leading-none">
        <span className="block truncate text-sm font-extrabold uppercase tracking-normal text-foreground sm:text-lg">
          Beton
        </span>
        <span className="block truncate text-sm font-extrabold uppercase tracking-normal text-foreground sm:text-lg">
          Amprentat
        </span>
        <span className="mt-0.5 block text-[0.62rem] font-extrabold uppercase tracking-[0.24em] text-copper sm:text-[0.68rem]">
          STK
        </span>
      </span>
    </div>
  );
}
