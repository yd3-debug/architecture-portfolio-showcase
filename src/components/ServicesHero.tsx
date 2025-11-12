import { Workflow, Code2, Palette, Building2, ArrowRight } from 'lucide-react';
import automationService from '../assets/automation-service.jpg';
import saasService from '../assets/saas-service.jpg';
import websiteService from '../assets/website-service.jpg';
import businessService from '../assets/business-service.jpg';

const ServicesHero = () => {
  const services = [
    {
      icon: Workflow,
      title: "Work Automation",
      description: "Streamline repetitive tasks and optimize workflows with intelligent automation solutions tailored to your business needs.",
      features: [
        "Custom workflow design",
        "Integration with existing tools",
        "Real-time monitoring"
      ],
      color: "accent",
      image: automationService
    },
    {
      icon: Code2,
      title: "Micro SaaS Development",
      description: "Launch your software product quickly with our lean development approach focused on solving specific problems efficiently.",
      features: [
        "Rapid MVP development",
        "Scalable architecture",
        "User-centric design"
      ],
      color: "coral",
      image: saasService
    },
    {
      icon: Palette,
      title: "Website Design & Development",
      description: "Create stunning, high-performance websites that convert visitors into customers and perfectly represent your brand.",
      features: [
        "Responsive design",
        "SEO optimization",
        "Performance focused"
      ],
      color: "primary",
      image: websiteService
    },
    {
      icon: Building2,
      title: "Business Architecture",
      description: "Design robust operational frameworks that support sustainable growth and improve organizational efficiency.",
      features: [
        "Process optimization",
        "System integration",
        "Strategic planning"
      ],
      color: "accent-light",
      image: businessService
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Our Services</h2>
          <p className="text-professional max-w-2xl mx-auto">
            Comprehensive solutions designed to modernize your operations and accelerate business growth.
          </p>
        </div>

        {/* Uniform Service Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium group relative overflow-hidden"
            >
              {/* Subtle Background Image */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 text-${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm group/link hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact">
            <button className="btn-hero">
              Discuss Your Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
