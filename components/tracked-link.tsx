"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  getTrackedEventFromHref,
  trackEvent,
  type AnalyticsEventName,
} from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  location: string;
  eventName?: AnalyticsEventName;
  eventParams?: Record<string, string | number | boolean | undefined>;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "aria-label" | "title">;

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function TrackedLink({
  href,
  children,
  className,
  location,
  eventName,
  eventParams,
  ...anchorProps
}: TrackedLinkProps) {
  const trackedEventName = eventName ?? getTrackedEventFromHref(href);

  function handleClick() {
    if (!trackedEventName) {
      return;
    }

    trackEvent(trackedEventName, {
      location,
      link_url: href,
      ...eventParams,
    });
  }

  if (isInternalHref(href)) {
    return (
      <Link
        href={href}
        className={className}
        onClick={handleClick}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...anchorProps}>
      {children}
    </a>
  );
}
