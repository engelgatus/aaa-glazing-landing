"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import basePath from "@/lib/basePath";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease },
  }),
};

const images = [
  {
    src: `${basePath}/images/about-1.webp`,
    alt: "AAA Glazing Services team at work",
  },
  {
    src: `${basePath}/images/about-2.webp`,
    alt: "AAA Glazing Services — quality glass repairs",
  },
];

const SLIDE_INTERVAL = 4500;

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 items-center">

        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-6"
          >
            Our Story
          </motion.h2>

          <motion.p
            custom={1}
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
            custom={2}
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
            custom={3}
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
            className="relative w-full h-64 sm:h-80 md:h-130 rounded-2xl overflow-hidden"
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }}
                exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
                className="absolute inset-0"
              >
                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
