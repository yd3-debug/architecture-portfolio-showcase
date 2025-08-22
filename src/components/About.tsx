import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", description: "Leading enterprise transformations" },
    { number: "200+", label: "Projects Completed", description: "Across multiple industries" },
    { number: "50+", label: "Enterprise Clients", description: "Including Fortune 500 companies" },
    { number: "99%", label: "Client Satisfaction", description: "Proven track record of success" }
  ];

  const expertise = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Aligning business objectives with technology capabilities to create sustainable competitive advantages."
    },
    {
      icon: Users,
      title: "Cross-functional Leadership",
      description: "Leading diverse teams across business units, IT, and operations to deliver cohesive solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovation Management",
      description: "Driving digital transformation and innovation adoption while managing organizational change."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certified enterprise architect with recognition from leading industry organizations."
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-professional">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-section mb-6">
              Transforming Businesses Through Strategic Architecture
            </h2>
            
            <div className="space-y-6 text-professional">
              <p>
                With over 15 years of experience in business architecture and enterprise transformation, 
                I specialize in creating comprehensive strategies that bridge the gap between business 
                vision and technical execution.
              </p>
              
              <p>
                My approach combines deep industry knowledge with cutting-edge technology insights 
                to design scalable, future-ready architectures that drive sustainable growth and 
                operational excellence.
              </p>
              
              <p>
                I've led digital transformations for Fortune 500 companies, managed multi-million 
                dollar initiatives, and built applications serving hundreds of thousands of users 
                across various industries including finance, healthcare, manufacturing, and retail.
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

        {/* Certifications and Education */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Certifications & Education</h3>
            <p className="text-professional max-w-2xl mx-auto">
              Continuous learning and professional development to stay at the forefront of business architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">TOGAF 9.2 Certified</h4>
              <p className="text-sm text-muted-foreground">Enterprise Architecture Framework</p>
            </div>
            
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">Zachman Framework</h4>
              <p className="text-sm text-muted-foreground">Enterprise Architecture Methodology</p>
            </div>
            
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">MBA in Technology</h4>
              <p className="text-sm text-muted-foreground">Strategic Business Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;