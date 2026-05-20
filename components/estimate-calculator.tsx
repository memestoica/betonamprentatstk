"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";

type CalculatorInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  inputMode?: "decimal" | "text";
  onChange: (value: string) => void;
};

function CalculatorInput({
  label,
  name,
  value,
  placeholder,
  inputMode = "text",
  onChange,
}: CalculatorInputProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <input
        name={name}
        value={value}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-copper"
      />
    </label>
  );
}

export function EstimateCalculator() {
  const [locality, setLocality] = useState("");
  const [county, setCounty] = useState("");
  const [surface, setSurface] = useState("");

  const eventParams = {
    location: "calculator",
    locality: locality || undefined,
    county: county || undefined,
    surface: surface || undefined,
  };

  const whatsAppMessage = encodeURIComponent(
    `Bună ziua! Doresc o ofertă pentru beton amprentat. Localitate: ${
      locality || "[localitate]"
    }, județ: ${county || "[județ]"}, suprafață aproximativă: ${
      surface || "[mp]"
    } mp.`,
  );
  const whatsAppHref = `${siteConfig.whatsAppBaseUrl}?text=${whatsAppMessage}`;

  return (
    <section
      id="pret-estimativ"
      className="grid scroll-mt-32 gap-6 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
          Preț estimativ
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal text-foreground">
          Obține preț estimativ
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Completează localitatea, județul și suprafața aproximativă a lucrării.
          Estimarea finală va fi configurată în etapa următoare, iar pentru o
          ofertă exactă ne poți contacta direct pe WhatsApp sau telefonic.
        </p>

        <form className="mt-6 grid gap-4" aria-label="Calculator ofertă beton amprentat">
          <div className="grid gap-4 sm:grid-cols-2">
            <CalculatorInput
              label="Localitate"
              name="locality"
              value={locality}
              placeholder="Ex: Slatina"
              onChange={setLocality}
            />
            <CalculatorInput
              label="Județ"
              name="county"
              value={county}
              placeholder="Ex: Olt"
              onChange={setCounty}
            />
          </div>
          <CalculatorInput
            label="Suprafață lucrare în metri pătrați"
            name="surface"
            value={surface}
            placeholder="Ex: 80"
            inputMode="decimal"
            onChange={setSurface}
          />
          <button
            type="button"
            onClick={() => trackEvent("estimate_click", eventParams)}
            className="inline-flex w-full items-center justify-center rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white hover:bg-copper-strong sm:w-fit"
          >
            Vezi estimarea
          </button>
        </form>
      </div>

      <aside className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6 lg:self-start">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
          Rezultat
        </p>
        <dl className="mt-5 grid gap-3 text-sm">
          <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
            <dt className="text-muted">Localitate</dt>
            <dd className="font-semibold text-foreground">{locality || "Nespecificată"}</dd>
          </div>
          <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
            <dt className="text-muted">Județ</dt>
            <dd className="font-semibold text-foreground">{county || "Nespecificat"}</dd>
          </div>
          <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
            <dt className="text-muted">Suprafață</dt>
            <dd className="font-semibold text-foreground">
              {surface ? `${surface} mp` : "Nespecificată"}
            </dd>
          </div>
        </dl>

        <div className="mt-5 rounded-xl border border-copper/20 bg-copper/8 p-4 text-sm leading-7 text-muted">
          Prețul estimativ va fi disponibil după configurarea formulei finale.
        </div>

        {/* TODO: Add the final estimate formula after pricing rules are confirmed. */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <a
            href={whatsAppHref}
            onClick={() => trackEvent("whatsapp_click", eventParams)}
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1EAE54]"
          >
            Trimite detaliile pe WhatsApp
          </a>
          <a
            href={siteConfig.phoneHref}
            onClick={() => trackEvent("phone_click", eventParams)}
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-background"
          >
            Sună acum
          </a>
        </div>
      </aside>
    </section>
  );
}
