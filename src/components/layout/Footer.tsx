import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Get a Quote", href: "#quote" },
];

export default function Footer() {
  return (
    <footer className="bg-text py-12 sm:py-16 px-6 overflow-x-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">

        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 mb-8 md:mb-0">
          <span className="text-white font-bold text-xl tracking-tight">
            AAA Glazing Services
          </span>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Victoria&apos;s trusted glass repair specialists since 1991. Fast, reliable,
            and fully insured.
          </p>
          <a
            href="tel:1300666701"
            className="self-start bg-accent text-text font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Call 1300 666 701
          </a>
        </div>

        <div className="col-span-6 md:col-span-2 md:col-start-7 flex flex-col gap-3">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
            Navigation
          </p>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/60 text-sm hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="col-span-6 md:col-span-3 md:col-start-10 flex flex-col gap-3">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
            Contact
          </p>
          <a
            href="tel:1300666701"
            className="text-white/60 text-sm hover:text-white transition-colors duration-200"
          >
            1300 666 701
          </a>
          <a
            href="mailto:info@aaaglazingservices.com.au"
            className="text-white/60 text-sm hover:text-white transition-colors duration-200"
          >
            info@aaaglazingservices.com.au
          </a>
          <p className="text-white/60 text-sm leading-relaxed">
            Melbourne &amp; Victoria, Australia
          </p>
        </div>

        <div className="col-span-12 border-t border-white/10 pt-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} AAA Glazing Services. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            AGGA Accredited &middot; $20M Public Liability Insured
          </p>
        </div>

      </div>
    </footer>
  );
}
