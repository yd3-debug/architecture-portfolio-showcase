import { Users, Award, Zap, ArrowRight } from 'lucide-react';

const AboutHero = () => {
  const stats = [
    { value: "50+", label: "Automations Deployed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  const expertise = [
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Rapid deployment without compromising quality"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of delivering measurable business value"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-professional">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="heading-section mb-6">
              Building Better Businesses Through Smart Solutions
            </h2>
            
            <p className="text-professional mb-8">
              We specialize in creating custom automation solutions, micro SaaS products, and modern websites that help businesses operate more efficiently and grow faster.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact">
              <button className="btn-hero group">
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>

          {/* Right Column - Expertise Cards */}
          <div className="space-y-4">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="card-premium group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
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
