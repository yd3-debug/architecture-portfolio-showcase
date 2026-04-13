import { ArrowRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Business Architecture',
    pain: 'Growing through referrals alone?',
    description:
      "I build the positioning, systems, and commercial infrastructure that make enterprise buyers come to you — consistently. Not tactics. Architecture.",
    result: 'Client secured first enterprise contract within 6 weeks',
  },
  {
    number: '02',
    title: 'Web Design & Development',
    pain: "Website doesn't reflect your expertise?",
    description:
      "Mobile-first, SEO-optimised websites built to earn trust and convert high-value visitors into booked conversations. Custom — no templates.",
    result: '+65% increase in bookings within 3 months',
  },
  {
    number: '03',
    title: 'Growth Strategy',
    pain: 'Ready to scale but unsure where to start?',
    description:
      "A clear, actionable plan: who your ideal enterprise buyer is, where they search, and the exact message that gets their attention and starts a conversation.",
    result: '3× increase in qualified inbound leads',
  },
];

const ServicesHero = () => {
  return (
    <section id="services" className="bg-white py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 font-light">
              What I Do
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal leading-[1.05]">
              Three ways I help<br />
              <span className="text-muted-foreground">businesses reach scale</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-light text-muted-foreground
                       hover:text-charcoal transition-colors group shrink-0"
          >
            Discuss your situation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Service rows — editorial horizontal layout */}
        <div className="divide-y divide-border/50">
          {services.map((s) => (
            <div
              key={s.number}
              className="group grid grid-cols-1 md:grid-cols-[4rem_1fr_1.2fr] gap-4 md:gap-8 lg:gap-10
                         py-8 sm:py-10 hover:bg-soft-gray/50 -mx-4 px-4 sm:-mx-6 sm:px-6
                         transition-colors duration-300 rounded-xl cursor-default"
            >
              {/* Number */}
              <div className="hidden md:flex items-start pt-1">
                <span className="font-serif text-4xl text-charcoal/10 group-hover:text-accent/20
                                 transition-colors font-light leading-none">
                  {s.number}
                </span>
              </div>

              {/* Left: title + pain */}
              <div className="flex flex-col justify-start gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-base text-charcoal/20 font-light md:hidden">{s.number}</span>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal font-light">
                    {s.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground/60 font-light italic">{s.pain}</p>
              </div>

              {/* Right: description + result */}
              <div className="flex flex-col justify-start gap-5">
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {s.description}
                </p>
                <div className="flex items-start gap-2.5 p-3.5 bg-white border border-border/40
                                rounded-lg group-hover:border-accent/20 transition-colors">
                  <span className="text-accent text-xs mt-px shrink-0">✓</span>
                  <span className="text-xs sm:text-sm text-charcoal font-light">{s.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-border/40 flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-5">
          <p className="font-serif text-xl sm:text-2xl text-charcoal font-light">
            Not sure which fits? Let's figure it out together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium
                       text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg shrink-0"
          >
            Book a Strategy Session
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesHero;
