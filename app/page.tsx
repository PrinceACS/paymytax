// app/page.tsx
import { Layout } from "@/components/ui/root-layout";
import { HeroSection } from "@/components/hero-section";
import { ServiceOverviewSection } from "@/components/services-overview";
import { TestimonialsSection } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { WhyChooseSection } from "@/components/why-choose";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServiceOverviewSection />
      <WhyChooseSection />
      {/* <ServicesSection /> */}
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <ContactForm />
    </Layout>
  );
}
