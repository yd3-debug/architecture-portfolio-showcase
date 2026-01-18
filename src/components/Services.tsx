import { Zap, Code, Globe, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Business Architecture",
      description: "Build systems that let your business run without you—SOPs, team structure, and automated workflows for sustainable growth.",
      features: ["Standard Operating Procedures (SOPs)", "Team & Role Structure", "Automated Workflows", "Scalable Systems"]
    },
    {
      icon: Globe,
      title: "Web Design & Development", 
      description: "Modern, fast-loading websites that rank on Google and convert visitors into paying customers. Custom designs, no templates.",
      features: ["Mobile-First Design", "SEO-Optimized Pages", "Fast Load Times", "Clear Call-to-Actions"]
    },
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      description: "Clear action plans to get more customers: who to target, where to find them, what to say, and how to stand out.",
      features: ["Customer Targeting", "Market Positioning", "Sales Funnels", "Revenue Growth Plans"]
    },
    {
      icon: Code,
      title: "Operations Management",
      description: "We handle the behind-the-scenes chaos: supplier negotiations, inventory, shipping logistics, and vendor relationships.",
      features: ["Supplier Negotiations", "Inventory Management", "Shipping Logistics", "Vendor Relationships"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Core Business Solutions
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            Specialized services that automate workflows, create custom software solutions, 
            and optimize business processes to drive growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-professional group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-hero">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;