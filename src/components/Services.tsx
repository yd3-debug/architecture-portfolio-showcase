import { Zap, Code, Globe, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Work Automation Solutions",
      description: "Streamline repetitive tasks and workflows to save time and reduce manual errors in your business operations.",
      features: ["Process Automation", "Workflow Optimization", "Task Management", "Data Integration"]
    },
    {
      icon: Code,
      title: "Micro SaaS Development", 
      description: "Build custom software solutions and rapid prototypes tailored to your specific business needs and market opportunities.",
      features: ["Custom Applications", "API Development", "MVP Creation", "Scalable Architecture"]
    },
    {
      icon: Globe,
      title: "Website Design & Optimization",
      description: "Create modern, responsive websites that drive engagement and convert visitors into customers.",
      features: ["Responsive Design", "User Experience", "Performance Optimization", "SEO Implementation"]
    },
    {
      icon: TrendingUp,
      title: "Business Architecture Guidance",
      description: "Get expert guidance on process improvement and strategic direction when you're unsure what needs optimization.",
      features: ["Process Analysis", "Strategic Planning", "Efficiency Consulting", "Growth Roadmaps"]
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