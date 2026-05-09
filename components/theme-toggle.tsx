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
        className="grid grid-cols-2 rounded-full border border-border bg-card/90 p-1 shadow-soft backdrop-blur"
        aria-hidden="true"
      >
        <span className="h-9 w-9 rounded-full bg-muted/10" />
        <span className="h-9 w-9 rounded-full bg-muted/10" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="grid grid-cols-2 rounded-full border border-border bg-card/90 p-1 shadow-soft backdrop-blur"
      aria-label="Alege tema site-ului"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Activează modul luminos"
        aria-pressed={!isDark}
        title="Mod luminos"
        className={[
          "grid h-9 w-9 place-items-center rounded-full",
          !isDark ? "bg-copper text-white" : "text-muted hover:text-foreground",
        ].join(" ")}
      >
        <SunIcon className="h-5 w-5" />
        <span className="sr-only">Mod luminos</span>
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Activează modul întunecat"
        aria-pressed={isDark}
        title="Mod întunecat"
        className={[
          "grid h-9 w-9 place-items-center rounded-full",
          isDark ? "bg-copper text-white" : "text-muted hover:text-foreground",
        ].join(" ")}
      >
        <MoonIcon className="h-5 w-5" />
        <span className="sr-only">Mod întunecat</span>
      </button>
    </div>
  );
}
