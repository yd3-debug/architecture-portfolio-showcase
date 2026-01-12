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
    <section id="studio" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden -mx-4 sm:mx-0">
              <img
                src={aboutBackground}
                alt="Studio workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal leading-tight">
              Building Better Businesses
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-4 sm:mb-6 md:mb-8">
              We are a team of strategists, developers, and problem-solvers dedicated to helping 
              businesses thrive in the digital age.
            </p>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground font-light leading-relaxed mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
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
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 md:mb-10">
              <h3 className="font-serif text-lg sm:text-xl text-charcoal">Our Approach</h3>
              {values.map((value, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-0.5 sm:mb-1 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact">
              <Button variant="outline" className="group text-sm">
                Work With Us
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-12 border-t border-border">
              <div>
                <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-light">Projects Delivered</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-light">Client Satisfaction</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-light">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
