"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease },
  }),
};

const faqs = [
  {
    question: "How quickly can you respond to an emergency glass repair?",
    answer:
      "Our emergency glaziers are available 24/7 and can typically respond within 1–2 hours across metropolitan Melbourne. For regional Victoria, response times may vary depending on your location — call us on 1300 666 701 for an immediate ETA.",
  },
  {
    question: "Are your glaziers licensed and insured?",
    answer:
      "Yes. All AAA Glass glaziers are fully trained, AGGA accredited, and backed by $20M public liability insurance. Every job also comes with a 100% workmanship guarantee.",
  },
  {
    question: "Should you repair or replace your broken window?",
    answer:
      "Small chips and cracks can sometimes be repaired, but larger cracks, shattered panes, or broken frames usually need a full replacement. For double-glazed windows, foggy panels between the layers are a sign replacement is better. Think about safety, energy efficiency, and appearance — if the glass feels loose, drafts are coming through, or it keeps breaking, replacement is safer and smarter.",
  },
  {
    question: "Can double-glazed windows be repaired?",
    answer:
      "Double-glazed windows are a bit trickier than single panes. Small cracks might be repairable, but if the glass is foggy or the seal is broken, replacement is usually needed. Once the seal fails, the insulating effect is lost — fixing or replacing it ensures your home stays warm, quiet, and energy-efficient.",
  },
  {
    question: "How much do glass repairs in Melbourne cost?",
    answer:
      "Pricing depends on the type of glass, size, and complexity of the job. We provide transparent, upfront quotes with no hidden fees. Contact us today via the form above or call 1300 666 701 for a fast, obligation-free quote.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={2 + index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="border-b border-slate-100 last:border-none"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-text font-semibold text-sm sm:text-base leading-snug group-hover:text-primary transition-colors duration-200">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            open
              ? "border-primary bg-primary rotate-45"
              : "border-slate-200 group-hover:border-primary"
          }`}
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-colors duration-300 ${
              open ? "text-white" : "text-slate-400 group-hover:text-primary"
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
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm sm:text-base leading-relaxed pb-5 pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQs() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        <motion.h2
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight text-center mb-12"
        >
          Frequently asked questions about glass repairs in Melbourne and across Victoria
        </motion.h2>

        <div className="w-full bg-surface rounded-2xl px-6 sm:px-8 divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
