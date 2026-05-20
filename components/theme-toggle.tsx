"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <div
        className="mx-auto grid w-fit grid-cols-2 rounded-full border border-border bg-card/75 p-1 shadow-soft backdrop-blur"
        aria-hidden="true"
      >
        <span className="h-8 w-28 rounded-full bg-muted/10" />
        <span className="h-8 w-28 rounded-full bg-muted/10" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="mx-auto grid w-fit grid-cols-2 rounded-full border border-border bg-card/75 p-1 shadow-soft backdrop-blur"
      aria-label="Alege tema site-ului"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Activează modul luminos"
        aria-pressed={!isDark}
        className={[
          "inline-flex h-8 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold",
          !isDark ? "bg-copper text-white" : "text-muted hover:text-foreground",
        ].join(" ")}
      >
        <SunIcon className="h-4 w-4" />
        Mod luminos
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Activează modul întunecat"
        aria-pressed={isDark}
        className={[
          "inline-flex h-8 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold",
          isDark ? "bg-copper text-white" : "text-muted hover:text-foreground",
        ].join(" ")}
      >
        <MoonIcon className="h-4 w-4" />
        Mod întunecat
      </button>
    </div>
  );
}
