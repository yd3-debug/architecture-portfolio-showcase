import { Quote } from 'lucide-react';
import heroImage from '@/assets/testimonials-hero.jpg';

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

  return (
    <section className="bg-soft-gray overflow-hidden">
      {/* FULL WIDTH HERO IMAGE - TRUE EDGE TO EDGE */}
      <div className="w-full h-[350px] md:h-[450px] lg:h-[550px]">
        <img 
          src={heroImage} 
          alt="Warm coffee table with two artisan lattes, handwritten thank you note, and wildflowers in natural light" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT BELOW */}
      <div className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20 px-4 sm:px-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
              Client Testimonials
            </h2>
          </div>

          {/* All testimonials */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
            {testimonials.map((testimonial, index) => (
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
      </div>
    </section>
  );
};

export default Testimonials;
