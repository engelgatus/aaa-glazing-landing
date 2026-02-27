"use client";

import { motion } from "framer-motion";
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

const services = [
  {
    title: "Residential Glass Services",
    description:
      "Be it windows, doors, shower screens, mirrors, splashbacks, or balustrades, our expert glass repairs and replacement team can handle all residential glass work with care, precision, and respect for your home.",
  },
  {
    title: "Emergency Glass Repairs",
    description:
      "Available 24 hours a day, 7 days a week. If you have a smashed or broken glass emergency, call us immediately on 1300 666 701, and we'll secure and restore your property fast.",
    highlight: true,
  },
  {
    title: "Commercial Glass Services",
    description:
      "From office fit-outs to retail shopfronts and large-scale developments, we deliver reliable, precise commercial glass repair, replacement, and installation tailored to your business needs and timeline.",
  },
  {
    title: "Insurance Claims Assistance",
    description:
      "We manage the entire insurance claims process from start to finish, liaising directly with your insurer so you don't have to deal with the paperwork and back-and-forth.",
  },
];

export default function Services() {
  return (
    <section className="bg-surface py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-8 mb-10 md:mb-12">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            What We Do
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-4"
          >
            Expert service for every property type
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            From a single cracked window to a full commercial fit-out, we have the
            experience and equipment to handle it all across Victoria.
          </motion.p>
        </div>

        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={3 + i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col gap-3 ${
                service.highlight
                  ? "bg-primary border border-primary"
                  : "bg-white border border-slate-100"
              }`}
            >
              <h3
                className={`font-semibold text-base sm:text-lg leading-snug ${
                  service.highlight ? "text-white" : "text-text"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  service.highlight ? "text-white/75" : "text-muted"
                }`}
              >
                {service.description}
              </p>
              {service.highlight && (
                <a
                  href="tel:1300666701"
                  className="mt-2 self-start bg-accent text-text font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  Call 1300 666 701
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
