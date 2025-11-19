import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-professional max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-charcoal">
            Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can help transform your business operations
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Email */}
          <div className="text-center md:text-left">
            <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Mail className="w-5 h-5 text-charcoal" />
            </div>
            <h3 className="font-serif text-xl mb-3 text-charcoal">Email</h3>
            <a
              href="mailto:hello@businesssolutions.com"
              className="text-muted-foreground hover:text-accent font-light transition-colors"
            >
              hello@businesssolutions.com
            </a>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <MapPin className="w-5 h-5 text-charcoal" />
            </div>
            <h3 className="font-serif text-xl mb-3 text-charcoal">Services</h3>
            <p className="text-muted-foreground font-light">
              Remote & On-site<br />
              Serving clients worldwide
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-border">
          <a href="mailto:hello@businesssolutions.com">
            <button className="px-10 py-4 text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
