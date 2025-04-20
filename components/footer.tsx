"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800 dark:bg-slate-800 dark:border-slate-700">
      <div className="container mx-auto px-4 justify-between">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-8">
          <div>
            <h3 className="text-slate-200 dark:text-slate-200 text-lg font-bold mb-4">
              PayMyTax
            </h3>
            <p className="text-slate-400 dark:text-slate-300">
              Simplifying tax compliance for modern businesses, so you can focus
              on growth.
            </p>
          </div>
          <div>
            <h3 className="text-slate-200 dark:text-slate-200 font-bold mb-4">
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-slate-400 dark:text-slate-300 hover:text-slate-200 dark:hover:text-slate-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 dark:text-slate-300 hover:text-slate-200 dark:hover:text-slate-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-slate-400 dark:text-slate-300 hover:text-slate-200 dark:hover:text-slate-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 dark:text-slate-300 hover:text-slate-200 dark:hover:text-slate-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-200 dark:text-slate-200 font-bold mb-4">
              Contact Us
            </h3>
            <p className="text-slate-400 dark:text-slate-300">
              Email: support@paymytax.in
            </p>
            <p className="text-slate-400 dark:text-slate-300 text-nowrap">
              Phone: +91-9818985259 / +91-9871871930
            </p>
            <p className="text-slate-400 dark:text-slate-300 text-nowrap">
              Monday to Saturday: 10:00 AM - 06:00 PM
            </p>
            <p className="text-slate-400 dark:text-slate-300">
              Office No 206, EMCA House, 23, Ansari Rd, Daryaganj, Delhi
            </p>
          </div>
          {/* <div className="items-center justify-center">
            <h3 className="text-slate-200 dark:text-slate-200 font-bold mb-4">
              Follow Us
            </h3>
            <ul className="space-x-4 items-center justify-center">
              <li>
                <a
                  href="#"
                  className="text-slate-400 dark:text-slate-300 hover:text-slate-200 dark:hover:text-slate-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 dark:text-slate-300 hover:text-slate-200 dark:hover:text-slate-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 dark:text-slate-300 hover:text-slate-200 dark:hover:text-slate-400"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-400 dark:text-slate-300">
            © {new Date().getFullYear()} PayMyTax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
