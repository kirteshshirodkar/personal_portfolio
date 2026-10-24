
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        lightMode
          ? "border-gray-200 bg-white/90 text-gray-900"
          : "border-white/[0.07] bg-[#0b0d10]/85 text-[#e8ecf4]"
      } backdrop-blur-xl`}
    >
      <nav className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setActiveLink("Home")}
          className="font-serif text-[25px] tracking-[-1.5px] transition-opacity hover:opacity-70"
          aria-label="KS — Home"
        >
          KS
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`relative py-2 text-[13px] transition-colors duration-200 ${
                activeLink === link.name
                  ? "text-white"
                  : lightMode
                    ? "text-gray-500 hover:text-gray-950"
                    : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}

              {activeLink === link.name && (
                <span className="absolute -bottom-[10px] left-0 h-[2px] w-full rounded-full bg-[#8b9dff]" />
              )}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setLightMode((prev) => !prev)}
            aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}
            className={`ml-2 rounded-full p-2 transition-colors ${
              lightMode
                ? "text-gray-600 hover:bg-gray-100"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {lightMode ? (
              <Sun size={16} strokeWidth={1.6} />
            ) : (
              <Moon size={16} strokeWidth={1.6} />
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setLightMode((prev) => !prev)}
            aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}
            className="rounded-full p-2 text-current transition-colors hover:bg-white/10"
          >
            {lightMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 transition-colors hover:bg-white/10"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className={`border-t px-5 pb-5 pt-3 md:hidden ${
            lightMode ? "border-gray-200 bg-white" : "border-white/[0.07] bg-[#0b0d10]"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMenuOpen(false);
                }}
                className={`rounded-lg px-3 py-3 text-sm transition-colors ${
                  activeLink === link.name
                    ? "bg-[#8b9dff]/10 text-[#8b9dff]"
                    : lightMode
                      ? "text-gray-600 hover:bg-gray-100"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
