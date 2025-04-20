// components/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, Mountain as MountainIcon, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Navbar } from "./navbar";
import Image from "next/image";
import logo from "@/public/images/paymytax-logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-slate-900/50 dark:bg-slate-900/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={() => setOpen(false)}
        >
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="text-lg md:text-xl font-bold text-white">
            PayMyTax
          </span>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          <Navbar />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="flex items-center p-2 text-white rounded-lg hover:bg-slate-800 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </Button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen bg-slate-900/95 backdrop-blur-md z-50 transition-all duration-300 ease-in-out transform ${
            open ? "translate-x-0 w-64" : "translate-x-full w-0"
          } md:hidden`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            {open && (
              <div className="flex justify-end mb-6">
                <Button
                  className="flex items-center p-2 text-white rounded-lg hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            )}

            {/* Mobile Navbar */}
            <Navbar onClick={() => setOpen(false)} />
            <div className="mt-8">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
