"use client";

import Link from "next/link";

export function Navbar({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
      <Link
        href="/gst"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm md:text-base"
        onClick={onClick}
      >
        GST
      </Link>
      <Link
        href="/itr"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm md:text-base"
        onClick={onClick}
      >
        ITR
      </Link>
      <Link
        href="#contact"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm md:text-base"
        onClick={onClick}
      >
        Contact
      </Link>
      {/* <Link
        href="#testimonials"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm md:text-base"
        onClick={onClick}
      >
        Testimonials
      </Link> */}
    </nav>
  );
}
