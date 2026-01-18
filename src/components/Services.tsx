import { Zap, Code, Globe, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Business Architecture",
      description: "Design the foundation of your business with strategic frameworks that align operations, processes, and goals for maximum efficiency.",
      features: ["Market Positioning", "Process Design", "Operational Structure", "Strategic Planning"]
    },
    {
      icon: Globe,
      title: "Web Design & Development", 
      description: "Create stunning, responsive websites that capture your brand essence and drive meaningful engagement with your target audience.",
      features: ["Responsive Design", "Brand Identity", "User Experience", "Conversion Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      description: "Develop actionable growth strategies that position your business correctly in your market and create sustainable competitive advantages.",
      features: ["Market Analysis", "Competitive Positioning", "Growth Roadmaps", "Revenue Strategy"]
    },
    {
      icon: Code,
      title: "Digital Transformation",
      description: "Modernize your business operations with smart automation and digital tools that increase efficiency and reduce operational overhead.",
      features: ["Process Automation", "Workflow Optimization", "Digital Tools", "System Integration"]
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