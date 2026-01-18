import { Workflow, Code2, Palette } from 'lucide-react';

const ServicesHero = () => {
  const services = [
    {
      icon: Workflow,
      title: "Business Architecture",
      description: "Structure your business for success with strategic frameworks, process optimization, and operational excellence tailored to your market."
    },
    {
      icon: Code2,
      title: "Web Design & Development",
      description: "Professional websites that represent your brand, engage your audience, and convert visitors into loyal customers."
    },
    {
      icon: Palette,
      title: "Growth Strategy",
      description: "Strategic guidance to position your business correctly in your market, identify opportunities, and drive sustainable growth."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 md:mb-24">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Comprehensive solutions that transform how businesses operate and grow
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:border-accent transition-all">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-charcoal group-hover:text-accent transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 text-charcoal">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-24">
          <a href="#contact">
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300">
              Discuss Your Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
