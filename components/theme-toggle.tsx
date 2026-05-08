"use client";

import { useTheme } from "next-themes";

const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const activeTheme = theme ?? "system";

  return (
    <div className="flex rounded-full border border-border bg-card/90 p-1 shadow-soft backdrop-blur">
      {options.map((option) => {
        const isActive = activeTheme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={[
              "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
              isActive ? "bg-copper text-white" : "text-muted hover:text-foreground",
            ].join(" ")}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
