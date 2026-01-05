import { Quote } from 'lucide-react';

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
    }
  ];

  return (
    <section className="section-padding bg-soft-gray">
      <div className="container-professional max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-charcoal">
            Client Testimonials
          </h2>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-3xl mx-auto">
              {/* Quote */}
              <Quote className="w-12 h-12 text-accent/20 mb-6 mx-auto" />
              
              <blockquote className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-8 leading-relaxed font-light">
                "{testimonial.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="text-center">
                <div className="font-light text-charcoal mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground font-light">
                  {testimonial.title}
                </div>
              </div>

              {/* Divider (except last) */}
              {index < testimonials.length - 1 && (
                <div className="h-px bg-border mt-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
