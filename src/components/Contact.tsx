import { Mail, MapPin, Users, Handshake, Eye, Rocket } from 'lucide-react';

const Contact = () => {
  const values = [
    { icon: Handshake, title: "Partnership First" },
    { icon: Eye, title: "Clarity Over Complexity" },
    { icon: Rocket, title: "Action-Oriented" }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-4xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
            Start a Conversation
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-6">
            We engage as strategic partners, not project vendors. Every engagement is scope-dependent and built around your specific growth objectives.
          </p>
          {/* Scarcity Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/5 rounded-full mb-8 sm:mb-10">
            <Users className="w-4 h-4 text-charcoal" />
            <span className="text-xs sm:text-sm font-medium text-charcoal">
              Currently accepting 2 new partners for Q1 2026
            </span>
          </div>

          {/* How We Work Values */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-charcoal">{value.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-14 md:mb-20">
          {/* Email */}
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-charcoal/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
            </div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-charcoal">Email</h3>
            <a
              href="mailto:contact@yektad.com"
              className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-accent font-light transition-colors break-all"
            >
              contact@yektad.com
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-charcoal/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto">
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
          <a href="mailto:contact@yektad.com">
            <button className="px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
