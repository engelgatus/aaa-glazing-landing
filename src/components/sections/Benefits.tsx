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

const benefits = [
  {
    title: "Fast response when it matters most",
    description:
      "Same-day service available for most residential and emergency glass repairs across Melbourne and Victoria.",
  },
  {
    title: "Complete peace of mind",
    description:
      "AGGA accredited and fully insured with $20M public liability, so you're protected from start to finish.",
  },
  {
    title: "Proven trust since 1991",
    description:
      "Family owned and operated, with a reputation built on quality, not shortcuts.",
  },
  {
    title: "Trusted by Victoria's leading property groups",
    description:
      "Including Westfield, Mirvac, CBRE and Johns Lyng Group.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-8 mb-2">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Fast, Reliable &amp; AGGA Accredited
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-6"
          >
            When it has to be fixed today, we&apos;re the team to call
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            Booking AAA Glazing Services means more than just a repair — it means:
          </motion.p>
        </div>

        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 md:mt-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={3 + i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-surface border border-slate-100 rounded-2xl p-6 sm:p-7"
            >
              <h3 className="text-text font-semibold text-base mb-2 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
