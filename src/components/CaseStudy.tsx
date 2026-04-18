import { Building2, Truck, Shield, ArrowRight, Globe, Nfc, UserPlus, Mail, Database, CheckCircle2 } from 'lucide-react';

const deliverables = [
  {
    icon: Building2,
    title: 'Commercial Roadmap',
    description: (
      <>
        Built the commercial roadmap for{' '}
        <span className="text-charcoal font-medium">market entry</span> and{' '}
        <span className="text-charcoal font-medium">B2B channel acquisition</span> (
        <span className="text-charcoal font-medium">1stDibs</span>,{' '}
        <span className="text-charcoal font-medium">The Oblist</span>), while the client retained
        full autonomy over Brand Identity and Social Media execution.
      </>
    ),
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    description: (
      <>
        Built an{' '}
        <span className="text-charcoal font-medium">end-to-end supply chain</span> with
        manufacturing in <span className="text-charcoal font-medium">Italy</span> and freight lanes
        to <span className="text-charcoal font-medium">US (New York)</span> and{' '}
        <span className="text-charcoal font-medium">France (Paris)</span>.
      </>
    ),
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: (
      <>
        Professionalised the financial and legal framework with{' '}
        <span className="text-charcoal font-medium">robust contracts</span>,{' '}
        <span className="text-charcoal font-medium">insurance recovery</span>, and{' '}
        <span className="text-charcoal font-medium">automated invoicing</span>.
      </>
    ),
  },
];

const metrics = [
  { icon: Building2, value: '2',    label: 'Premium Platforms' },
  { icon: Globe,     value: '3',    label: 'International Markets' },
  { icon: Shield,    value: 'Full', label: 'Operational Autonomy' },
];

const CaseStudy = () => {
  return (
    <section id="case-study" className="bg-white py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Label + headline */}
        <div className="max-w-3xl mb-14 sm:mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase
                           text-muted-foreground border border-border rounded-full mb-8">
            Featured Case Study
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal leading-[1.1] mb-5">
            VandaVee: From Founder-Dependent<br className="hidden sm:block" />
            to Global Luxury Brand
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
            How I engineered the commercial and operational infrastructure — including a
            proprietary authentication system — to transform a hidden gem into an internationally
            recognised furniture brand.
          </p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-16 md:mb-20 max-w-2xl">
          {metrics.map((m, i) => (
            <div key={i} className="text-center bg-soft-gray rounded-2xl p-5 sm:p-6 border border-border/40">
              <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center mx-auto mb-3">
                <m.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-charcoal mb-1">{m.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-light">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Challenge → Architecture → Result */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-16 md:mb-20">
          <div className="bg-soft-gray rounded-2xl p-7 sm:p-8 border border-border/40">
            <h3 className="font-serif text-lg sm:text-xl mb-4 text-charcoal">The Challenge</h3>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              VandaVee had a high-value product but lacked the operational engine to scale. The
              business relied on{' '}
              <span className="text-charcoal font-medium">ad-hoc social media sales</span>,{' '}
              <span className="text-charcoal font-medium">undefined logistics</span>, and a
              founder-centric workflow that was{' '}
              <span className="text-charcoal font-medium">unscalable and high-risk</span>.
            </p>
          </div>

          <div className="bg-soft-gray rounded-2xl p-7 sm:p-8 border border-border/40 relative">
            <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2
                             w-6 h-6 bg-charcoal rounded-full items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl mb-4 text-charcoal">The Architecture</h3>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              As <span className="text-charcoal font-medium">Director of Operations & Growth</span>, I
              built the commercial and operational infrastructure — establishing the{' '}
              <span className="text-charcoal font-medium">systems</span>,{' '}
              <span className="text-charcoal font-medium">partnerships</span>, and{' '}
              <span className="text-charcoal font-medium">supply chains</span> needed for
              international expansion.
            </p>
          </div>

          <div className="bg-charcoal rounded-2xl p-7 sm:p-8 text-white relative">
            <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2
                             w-6 h-6 bg-accent rounded-full items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl mb-4">The Result</h3>
            <p className="text-sm sm:text-base font-light leading-relaxed opacity-90">
              A{' '}
              <span className="font-medium text-white">fully operationalised luxury brand</span> with
              secured access to the{' '}
              <span className="font-medium text-white">US and EU markets</span>, functioning{' '}
              <span className="font-medium text-white">
                independent of the founder's daily oversight
              </span>
              .
            </p>
          </div>
        </div>

        {/* ── PROPRIETARY INNOVATION: NFC + LOA ─────────────────── */}
        <div className="mb-14 sm:mb-16 md:mb-20 rounded-2xl overflow-hidden border border-charcoal/10">
          {/* Header bar */}
          <div className="bg-charcoal px-7 sm:px-10 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Nfc className="w-5 h-5 text-accent shrink-0" />
              <span className="text-xs uppercase tracking-[0.22em] text-white/60 font-light">
                Proprietary Innovation
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent/70 font-light">
              Original concept &amp; implementation — Yekta Dastranj
            </span>
          </div>

          {/* Body */}
          <div className="bg-[#0f0f0f] px-7 sm:px-10 py-8 sm:py-10">
            <h4 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light mb-4 leading-snug">
              NFC &amp; LOA — Letter of<br className="hidden sm:block" /> Authentication System
            </h4>
            <p className="text-sm sm:text-base text-white/55 font-light leading-relaxed max-w-2xl mb-10">
              An end-to-end authentication system I designed and built from scratch. Every VandaVee
              piece ships with an embedded{' '}
              <strong className="text-white/80 font-medium">NFC chip</strong>. When tapped, the chip
              opens a registration link where the client enters their details. They then receive a
              personalised{' '}
              <strong className="text-white/80 font-medium">Letter of Authentication (LOA)</strong>{' '}
              via branded email, while the record is securely stored in a{' '}
              <strong className="text-white/80 font-medium">custom backend database</strong> —
              creating a verified, traceable certificate of provenance for every piece.
            </p>

            {/* Flow diagram */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">

              {/* Step 1 */}
              <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 flex-1">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-white/60" />
                </div>
                <div className="sm:text-center">
                  <p className="text-xs font-medium text-white/80 mb-0.5">Physical LOA</p>
                  <p className="text-[11px] text-white/35 font-light leading-snug">
                    Printed document<br className="hidden sm:block" /> ships with every piece
                  </p>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-white/15 shrink-0 rotate-90 sm:rotate-0 mx-2 self-center sm:self-auto" />

              {/* Step 2 */}
              <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 flex-1">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Nfc className="w-5 h-5 text-white/60" />
                </div>
                <div className="sm:text-center">
                  <p className="text-xs font-medium text-white/80 mb-0.5">NFC Chip</p>
                  <p className="text-[11px] text-white/35 font-light leading-snug">
                    Embedded in the<br className="hidden sm:block" /> paper — scan with any phone
                  </p>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-white/15 shrink-0 rotate-90 sm:rotate-0 mx-2 self-center sm:self-auto" />

              {/* Step 3 */}
              <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 flex-1">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-white/60" />
                </div>
                <div className="sm:text-center">
                  <p className="text-xs font-medium text-white/80 mb-0.5">Backend Database</p>
                  <p className="text-[11px] text-white/35 font-light leading-snug">
                    Custom-built to store<br className="hidden sm:block" /> every registered piece
                  </p>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-white/15 shrink-0 rotate-90 sm:rotate-0 mx-2 self-center sm:self-auto" />

              {/* Step 4 */}
              <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 flex-1">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div className="sm:text-center">
                  <p className="text-xs font-medium text-accent mb-0.5">Verified Authentic</p>
                  <p className="text-[11px] text-white/35 font-light leading-snug">
                    Real-time certificate<br className="hidden sm:block" /> of provenance
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Key deliverables */}
        <div className="border-t border-border pt-12 sm:pt-14 md:pt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-10 sm:mb-12">
            Further Deliverables
          </p>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            {deliverables.map((d, i) => (
              <div key={i}>
                <div className="w-11 h-11 rounded-xl border border-charcoal/10 flex items-center justify-center mb-5 bg-soft-gray">
                  <d.icon className="w-5 h-5 text-charcoal" />
                </div>
                <h5 className="font-serif text-base sm:text-lg mb-3 text-charcoal">{d.title}</h5>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
