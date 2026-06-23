import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/datanova/primitives";

export const Route = createFileRoute("/product")({
  component: ProductPage,
});

export default function ProductPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* HERO */}
        <section className="relative pt-8 pb-12">
          <Reveal>
            <div className="rounded-[2rem] p-10 bg-card border border-border/40 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
                <div className="flex-1">
                  <SectionLabel>Product</SectionLabel>
                  <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                    NovaIQ — Enterprise Decision Intelligence
                  </h1>
                  <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
                    Turn fragmented enterprise systems into a single fabric of real-time intelligence. NovaIQ combines automated data ingestion, GPU-accelerated analytics, and explainable AI to predict outcomes and recommend actions your teams can trust.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://app.DatanovaIQ.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-primary text-primary-foreground font-semibold shadow-[0_12px_32px_-8px_rgba(245,165,36,0.6)] transition hover:scale-[1.02]"
                    >
                      Try NovaIQ — Live App
                    </a>
                    <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-accent text-foreground font-medium">
                      How it works
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-1/3">
                  <div className="rounded-xl overflow-hidden bg-gradient-to-br from-primary/6 to-transparent p-6 border border-border">
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Key outcomes</div>
                    <ul className="mt-4 space-y-3 text-foreground">
                      <li>Unify siloed ERP, CRM, and warehouse data in real time.</li>
                      <li>Auto-detect anomalies and trigger decision workflows.</li>
                      <li>Generate leader-ready summaries and recommended actions.</li>
                      <li>Deploy low-latency models at scale with production-grade serving.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="section-pad">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <Reveal>
              <div>
                <SectionLabel>Overview</SectionLabel>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Designed for enterprise scale — simple to use</h2>
                <p className="mt-4 text-muted-foreground max-w-prose">
                  NovaIQ is built for organizations that operate complex technology stacks. We handle high-velocity streams and batch data, reduce time-to-insight from days to minutes, and provide decision intelligence that business leaders can act on confidently.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl p-5 bg-card border border-border">
                    <div className="font-semibold">Pipeline Visibility</div>
                    <div className="mt-2 text-muted-foreground">Real-time observability for data health, latency, and transformation success.</div>
                  </div>
                  <div className="rounded-xl p-5 bg-card border border-border">
                    <div className="font-semibold">Predictive Intelligence</div>
                    <div className="mt-2 text-muted-foreground">GPU-accelerated models that forecast churn, demand, and operational risk.</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[1.25rem] h-full bg-card border border-border p-6 flex items-center justify-center">
                <div className="text-center text-muted-foreground">Illustration / media placeholder</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="section-pad">
          <Reveal>
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">How NovaIQ powers decisions</h2>
          </Reveal>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <Reveal>
              <div className="rounded-xl p-6 bg-card border border-border">
                <div className="font-semibold">Ingest</div>
                <p className="mt-2 text-muted-foreground">Connectors collect data from ERP, CRM, warehouses, event streams, and third-party services with schema-aware ETL and enrichment.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-xl p-6 bg-card border border-border">
                <div className="font-semibold">Analyze</div>
                <p className="mt-2 text-muted-foreground">GPU-accelerated analytics produce feature-rich datasets and detection models for near real-time scoring.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-xl p-6 bg-card border border-border">
                <div className="font-semibold">Act</div>
                <p className="mt-2 text-muted-foreground">Automated decision workflows trigger actions, alerts, and human-in-the-loop approvals based on scored signals.</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-8">
            <Reveal>
              <div className="rounded-xl p-6 bg-surface border border-border">
                <div className="font-semibold">Selected platform building blocks (scannable)</div>
                <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
                  <li><strong>RAPIDS:</strong> GPU-accelerated ETL and ML for fast data fabric creation.</li>
                  <li><strong>Morpheus:</strong> Low-latency streaming and model scoring for real-time anomaly detection.</li>
                  <li><strong>NeMo:</strong> Fine-tuned LLMs for enterprise reasoning, query translation, and suggested actions.</li>
                  <li><strong>Triton + TensorRT:</strong> Production model serving and runtime optimization for low-latency inference.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section-pad bg-background">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <SectionLabel>Features</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Product highlights that matter</h2>
              <p className="mt-4 text-muted-foreground">Everything teams need to move from insight to action.</p>
            </Reveal>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Reveal>
              <div className="rounded-xl p-6 bg-card border border-border">
                <div className="font-semibold">Unified Connectors</div>
                <p className="mt-2 text-muted-foreground">150+ native connectors with schema mapping and incremental syncs.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-xl p-6 bg-card border border-border">
                <div className="font-semibold">Explainable Models</div>
                <p className="mt-2 text-muted-foreground">Model outputs include feature-level attributions and plain-language summaries for leaders.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-xl p-6 bg-card border border-border">
                <div className="font-semibold">Decision Automation</div>
                <p className="mt-2 text-muted-foreground">Trigger workflows, notifications, and integrations when signals cross thresholds.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECURITY & CTA */}
        <section id="security" className="section-pad">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div>
                <SectionLabel>Security</SectionLabel>
                <h3 className="mt-4 text-2xl font-bold">Enterprise-grade controls and compliance</h3>
                <p className="mt-3 text-muted-foreground">SOC2 Type II posture, encryption at rest and in transit, VPC peering, and flexible BYOK options. Role-based access and audit logs keep your data governance intact.</p>

                <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                  <li>Encryption: TLS and customer-managed keys</li>
                  <li>Access: RBAC, SSO (SAML/OIDC), and fine-grained permissions</li>
                  <li>Compliance: HIPAA & SOC2 readiness</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-xl p-6 bg-card border border-border flex flex-col justify-between">
                <div>
                  <div className="font-semibold">Ready to see NovaIQ in action?</div>
                  <div className="mt-3 text-muted-foreground">Start a live session with your data or explore the demo environment.</div>
                </div>

                <div className="mt-6">
                  <a href="https://app.DatanovaIQ.com" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg">
                    Launch NovaIQ
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </div>
  );
}
