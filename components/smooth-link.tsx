// components/SmoothScrollLink.tsx
"use client";

import { Link as ScrollLink } from "react-scroll";

export function SmoothScrollLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollLink to={to} smooth={true} duration={500} className="cursor-pointer">
      {children}
    </ScrollLink>
  );
}
