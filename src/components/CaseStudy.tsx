import { Building2, Truck, Shield, ArrowRight, Globe } from 'lucide-react';

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
            How I engineered the commercial and operational infrastructure to transform a hidden gem
            into an internationally recognised furniture brand.
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
          {/* Challenge */}
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

          {/* Architecture */}
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

          {/* Result */}
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

        {/* Key deliverables */}
        <div className="border-t border-border pt-12 sm:pt-14 md:pt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-10 sm:mb-12">
            Key Deliverables
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
