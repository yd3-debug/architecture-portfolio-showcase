import { Award, Users, Target, Lightbulb } from 'lucide-react';
import appsHeroBg from '../assets/apps-hero-bg.jpg';

const AboutHero = () => {
  const stats = [
    { number: "50+", label: "Automations Built" },
    { number: "25+", label: "SaaS Solutions" },
    { number: "100+", label: "Websites Created" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const expertise = [
    {
      icon: Target,
      title: "Process Automation",
      description: "Automated workflows that eliminate repetitive tasks"
    },
    {
      icon: Users,
      title: "Custom Development",
      description: "Tailored software solutions for business challenges"
    },
    {
      icon: Lightbulb,
      title: "Business Optimization",
      description: "Analyzing and improving processes for efficiency"
    },
    {
      icon: Award,
      title: "Technical Excellence",
      description: "High-quality solutions using modern technologies"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${appsHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      
      {/* Content */}
      <div className="relative z-10 container-professional">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main content */}
          <div className="text-white">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Delivering Results Through
              <span className="block text-white/90">
                Smart Automation
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Specializing in work automation, micro SaaS development, and business optimization 
              to help companies streamline operations and accelerate growth through technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-hero bg-white text-primary hover:bg-white/90">
              View Our Work
            </button>
          </div>

          {/* Right: Expertise cards */}
          <div className="space-y-6">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
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