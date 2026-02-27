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

const steps = [
  {
    number: "01",
    title: "Call or Submit an Enquiry",
    description:
      "Contact us on 1300 666 701 or fill in our quick enquiry form. Tell us what's happened and where you're located, and we'll respond promptly.",
  },
  {
    number: "02",
    title: "Get a Fast, Transparent Quote",
    description:
      "We assess the job and provide a clear, upfront quote with no hidden fees. For emergencies, we can often give you a quote over the phone.",
  },
  {
    number: "03",
    title: "We Come to You",
    description:
      "Our AGGA-accredited professional glaziers are dispatched to your location across Melbourne and regional Victoria. Same-day service is available for most standard jobs.",
  },
  {
    number: "04",
    title: "Job Done Right, Guaranteed",
    description:
      "We complete the repair or replacement to the highest quality standard, clean up after ourselves, and back every job with our 100% workmanship guarantee.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6">
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
            Our Process
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-4"
          >
            Getting your glass fixed has never been this easy
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            We&apos;ve made the process as simple and stress-free as possible, from your
            first call to the finished job.
          </motion.p>
        </div>

        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={3 + i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-surface border border-slate-100 rounded-2xl p-6 sm:p-7 flex flex-col gap-4"
            >
              <span className="text-4xl font-bold text-slate-100 leading-none tracking-tight">
                {step.number}
              </span>
              <h3 className="text-text font-semibold text-base leading-snug">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
