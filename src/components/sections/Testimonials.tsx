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

const testimonials = [
  {
    name: "Sarah M.",
    title: "Homeowner, Melbourne",
    quote:
      "AAA Glazing were out within two hours of my call. Professional, fast, and left the place spotless. Couldn't recommend them more highly.",
    rating: 5,
  },
  {
    name: "David R.",
    title: "Property Manager, CBRE",
    quote:
      "We've used AAA Glazing across multiple commercial sites. Their response time and quality of work is consistently excellent.",
    rating: 5,
  },
  {
    name: "Karen T.",
    title: "Business Owner, Richmond",
    quote:
      "Had a shopfront smashed overnight. AAA Glazing handled everything including the insurance claim. Stress-free from start to finish.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-accent text-base">&#9733;</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
            Customer Reviews
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-4"
          >
            What it&apos;s like to work with us
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            Don&apos;t just take our word for it. Hear from the homeowners, businesses,
            and property managers we&apos;ve served.
          </motion.p>
        </div>

        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={3 + i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 flex flex-col"
            >
              <StarRating rating={t.rating} />
              <p className="text-text text-sm sm:text-base leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-text font-semibold text-sm">{t.name}</p>
                <p className="text-muted text-xs mt-0.5">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
