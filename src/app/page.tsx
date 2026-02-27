import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Pain from "@/components/sections/Pain";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import LeadForm from "@/components/sections/LeadForm";
import FAQs from "@/components/sections/FAQs";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pain />
        <About />
        <Testimonials />
        <HowItWorks />
        <Services />
        <BeforeAfter />
        <LeadForm />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
