import { Zap, Code, Globe, TrendingUp } from 'lucide-react';
import businessHeroBg from '../assets/business-hero-bg.jpg';

const ServicesHero = () => {
  const services = [
    {
      icon: Zap,
      title: "Work Automation",
      description: "Streamline repetitive tasks and workflows",
      features: ["Process Automation", "Workflow Optimization", "Data Integration"]
    },
    {
      icon: Code,
      title: "Micro SaaS",
      description: "Custom software solutions and rapid prototypes",
      features: ["Custom Applications", "API Development", "MVP Creation"]
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Modern, responsive websites that convert",
      features: ["Responsive Design", "User Experience", "SEO Implementation"]
    },
    {
      icon: TrendingUp,
      title: "Business Architecture",
      description: "Strategic guidance for process improvement",
      features: ["Process Analysis", "Strategic Planning", "Growth Roadmaps"]
    }
  ];

  return (
    <section 
      id="services" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${businessHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container-professional text-center">
        <div className="mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Core Business
            <span className="block bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Specialized services that automate workflows, create custom software solutions, 
            and optimize business processes to drive growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center text-xs">
                    <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                    <span className="text-white/60">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="btn-hero">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;