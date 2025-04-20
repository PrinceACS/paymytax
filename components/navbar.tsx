"use client";

import Link from "next/link";

export function Navbar({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
      <Link
        href="/gst"
        className="text-gray-300 hover:text-white transition-colors"
        onClick={onClick}
      >
        GST
      </Link>
      <Link
        href="/itr"
        className="text-gray-300 hover:text-white transition-colors"
        onClick={onClick}
      >
        ITR
      </Link>
      {/* <Link
        href="#testimonials"
        className="text-gray-300 hover:text-white transition-colors"
        onClick={onClick}
      >
        Testimonials
      </Link>
      <Link
        href="#contact"
        className="text-gray-300 hover:text-white transition-colors"
        onClick={onClick}
      >
        Contact
      </Link> */}
    </nav>
  );
}
