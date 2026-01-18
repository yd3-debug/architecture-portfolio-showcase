import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-4xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
            Start a Conversation
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can help transform your business operations
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-14 md:mb-20">
          {/* Email */}
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-charcoal/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
            </div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-charcoal">Email</h3>
            <a
              href="mailto:info@yektad.com"
              className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-accent font-light transition-colors break-all"
            >
              info@yektad.com
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-charcoal/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
            </div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-charcoal">Services</h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-light">
              Remote & On-site<br />
              Serving clients worldwide
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 sm:pt-10 md:pt-12 border-t border-border">
          <a href="mailto:info@yektad.com">
            <button className="px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
