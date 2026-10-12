'use client';

// Rendered on the client so the year stays current on statically built pages.
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
