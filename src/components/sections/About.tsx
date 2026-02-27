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

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Who We Are
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-6"
          >
            Our Story
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed mb-6"
          >
            AAA Glazing Services is a family-owned Victorian business with a simple
            standard: every job is treated with the same care and precision we&apos;d
            expect for our own homes.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed mb-8"
          >
            We deliver fast, reliable glass repairs and replacements for residential,
            commercial, and business properties across Victoria. Whether it&apos;s an
            urgent callout or a planned replacement, our experienced team arrives prepared,
            works with precision, and doesn&apos;t consider the job done until you&apos;re
            completely satisfied with the result.
          </motion.p>

          <motion.a
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            href="#quote"
            className="self-start text-primary font-semibold text-sm tracking-wide underline underline-offset-4 hover:opacity-70 transition-opacity duration-200"
          >
            Learn more about us
          </motion.a>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 mt-10 md:mt-0">
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full h-64 sm:h-80 md:h-full min-h-80 rounded-2xl overflow-hidden bg-slate-200"
          >
            {/* TODO: replace with <Image fill src="/images/about.jpg" alt="AAA Glazing team" /> */}
            <div className="w-full h-full bg-slate-200 flex items-end justify-center pb-6">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">
                Team photo — replace with about.jpg
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
