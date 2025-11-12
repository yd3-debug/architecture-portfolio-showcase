import { Zap, Code, Globe, TrendingUp, ArrowRight } from 'lucide-react';

const ServicesHero = () => {
  const services = [
    {
      icon: Zap,
      title: "Work Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation",
      features: ["Process Automation", "Workflow Optimization", "Data Integration"],
      color: "accent",
      featured: true
    },
    {
      icon: Code,
      title: "Micro SaaS",
      description: "Custom software solutions and rapid prototypes",
      features: ["Custom Applications", "API Development", "MVP Creation"],
      color: "coral"
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Modern, responsive websites that convert",
      features: ["Responsive Design", "User Experience", "SEO Implementation"],
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Business Architecture",
      description: "Strategic guidance for process improvement",
      features: ["Process Analysis", "Strategic Planning", "Growth Roadmaps"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      
      <div className="container-professional relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
            <Zap className="w-4 h-4" />
            <span>Core Business Solutions</span>
          </div>
          
          <h2 className="heading-section mb-8">
            Services That Drive
            <span className="block bg-gradient-to-r from-accent via-accent-light to-coral bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized services that automate workflows, create custom software solutions, 
            and optimize business processes to drive growth and efficiency.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card-bento group cursor-pointer ${
                service.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                service.color === 'accent' ? 'bg-gradient-to-br from-accent to-accent-soft' :
                service.color === 'coral' ? 'bg-gradient-to-br from-coral to-coral/80' :
                'bg-gradient-to-br from-primary to-primary-soft'
              }`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${
                service.featured ? 'text-3xl' : ''
              }`}>{service.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      service.color === 'accent' ? 'bg-accent' :
                      service.color === 'coral' ? 'bg-coral' :
                      'bg-primary'
                    }`}></div>
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <button className="btn-hero">
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
