"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

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

  return (
    <motion.header
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <span className="text-surface font-bold text-xl tracking-tight drop-shadow">
          AAA Glazing
        </span>

        {/* CTA */}
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
