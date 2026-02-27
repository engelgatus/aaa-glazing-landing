"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

const services = [
  {
    index: "01",
    title: "Residential Glass Services",
    description:
      "Be it windows, doors, shower screens, mirrors, splashbacks, or balustrades, our expert glass repairs and replacement team can handle all residential glass work with care, precision, and respect for your home.",
  },
  {
    index: "02",
    title: "Emergency Glass Repairs",
    description:
      "Available 24 hours a day, 7 days a week. If you have a smashed or broken glass emergency, call us immediately on 1300 666 701, and we'll secure and restore your property fast.",
    cta: { label: "Call 1300 666 701", href: "tel:1300666701" },
  },
  {
    index: "03",
    title: "Commercial Glass Services",
    description:
      "From office fit-outs to retail shopfronts and large-scale developments, we deliver reliable, precise commercial glass repair, replacement, and installation tailored to your business needs and timeline.",
  },
  {
    index: "04",
    title: "Insurance Claims Assistance",
    description:
      "We manage the entire insurance claims process from start to finish, liaising directly with your insurer so you don't have to deal with the paperwork and back-and-forth.",
  },
];

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (index: string) => {
    setOpen((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="bg-surface py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 md:gap-8 items-start">

        {/* Left — sticky heading */}
        <div className="col-span-12 md:col-span-4">
          <div className="md:sticky md:top-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight tracking-tight mb-5">
                Expert service for every property type
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                From a single cracked window to a full commercial fit-out, we
                have the experience and equipment to handle it all across
                Victoria.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right — accordion list */}
        <div className="col-span-12 md:col-span-7 md:col-start-6 border-t border-slate-200">
          {services.map((service, i) => {
            const isOpen = open === service.index;

            return (
              <motion.div
                key={service.index}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-b border-slate-200"
              >
                <button
                  onClick={() => toggle(service.index)}
                  className="w-full flex items-center gap-6 sm:gap-10 py-6 sm:py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs font-bold text-slate-300 tracking-widest w-6 shrink-0 group-hover:text-primary transition-colors duration-300">
                    {service.index}
                  </span>

                  <span
                    className={`flex-1 text-lg sm:text-xl font-bold leading-snug tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-text group-hover:text-primary"
                    }`}
                  >
                    {service.title}
                  </span>

                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-primary bg-primary rotate-45"
                        : "border-slate-200 group-hover:border-primary"
                    }`}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-slate-400 group-hover:text-primary"
                      }`}
                    >
                      <path
                        d="M5 1V9M1 5H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { duration: 0.35, ease } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.25, ease } }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 sm:pl-20 pb-7 flex flex-col gap-4">
                        <p className="text-muted text-sm sm:text-base leading-relaxed">
                          {service.description}
                        </p>
                        {service.cta && (
                          <a
                            href={service.cta.href}
                            className="self-start bg-primary text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
                          >
                            {service.cta.label}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
