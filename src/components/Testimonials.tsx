import { Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    quote:
      "YektaD didn't just redesign our website — they built a complete system for attracting and converting clients. We saw a 65% increase in bookings within three months. Our clients now have a seamless, professional experience from the first click.",
    name: 'Sahar',
    title: 'Owner, Studio Solena — Ealing, London',
    metric: '+65% bookings',
  },
  {
    quote:
      "From brand identity to a fully functional website, YektaD delivered everything we needed to be taken seriously. We're now seen as the established, credible maintenance partner we always were — and the quality of inquiries has jumped significantly.",
    name: 'Petru',
    title: 'Founder, Mainteniq — London, UK',
    metric: 'Brand & Web',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-soft-gray py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 font-light">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal leading-[1.1]">
            Real results from<br />
            <span className="text-muted-foreground">real partnerships</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 sm:p-10 relative flex flex-col
                         border border-border/40 hover:border-accent/20 hover:shadow-md
                         transition-all duration-300"
            >
              {/* Metric badge */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-accent">{t.metric}</span>
              </div>

              <Quote className="w-10 h-10 text-accent/15 mb-6 flex-shrink-0" />

              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed font-light flex-1 mb-8">
                "{t.quote}"
              </blockquote>

              <div className="pt-6 border-t border-border/40">
                <p className="font-light text-charcoal text-sm sm:text-base">{t.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-light mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-sm text-muted-foreground font-light mt-10 sm:mt-12">
          50% refund guarantee if unsatisfied after month one — never claimed.
        </p>

      </div>
    </section>
  );
};

export default Testimonials;
