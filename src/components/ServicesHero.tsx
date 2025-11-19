import { Workflow, Code2, Palette } from 'lucide-react';

const ServicesHero = () => {
  const services = [
    {
      icon: Workflow,
      title: "Business Automation",
      description: "Streamline operations and eliminate repetitive tasks with intelligent workflow solutions designed for your unique processes."
    },
    {
      icon: Code2,
      title: "Custom Applications",
      description: "Bespoke software solutions built with precision to solve specific business challenges and drive measurable results."
    },
    {
      icon: Palette,
      title: "Digital Experiences",
      description: "Elegant websites and interfaces that capture attention, communicate value, and convert visitors into customers."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-professional max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-charcoal">
            Services
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Comprehensive solutions that transform how businesses operate and grow
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:border-accent transition-all">
                <service.icon className="w-9 h-9 text-charcoal group-hover:text-accent transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl mb-4 text-charcoal">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a href="#contact">
            <button className="px-8 py-3 text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300">
              Discuss Your Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
