import aboutBackground from '../assets/about-background.jpg';
import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Studio = () => {
  const values = [
    {
      icon: Target,
      title: "Business Architecture",
      description: "We design the strategic framework of your business — aligning operations, processes, and goals to create a solid foundation for growth."
    },
    {
      icon: Lightbulb,
      title: "Market Positioning",
      description: "We help you understand your market, identify opportunities, and position your business to stand out from competitors."
    },
    {
      icon: Users,
      title: "Growth Partnership",
      description: "We work alongside you as a strategic partner, committed to your long-term success and sustainable business growth."
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
              Your Strategic Business Partner
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-4 sm:mb-6 md:mb-8">
              We are business architects and strategic partners dedicated to helping businesses 
              structure, grow, and thrive in competitive markets.
            </p>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground font-light leading-relaxed mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
              <p>
                With expertise across business architecture, web design, and growth strategy, 
                we help you build the right foundation and position your business for long-term success.
              </p>

              <p>
                Our approach combines strategic thinking with practical implementation to deliver 
                solutions that structure your business correctly, reach your target market effectively, 
                and drive sustainable growth.
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
