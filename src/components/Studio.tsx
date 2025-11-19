import aboutBackground from '../assets/about-background.jpg';

const Studio = () => {
  return (
    <section id="studio" className="section-padding bg-white">
      <div className="container-professional max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-charcoal leading-tight">
              Building Better Businesses
            </h2>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                We specialize in creating intelligent automation solutions and custom software that 
                help businesses operate more efficiently and grow sustainably.
              </p>

              <p>
                Our approach combines strategic thinking with technical expertise to deliver 
                solutions that not only solve immediate challenges but create lasting value.
              </p>

              <p>
                Every project begins with understanding your unique context and ends with 
                measurable improvements to your operations.
              </p>
            </div>

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
