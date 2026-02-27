"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const stats = [
  { number: "35+", label: "Years of Experience" },
  { number: "24/7", label: "Emergency Service" },
  { number: "$20M", label: "Public Liability Cover" },
  { number: "100%", label: "Workmanship Guarantee" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="images/hero.webp"
          alt="AAA Glazing Services — professional glazier at work"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/40 to-black/75" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 justify-center px-6 pt-28">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-1 flex flex-col items-start text-left">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-5"
            >
              Trusted Since 1991 &nbsp;&middot;&nbsp; AGGA Accredited
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl! font-bold text-white leading-[1.05] tracking-tight mb-5"
            >
              Glass Repairs Melbourne
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/90 font-medium mb-3 max-w-2xl"
            >
              The fastest, most reliable glass repair service in Melbourne and across Victoria.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed mb-10"
            >
              Trusted for over 35 years, AAA Glazing Services protects Victorian homes and
              businesses with fast, expert glass repairs and 24/7 emergency service, restoring
              safety and peace of mind every time.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <a
                href="#quote"
                className="bg-accent text-text font-bold px-8 py-4 rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:1300666701"
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
              >
                Call 1300 666 701
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-4">
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12 md:col-span-7 md:col-start-1 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl overflow-hidden"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center py-4 sm:py-5 px-3 sm:px-4"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {stat.number}
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/55 mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
