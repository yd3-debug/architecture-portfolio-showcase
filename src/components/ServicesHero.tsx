import { Workflow, Code2, TrendingUp, AlertCircle, ArrowRight, Star } from 'lucide-react';

const ServicesHero = () => {
  const services = [
    {
      icon: Workflow,
      pain: "Growing through referrals alone?",
      title: "Business Architecture",
      outcome: "A clear system for attracting enterprise clients — consistently",
      description: "We help you move beyond word-of-mouth by building the systems, positioning, and digital presence that make enterprise buyers come to you.",
      result: "Client secured first enterprise contract within 6 weeks"
    },
    {
      icon: Code2,
      pain: "Your website doesn't reflect your expertise?",
      title: "Web Design & Development",
      outcome: "A website that earns trust and converts enterprise visitors",
      description: "We build websites that look as good as your work is. Designed to guide high-value prospects from curiosity to conversation — fast.",
      result: "65% surge in bookings for a London beauty studio"
    },
    {
      icon: TrendingUp,
      pain: "Ready to grow but unsure where to start?",
      title: "Growth Strategy",
      outcome: "Know exactly who to target and how to reach them",
      description: "We help you define your ideal enterprise client, figure out where they are, and craft the message that gets their attention.",
      result: "3x increase in qualified leads for a B2B consultancy"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            What We Actually Do
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Three focused services designed to get you in front of enterprise clients — and help you win them
          </p>
        </div>

        {/* Services Grid */}
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
