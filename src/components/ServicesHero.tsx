import { Workflow, Code2, TrendingUp, AlertCircle, ArrowRight, Star } from 'lucide-react';

const ServicesHero = () => {
  const services = [
    {
      icon: Workflow,
      pain: "Over-reliance on referrals limiting your scalability?",
      title: "Business Architecture",
      outcome: "Engineering scalable growth ecosystems for enterprise acquisition",
      description: "We transcend reactive growth, establishing resilient operational systems, a commanding digital presence, and incisive market positioning—ensuring your organization is strategically compelling to high-value enterprise clients.",
      result: "Client secured inaugural enterprise contract within 6 weeks"
    },
    {
      icon: Code2,
      pain: "Your digital presence doesn't reflect your expertise?",
      title: "Web Design & Development",
      outcome: "Your high-performance digital gateway to enterprise clients",
      description: "Enterprise-grade digital infrastructure and client-facing platforms optimized for intuitive user experience, robust trust-building, and superior conversion efficiency—guiding high-value prospects through their decision journey.",
      result: "65% surge in bookings for a London beauty studio"
    },
    {
      icon: TrendingUp,
      pain: "Ready to grow but unsure how to reach enterprise clients?",
      title: "Growth Strategy",
      outcome: "Precision targeting for high-value client acquisition",
      description: "We precisely delineate who constitutes your ideal enterprise client, where to engage them, what compelling value proposition resonates most profoundly, and how to establish market dominance within your specialized niche.",
      result: "3x increase in qualified leads for a B2B consultancy"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Strategic Imperatives
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Engineered for enterprise acquisition and retention—meticulously crafted to dismantle growth inhibitors and forge robust, predictable pathways to enterprise success
          </p>
        </div>

        {/* Services Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-soft-gray p-6 sm:p-8 transition-all duration-300 hover:bg-charcoal rounded-xl"
            >
              {/* Pain Point Tag */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <AlertCircle className="w-4 h-4 text-destructive group-hover:text-accent transition-colors" />
                <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-white/60 transition-colors font-light">
                  {service.pain}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-white flex items-center justify-center group-hover:bg-accent transition-all">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white transition-colors" />
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-xl sm:text-2xl mb-2 sm:mb-3 text-charcoal group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-4 sm:mb-6 group-hover:text-white/70 transition-colors">
                {service.description}
              </p>

              {/* Real Result Badge */}
              <div className="flex items-start gap-2 mb-4 sm:mb-6 p-3 bg-white/50 group-hover:bg-white/10 rounded-lg transition-colors">
                <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-charcoal group-hover:text-white/90 transition-colors">
                  {service.result}
                </span>
              </div>

              {/* Outcome */}
              <div className="pt-4 sm:pt-6 border-t border-border group-hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-charcoal group-hover:text-white transition-colors">
                    {service.outcome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <a href="#contact">
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg">
              Schedule Discovery Session
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
