"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function smoothScrollTo(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [overHero, setOverHero] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) {
      console.warn("[Navbar] #hero element not found — IntersectionObserver not attached");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
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

  const colorTransition = "0.4s ease";

  return (
    <motion.header
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={
        overHero
          ? {
              backgroundColor: "transparent",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              borderBottom: "1px solid transparent",
              boxShadow: "none",
              transition: `background-color ${colorTransition}, box-shadow ${colorTransition}, border-color ${colorTransition}`,
            }
          : {
              backgroundColor: "rgba(248, 250, 252, 0.88)",
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
        <span
          className="font-bold text-xl tracking-tight"
          style={{
            color: overHero ? "#ffffff" : "#0f172a",
            textShadow: overHero ? "0 1px 4px rgba(0,0,0,0.4)" : "none",
            transition: `color ${colorTransition}, text-shadow ${colorTransition}`,
          }}
        >
          AAA Glazing
        </span>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => smoothScrollTo(link.href)}
                className="text-sm font-medium tracking-wide cursor-pointer"
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

        {/* CTA — always accent, never changes */}
        <a
          href="tel:1300666701"
          className="bg-accent hover:opacity-90 text-text font-semibold text-sm px-5 py-2.5 rounded-full transition-opacity duration-200"
        >
          Call 1300 666 701
        </a>

      </nav>
    </motion.header>
  );
}
