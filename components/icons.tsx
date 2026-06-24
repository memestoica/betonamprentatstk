import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M7.1 4.2 9 3.5c.9-.3 1.8.1 2.2 1l.9 2.1c.3.7.1 1.5-.5 2l-1.1.9a11.8 11.8 0 0 0 4 4l.9-1.1c.5-.6 1.3-.8 2-.5l2.1.9c.9.4 1.3 1.3 1 2.2l-.7 1.9c-.3.8-1 1.3-1.9 1.3C10.9 18.2 5.8 13.1 5.8 6.1c0-.9.5-1.6 1.3-1.9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M4.8 19.2 5.9 16a7.4 7.4 0 1 1 2.1 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.6 8.7c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .6.4l.6 1.4c.1.2.1.4 0 .6l-.4.5c-.1.2-.2.3 0 .6.4.8 1.1 1.5 2 1.9.3.2.4.1.6-.1l.5-.7c.2-.2.4-.2.7-.1l1.3.6c.3.2.5.3.4.6-.1.7-.8 1.4-1.5 1.5-1.3.2-3-.5-4.3-1.8-1.3-1.2-2.1-2.8-2-4 .1-.5.5-1 .8-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
