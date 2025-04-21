"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-300 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                PayMyTax
              </h3>
              <Link
                href="https://agiliscommunications.com/"
                className="text-xs bg-blue-600/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full border border-blue-500/30"
              >
                Unit of ACS
              </Link>
            </div>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              Simplifying tax compliance for businesses with expert solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Services", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <svg
                  className="w-7 h-7 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>support@paymytax.in</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-7 h-7 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p>+91-9818985259</p>
                  <p>+91-9871871930</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-7 h-7 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Mon-Sat: 10:00 AM - 06:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Our Office
            </h3>
            <div className="flex items-start gap-3 text-gray-600 dark:text-slate-400">
              <svg
                className="w-7 h-7 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>
                Office No 206, EMCA House,
                <br />
                23, Ansari Rd,
                <br />
                Daryaganj, Delhi 110002
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} PayMyTax. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 dark:text-slate-600 text-center md:text-right">
              PayMyTax is a specialized service unit of{" "}
              <Link
                href={"https://www.agilis.in/"}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Agilis Communication Services Pvt. Ltd
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
