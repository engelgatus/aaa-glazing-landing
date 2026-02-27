"use client";

import { useState, useEffect, useCallback } from "react";
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

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease },
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

const AUTO_INTERVAL = 4000;
const RESUME_DELAY = 5000;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-accent text-base leading-none">&#9733;</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
    setPaused(true);
  };

  useEffect(() => {
    if (paused) {
      const resume = setTimeout(() => setPaused(false), RESUME_DELAY);
      return () => clearTimeout(resume);
    }
  }, [paused]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, advance]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="bg-surface py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 items-center">

        <div className="col-span-12 md:col-span-5">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-6"
          >
            What it&apos;s like to work with us
          </motion.h2>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            Don&apos;t just take our word for it. Hear from the homeowners,
            businesses, and property managers we&apos;ve served.
          </motion.p>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-6">

          <div className="relative overflow-hidden h-60 sm:h-55">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col"
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
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-primary w-6 h-2.5"
                    : "bg-slate-300 hover:bg-slate-400 w-2.5 h-2.5"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
