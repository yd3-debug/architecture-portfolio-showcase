import { Quote, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/testimonials-hero.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "YektaD didn't merely revamp our online presence; they engineered a comprehensive, seamless client acquisition ecosystem. The 65% increase in appointments within three months is a direct testament to their strategic foresight and flawless execution.",
      name: "Sahar",
      title: "Owner, Studio Solena — Ealing, London",
      metric: "+65% bookings"
    },
    {
      quote: "From our website to our ordering system, everything works perfectly. We tripled our online orders within 6 weeks of launching.",
      name: "Carlo",
      title: "Owner, Pizza Fly — Milan, Italy",
      metric: "3x online orders"
    },
    {
      quote: "From foundational brand identity to advanced website functionality, YektaD delivered an integrated solution that instantaneously amplified our market perception. We are now unequivocally recognized as the established, credible maintenance partner we always aspired to be.",
      name: "Petru",
      title: "Founder, Mainteniq — London, UK",
      metric: "Brand & Web"
    }
  ];

  return (
    <section className="bg-soft-gray overflow-hidden">
      {/* FULL WIDTH HERO IMAGE - TRUE EDGE TO EDGE */}
      <div className="w-full h-[350px] md:h-[450px] lg:h-[550px]">
        <img 
          src={heroImage} 
          alt="Luxury flat-lay with jade plant, bronze handshake sculpture, gold coins, brass compass, and wooden building blocks on mahogany desk representing growth, trust, and building foundations" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT BELOW */}
      <div className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20 px-4 sm:px-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
              Real Results from Real Clients
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light">
              Don't take our word for it—here's what our clients say
            </p>
          </div>

          {/* All testimonials */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 md:p-10 rounded-xl relative">
                {/* Result Metric Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-medium text-accent">{testimonial.metric}</span>
                </div>
                
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent/20 mb-4 sm:mb-6" />
                <blockquote className="font-serif text-base sm:text-lg md:text-2xl lg:text-3xl text-charcoal mb-4 sm:mb-6 md:mb-8 leading-relaxed font-light">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-light text-charcoal mb-1 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-light">
                    {testimonial.title}
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

export default Testimonials;
