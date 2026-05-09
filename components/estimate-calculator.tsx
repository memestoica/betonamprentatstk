"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";

const modelOptions = [
  "Piatră naturală",
  "Cărămidă",
  "Lemn",
  "Dale",
  "Pavaj",
  "Busolă decorativă",
] as const;

const colorOptions = [
  "Gri",
  "Antracit",
  "Maro",
  "Roșcat",
  "Crem",
  "Bej",
  "Gri deschis",
] as const;

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

type CalculatorSelectProps = {
  label: string;
  name: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

function CalculatorSelect({
  label,
  name,
  value,
  options,
  onChange,
}: CalculatorSelectProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-copper"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function parsePositiveNumber(value: string) {
  const normalized = value.replace(",", ".");
  const parsed = Number.parseFloat(normalized);

  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function formatSurface(value: number) {
  if (value <= 0) {
    return "Nespecificată";
  }

  return `${Number.isInteger(value) ? value : value.toFixed(2)} mp`;
}

export function EstimateCalculator() {
  const [surface, setSurface] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [locality, setLocality] = useState("");
  const [county, setCounty] = useState("");
  const [model, setModel] = useState<(typeof modelOptions)[number]>("Piatră naturală");
  const [color, setColor] = useState<(typeof colorOptions)[number]>("Antracit");

  const calculatedSurface = useMemo(() => {
    const lengthValue = parsePositiveNumber(length);
    const widthValue = parsePositiveNumber(width);

    return lengthValue && widthValue ? lengthValue * widthValue : 0;
  }, [length, width]);

  const finalSurface = parsePositiveNumber(surface) || calculatedSurface;
  const surfaceLabel = formatSurface(finalSurface);
  const dimensionDetails =
    length && width ? `, dimensiuni: ${length} m x ${width} m` : "";

  const whatsAppMessage = encodeURIComponent(
    `Bună ziua! Doresc o ofertă pentru beton amprentat. Suprafață: ${surfaceLabel}${dimensionDetails}, localitate: ${
      locality || "nespecificată"
    }, județ: ${county || "nespecificat"}, model: ${model}, culoare: ${color}.`,
  );
  const whatsAppHref = `${siteConfig.whatsAppUrl}?text=${whatsAppMessage}`;

  return (
    <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
            Calculator ofertă
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal text-foreground">
            Obține ofertă estimativă
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Completează detaliile lucrării. Prețul final nu se calculează încă
            automat, dar datele pot fi trimise direct pentru o discuție rapidă.
          </p>
        </div>

        <form className="mt-6 grid gap-4" aria-label="Calculator ofertă beton amprentat">
          <CalculatorInput
            label="Suprafață totală în mp"
            name="surface"
            value={surface}
            placeholder="Ex: 80"
            inputMode="decimal"
            onChange={setSurface}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <CalculatorInput
              label="Lungime"
              name="length"
              value={length}
              placeholder="Ex: 10"
              inputMode="decimal"
              onChange={setLength}
            />
            <CalculatorInput
              label="Lățime"
              name="width"
              value={width}
              placeholder="Ex: 8"
              inputMode="decimal"
              onChange={setWidth}
            />
          </div>

          <div className="rounded-xl border border-copper/20 bg-copper/8 px-4 py-3 text-sm text-muted">
            Suprafață calculată din lungime și lățime:{" "}
            <span className="font-semibold text-foreground">
              {formatSurface(calculatedSurface)}
            </span>
          </div>

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

          <div className="grid gap-4 sm:grid-cols-2">
            <CalculatorSelect
              label="Model amprentă"
              name="model"
              value={model}
              options={modelOptions}
              onChange={(value) => setModel(value as (typeof modelOptions)[number])}
            />
            <CalculatorSelect
              label="Culoare amprentă"
              name="color"
              value={color}
              options={colorOptions}
              onChange={(value) => setColor(value as (typeof colorOptions)[number])}
            />
          </div>
        </form>
      </div>

      <aside className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6 lg:sticky lg:top-28 lg:self-start">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
          Rezultat estimativ
        </p>
        <div className="mt-5 space-y-4">
          <dl className="grid gap-3 text-sm">
            <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
              <dt className="text-muted">Suprafață estimată</dt>
              <dd className="font-semibold text-foreground">{surfaceLabel}</dd>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
              <dt className="text-muted">Model ales</dt>
              <dd className="font-semibold text-foreground">{model}</dd>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
              <dt className="text-muted">Culoare aleasă</dt>
              <dd className="font-semibold text-foreground">{color}</dd>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
              <dt className="text-muted">Localitate / Județ</dt>
              <dd className="text-right font-semibold text-foreground">
                {locality || "Localitate"} / {county || "Județ"}
              </dd>
            </div>
          </dl>

          <div className="rounded-xl border border-copper/20 bg-copper/8 p-4 text-sm leading-7 text-muted">
            Prețul estimativ va fi calculat după configurarea formulei finale.
          </div>

          {/* TODO: Add the final pricing formula after rates, travel rules, and minimum surface are confirmed. */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white hover:bg-copper-strong"
            >
              Sună acum
            </a>
            <a
              href={whatsAppHref}
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-background"
            >
              Trimite pe WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}
