"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState, useCallback } from "react";
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

function RevealSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - left) / width) * 100, 0), 100);
    setPosition(pct);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      <Image
        src={`${basePath}/images/after.webp`}
        alt="After — professionally repaired window by AAA Glazing Services"
        fill
        sizes="(max-width: 768px) 100vw, 90vw"
        quality={85}
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={`${basePath}/images/before.webp`}
          alt="Before — shattered residential window prior to repair"
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
          quality={85}
          className="object-cover object-center"
        />
      </div>

      <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
        Before
      </span>
      <span className="absolute top-4 right-4 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
        After
      </span>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 cursor-col-resize"
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={() => { dragging.current = true; }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <span className="text-slate-400 text-xs font-bold tracking-tighter">&#8596;</span>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-8 mb-10 md:mb-12">

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-4"
          >
            Our work in action
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            Drag the slider to see the difference our team makes.
          </motion.p>
        </div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="col-span-12"
        >
          <RevealSlider />
        </motion.div>

      </div>
    </section>
  );
}
