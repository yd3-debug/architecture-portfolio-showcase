import { Workflow, Code2, TrendingUp, Settings, AlertCircle, ArrowRight } from 'lucide-react';

const ServicesHero = () => {
  const services = [
    {
      icon: Workflow,
      pain: "Great product but still a hidden gem?",
      title: "Business Architecture",
      outcome: "Visibility that attracts the clients who need you",
      description: "We help established businesses move beyond word of mouth—building systems, online presence, and positioning to get found by bigger clients."
    },
    {
      icon: Settings,
      pain: "Drowning in logistics, vendors, and daily fires?",
      title: "Operations Management",
      outcome: "Operations that run smoothly without your constant attention",
      description: "We handle supplier negotiations, inventory management, shipping logistics, and vendor relationships. You focus on sales and growth."
    },
    {
      icon: Code2,
      pain: "Losing customers to competitors with better websites?",
      title: "Web Design & Development",
      outcome: "A website that converts visitors into paying customers",
      description: "Modern, fast-loading websites designed to rank on Google and turn browsers into buyers. Custom designs—no templates."
    },
    {
      icon: TrendingUp,
      pain: "Know you could grow, but don't know where to start?",
      title: "Growth Strategy",
      outcome: "A clear action plan to get more customers",
      description: "We show you who to target, where to find them, what to say, and how to stand out in a crowded market."
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            How We Help You Succeed
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Every service is designed around solving real business challenges
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
              Discuss Your Challenges
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
