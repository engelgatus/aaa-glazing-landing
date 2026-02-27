"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import basePath from "@/lib/basePath";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#benefits" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#quote" },
];

function smoothScrollTo(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const menuEase = [0.25, 0.1, 0.25, 1] as const;

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [overHero, setOverHero] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const colorTransition = "0.4s ease";

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => smoothScrollTo(href), 300);
  };

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={
          overHero && !menuOpen
            ? {
                backgroundColor: "transparent",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                borderBottom: "1px solid transparent",
                boxShadow: "none",
                transition: `background-color ${colorTransition}, box-shadow ${colorTransition}, border-color ${colorTransition}`,
              }
            : {
                backgroundColor: "rgba(248, 250, 252, 0.97)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                transition: `background-color ${colorTransition}, box-shadow ${colorTransition}, border-color ${colorTransition}`,
              }
        }
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => { setMenuOpen(false); smoothScrollTo("#hero"); }}
            aria-label="Back to top"
            className="shrink-0 rounded-lg px-2 py-1.5 flex items-center"
            style={{
              backgroundColor: overHero && !menuOpen ? "rgba(255,255,255,0.90)" : "transparent",
              transition: `background-color ${colorTransition}`,
            }}
          >
            <div className="relative w-24 h-8">
              <Image
                src={`${basePath}/images/aaa-logo.webp`}
                alt="AAA Glazing Services"
                fill
                sizes="96px"
                className="object-contain object-left"
                priority
              />
            </div>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => smoothScrollTo(link.href)}
                  className="text-sm font-medium tracking-wide cursor-pointer hover:opacity-70 transition-opacity duration-200"
                  style={{
                    color: overHero ? "rgba(255,255,255,0.80)" : "#0f172a",
                    transition: `color ${colorTransition}`,
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:1300666701"
            className="hidden md:inline-flex bg-accent hover:opacity-90 text-text font-semibold text-sm px-5 py-2.5 rounded-full transition-opacity duration-200"
          >
            Call 1300 666 701
          </a>

          {/* Burger button — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: menuEase }}
              className="block w-6 h-0.5 rounded-full"
              style={{ backgroundColor: overHero && !menuOpen ? "#ffffff" : "#0f172a" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2, ease: menuEase }}
              className="block w-6 h-0.5 rounded-full"
              style={{ backgroundColor: overHero && !menuOpen ? "#ffffff" : "#0f172a" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: menuEase }}
              className="block w-6 h-0.5 rounded-full"
              style={{ backgroundColor: overHero && !menuOpen ? "#ffffff" : "#0f172a" }}
            />
          </button>

        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: menuEase } }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.25, ease: menuEase } }}
            className="fixed inset-0 z-40 md:hidden flex flex-col bg-white px-6 pt-28 pb-10"
          >
            {/* Nav links */}
            <ul className="flex flex-col flex-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.05 + i * 0.07, duration: 0.35, ease: menuEase },
                  }}
                  className="border-b border-slate-100 last:border-none"
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-5 text-2xl font-bold text-text tracking-tight hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.32, duration: 0.35, ease: menuEase } }}
              className="flex flex-col gap-3 mb-8"
            >
              <a
                href="tel:1300666701"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center bg-accent text-text font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                Call 1300 666 701
              </a>
              <a
                href="#quote"
                onClick={() => handleNavClick("#quote")}
                className="w-full text-center border border-slate-200 text-text font-semibold text-sm px-8 py-4 rounded-full hover:bg-slate-50 transition-colors duration-200"
              >
                Get a Free Quote
              </a>
            </motion.div>

            {/* Accreditation logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: menuEase } }}
              className="flex items-center gap-4 pt-6 border-t border-slate-100"
            >
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src={`${basePath}/images/aaa-logo.webp`}
                  alt="AAA Glazing Services logo"
                  fill
                  sizes="64px"
                  className="object-contain object-left"
                />
              </div>
              <div className="w-px h-10 bg-slate-200 shrink-0" />
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src={`${basePath}/images/agga.webp`}
                  alt="AGGA accreditation badge"
                  fill
                  sizes="64px"
                  className="object-contain object-left"
                />
              </div>
              <p className="text-xs text-muted leading-snug ml-1">
                AGGA Accredited<br />Since 1991
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
