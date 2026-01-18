import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "50+", label: "Automations Built", description: "Streamlining business processes" },
    { number: "25+", label: "SaaS Solutions", description: "Custom applications delivered" },
    { number: "100+", label: "Websites Created", description: "Modern, responsive designs" },
    { number: "98%", label: "Client Satisfaction", description: "Proven results and quality" }
  ];

  const expertise = [
    {
      icon: Target,
      title: "Process Automation",
      description: "Creating automated workflows that eliminate repetitive tasks and reduce manual errors in business operations."
    },
    {
      icon: Users,
      title: "Custom Development",
      description: "Building tailored software solutions that address specific business challenges and market opportunities."
    },
    {
      icon: Lightbulb,
      title: "Business Optimization",
      description: "Analyzing and improving business processes to increase efficiency, reduce costs, and accelerate growth."
    },
    {
      icon: Award,
      title: "Technical Excellence",
      description: "Delivering high-quality solutions using modern technologies and best practices for scalable results."
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-professional">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-section mb-6">
              Strategic Business Architecture & Growth
            </h2>
            
            <div className="space-y-6 text-professional">
              <p>
                Specializing in business architecture, web design, and strategic growth consulting 
                to help companies structure themselves correctly and succeed in their markets.
              </p>
              
              <p>
                The approach combines strategic business thinking with digital expertise to create 
                frameworks that position your business for sustainable growth and competitive advantage.
              </p>
              
              <p>
                From business structure design to professional web presence, the focus is on delivering 
                strategic value that helps you understand your market, reach your customers, and grow 
                your business effectively.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="space-y-6">
            {expertise.map((item, index) => (
              <div key={index} className="card-professional">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-soft rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
            <p className="text-professional max-w-2xl mx-auto">
              Modern technologies and frameworks used to deliver high-quality automation and software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">Full-Stack Development</h4>
              <p className="text-sm text-muted-foreground">React, Node.js, TypeScript, Python</p>
            </div>
            
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">Automation Tools</h4>
              <p className="text-sm text-muted-foreground">Zapier, Make.com, Custom Scripts</p>
            </div>
            
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">Cloud Platforms</h4>
              <p className="text-sm text-muted-foreground">AWS, Vercel, Supabase, Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;