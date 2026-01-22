import { Quote } from 'lucide-react';
import studioImage from '@/assets/studio-workspace.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The automation solution transformed our operations completely. We've eliminated 80% of manual tasks and our team now focuses on what truly matters.",
      name: "Sarah Mitchell",
      title: "CEO, Northwind Solutions"
    },
    {
      quote: "Outstanding work on our custom application. The attention to detail and commitment to delivering exactly what we needed was impressive.",
      name: "Marcus Rivera",
      title: "Operations Director, Cascade Industries"
    },
    {
      quote: "Professional, efficient, and remarkably effective. The results exceeded our expectations in every way.",
      name: "Emma Laurent",
      title: "Founder, Silverline Consulting"
    },
    {
      quote: "They completely transformed our booking system and online presence. Our clients love the seamless experience, and we've seen a significant increase in appointments.",
      name: "Sahar",
      title: "Owner, Studio Solena — Ealing, London"
    },
    {
      quote: "From our website to our ordering system, everything works perfectly. The team understood exactly what a busy restaurant needs.",
      name: "Carlo",
      title: "Owner, Pizza Fly — Milan, Italy"
    }
  ];

  const firstHalf = testimonials.slice(0, 2);
  const secondHalf = testimonials.slice(2);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-soft-gray overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20 px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
            Client Testimonials
          </h2>
        </div>

        {/* First set of testimonials */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          {firstHalf.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 md:p-10 rounded-xl">
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

        {/* Right-bleeding hero image divider */}
        <div className="relative h-[350px] md:h-[450px] lg:h-[500px] my-12 md:my-20">
          <div className="absolute inset-0 left-4 sm:left-8 md:left-12 lg:left-16 -right-4 sm:-right-8 md:-right-12 lg:-right-[100vw]">
            <img 
              src={studioImage} 
              alt="Creative workspace" 
              className="w-full h-full object-cover rounded-l-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-soft-gray/50 rounded-l-2xl" />
          </div>
        </div>

        {/* Second set of testimonials */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          {secondHalf.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 md:p-10 rounded-xl">
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
    </section>
  );
};

export default Testimonials;
