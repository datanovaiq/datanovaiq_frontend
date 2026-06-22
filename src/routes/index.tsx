import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/datanova/Hero";
import {
  DataChaos, IntelligenceLayer, Capabilities, IntelligencePipeline,
  Industries, Integrations, DemoVideoBanner, Pricing, Testimonials, FAQSection, ContactSection
} from "@/components/datanova/Sections";
import { FinalCTA } from "@/components/datanova/Chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DatanovaIQ — Intelligent Data Platform for Enterprise AI" },
      { name: "description", content: "Connect fragmented enterprise systems, activate AI-driven analytics, and transform data into real-time decision intelligence." },
      { property: "og:title", content: "DatanovaIQ — Enterprise AI & Decision Intelligence" },
      { property: "og:description", content: "The intelligent data platform powering AI analytics, automation and predictive systems for enterprise." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <DataChaos />
      <IntelligenceLayer />
      <section id="capabilities"><Capabilities /></section>
      <IntelligencePipeline />
      <Industries />
      <Integrations />
      <DemoVideoBanner />
      <Pricing />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
