import { Building, Cog, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Enterprise Architecture",
      description: "Comprehensive enterprise-wide architecture strategies that align business objectives with technology infrastructure.",
      features: ["Technology Roadmaps", "System Integration", "Digital Transformation"]
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies through data-driven process re-engineering and automation.",
      features: ["Workflow Analysis", "Automation Strategy", "Performance Metrics"]
    },
    {
      icon: Users,
      title: "Organizational Design",
      description: "Design optimal organizational structures that support business growth and foster innovation across teams.",
      features: ["Team Structure", "Capability Mapping", "Change Management"]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Develop scalable business models and growth strategies that position your organization for long-term success.",
      features: ["Market Analysis", "Scalability Planning", "Revenue Optimization"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Implement comprehensive risk management frameworks to protect and future-proof your business operations.",
      features: ["Risk Assessment", "Compliance Strategy", "Security Architecture"]
    },
    {
      icon: Zap,
      title: "Innovation Framework",
      description: "Build innovation capabilities and frameworks that drive continuous improvement and competitive advantage.",
      features: ["Innovation Labs", "R&D Strategy", "Technology Adoption"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Comprehensive Business Architecture Services
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            I provide end-to-end business architecture solutions that transform organizations, 
            optimize processes, and drive sustainable growth through strategic technology alignment.
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