"use client";

import Image from "next/image";
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

export default function Pain() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-6 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="images/pain.jpg"
          alt="Broken glass — AAA Glazing Services emergency repair"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-8 md:col-start-3">

          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8"
          >
            Broken glass isn&apos;t a problem.
            <br /> It&apos;s our expertise.
          </motion.h2>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-5 mb-10"
          >
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Broken windows or cracked shower screens aren&apos;t just cosmetic damage. It
              leaves your residential or commercial premises exposed.
            </p>
            <p className="text-white font-medium text-base sm:text-lg leading-relaxed">
              To weather. To theft. To injury.
            </p>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Every hour it stays broken increases the risk to your family, your staff, and
              your customers.
            </p>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              And when you&apos;re already dealing with the stress, the last thing you need
              is a glazier in Melbourne who shows up late, cuts corners, or hands you a bill
              packed with surprises. Delays, no-shows, and poor workmanship turn a bad
              situation into a nightmare.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="border-l-4 border-accent pl-6 py-1"
          >
            <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
              That&apos;s why AAA Glazing Services has been Victoria&apos;s leading glaziers
              since 1991, delivering rapid response, clear upfront pricing, and glass
              replacement and repairs done right the first time, every time.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
