"use client";

import { motion } from "framer-motion";
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

const services = [
  "Glass Replacement",
  "Emergency Repair",
  "Commercial",
  "Residential",
  "Insurance Claim",
  "Other",
];

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const empty: FormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to API route or form service (e.g. Formspree, Resend)
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-surface py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-5 flex flex-col justify-center mb-10 md:mb-0">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight mb-6"
          >
            Request a free quote. We&apos;ll get back to you fast.
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed mb-6"
          >
            Complete the form and one of our friendly team members will be in touch
            promptly.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-muted text-sm leading-relaxed"
          >
            Prefer to talk? Call us directly on{" "}
            <a
              href="tel:1300666701"
              className="text-primary font-semibold hover:opacity-70 transition-opacity duration-200"
            >
              1300 666 701
            </a>
            .
          </motion.p>
        </div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="col-span-12 md:col-span-6 md:col-start-7"
        >
          {submitted ? (
            <div className="bg-white border border-slate-100 rounded-2xl p-8 sm:p-10 flex flex-col gap-4">
              <p className="text-text font-bold text-xl leading-snug">
                Thanks for reaching out!
              </p>
              <p className="text-muted text-base leading-relaxed">
                A member of the AAA Glass team will contact you shortly. For urgent or
                emergency glass repairs, please call us directly on{" "}
                <a
                  href="tel:1300666701"
                  className="text-primary font-semibold hover:opacity-70 transition-opacity duration-200"
                >
                  1300 666 701
                </a>
                — we&apos;re available 24/7.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-100 rounded-2xl p-8 sm:p-10 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-text text-xs font-semibold uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="bg-surface border border-slate-200 rounded-xl px-4 py-3 text-text text-sm outline-none focus:border-primary transition-colors duration-200"
                    placeholder="Jane"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-text text-xs font-semibold uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="bg-surface border border-slate-200 rounded-xl px-4 py-3 text-text text-sm outline-none focus:border-primary transition-colors duration-200"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-text text-xs font-semibold uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-surface border border-slate-200 rounded-xl px-4 py-3 text-text text-sm outline-none focus:border-primary transition-colors duration-200"
                  placeholder="04XX XXX XXX"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-text text-xs font-semibold uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="bg-surface border border-slate-200 rounded-xl px-4 py-3 text-text text-sm outline-none focus:border-primary transition-colors duration-200"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-text text-xs font-semibold uppercase tracking-wide">
                  Service Required
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="bg-surface border border-slate-200 rounded-xl px-4 py-3 text-text text-sm outline-none focus:border-primary transition-colors duration-200"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-text text-xs font-semibold uppercase tracking-wide">
                  Message / Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="bg-surface border border-slate-200 rounded-xl px-4 py-3 text-text text-sm outline-none focus:border-primary transition-colors duration-200 resize-none"
                  placeholder="Tell us about the damage and your location..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-200 mt-1"
              >
                Send My Enquiry
              </button>

              <p className="text-muted text-xs leading-relaxed">
                Your privacy matters to us. All details you provide are kept strictly
                confidential and never shared with third parties. We only use your
                information to respond to your enquiry.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
