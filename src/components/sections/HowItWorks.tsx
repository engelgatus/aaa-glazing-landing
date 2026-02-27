"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
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
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 md:gap-8">

        {/* Left — vertical step list */}
        <div className="col-span-12 md:col-span-7 md:col-start-1 relative order-last md:order-first">

          {/* Connector line */}
          <div className="absolute left-4.75 top-5 bottom-5 w-px bg-slate-100 hidden sm:block" />

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0 group"
              >
                {/* Encircled dot */}
                <div className="relative z-10 shrink-0 w-10 h-10 rounded-full border-2 border-slate-200 bg-white group-hover:border-primary group-hover:bg-primary transition-colors duration-300 flex items-center justify-center mt-1">
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors duration-300 tracking-wider">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-text font-bold text-lg sm:text-xl leading-snug mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — sticky heading, pinned for full step list height */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 order-first md:order-last">
          <div className="md:sticky md:top-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight tracking-tight mb-5">
                Getting your glass fixed has never been this easy
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                We&apos;ve made the process as simple and stress-free as possible,
                from your first call to the finished job.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
