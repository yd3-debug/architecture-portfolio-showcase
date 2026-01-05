import aboutBackground from '../assets/about-background.jpg';
import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Studio = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Thinking",
      description: "We begin every project by understanding your business goals, challenges, and opportunities to ensure our solutions align perfectly with your vision."
    },
    {
      icon: Lightbulb,
      title: "Technical Excellence",
      description: "Our team combines deep technical expertise with industry best practices to deliver robust, scalable, and maintainable solutions."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We believe in collaborative relationships. Your success is our success, and we work alongside you every step of the way."
    }
  ];

  return (
    <section id="studio" className="section-padding bg-white">
      <div className="container-professional max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={aboutBackground}
                alt="Studio workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-charcoal leading-tight">
              Building Better Businesses
            </h2>

            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              We are a team of strategists, developers, and problem-solvers dedicated to helping 
              businesses thrive in the digital age.
            </p>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                With years of experience across diverse industries, we specialize in creating intelligent 
                automation solutions and custom software that help businesses operate more efficiently 
                and grow sustainably.
              </p>

              <p>
                Our approach combines strategic thinking with technical expertise to deliver 
                solutions that not only solve immediate challenges but create lasting value. We 
                believe that great technology should simplify complexity, not add to it.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-6 mb-10">
              <h3 className="font-serif text-xl text-charcoal">Our Approach</h3>
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground font-light">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact">
              <Button variant="outline" className="group">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <div className="font-serif text-4xl text-charcoal mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-light">Projects Delivered</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-charcoal mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-light">Client Satisfaction</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-charcoal mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-light">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
