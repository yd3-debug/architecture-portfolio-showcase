import { Award, Users, Target, Lightbulb, ArrowRight } from 'lucide-react';
import aboutBackground from '@/assets/about-background.jpg';

const AboutHero = () => {
  const stats = [
    { number: "50+", label: "Automations" },
    { number: "25+", label: "SaaS Solutions" },
    { number: "100+", label: "Websites" },
    { number: "98%", label: "Satisfaction" }
  ];

  const expertise = [
    {
      icon: Target,
      title: "Process Automation",
      description: "Automated workflows that eliminate repetitive tasks and boost productivity"
    },
    {
      icon: Users,
      title: "Custom Development",
      description: "Tailored software solutions designed for your unique business challenges"
    },
    {
      icon: Lightbulb,
      title: "Business Optimization",
      description: "Analyzing and improving processes for maximum efficiency and growth"
    },
    {
      icon: Award,
      title: "Technical Excellence",
      description: "High-quality solutions built with modern, scalable technologies"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={aboutBackground} 
          alt="Professional team collaboration" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="container-professional relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-8">
              <Award className="w-4 h-4" />
              <span>About Our Expertise</span>
            </div>
            
            <h2 className="heading-section mb-8">
              Delivering Results Through
              <span className="block text-accent">
                Smart Automation
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Specializing in work automation, micro SaaS development, and business optimization 
              to help companies streamline operations and accelerate growth through technology.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-hero group">
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Expertise Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="card-premium group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
