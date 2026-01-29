import { Mail, MapPin, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import PlaybookDownloadForm from './PlaybookDownloadForm';

const Contact = () => {
  const nextSteps = [
    "Quick questionnaire (5 min) to understand your situation",
    "30-min strategy call to diagnose your visibility gaps",
    "Custom proposal within 48 hours—no obligation"
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-5xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
            Ready to Get Found by Enterprise Clients?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-6">
            We engage as strategic partners, not project vendors. Every engagement is scope-dependent and built around your specific growth objectives.
          </p>
          {/* Scarcity Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/5 rounded-full">
            <Users className="w-4 h-4 text-charcoal" />
            <span className="text-xs sm:text-sm font-medium text-charcoal">
              Currently accepting 2 new partners for Q1 2026 • Typical wait: 4-6 weeks
            </span>
          </div>
        </div>

        {/* Two Conversion Paths */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* High Intent: Book a Call */}
          <div className="bg-charcoal rounded-2xl p-6 sm:p-8 text-white">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mb-3">Ready to Talk?</h3>
            <p className="text-sm sm:text-base text-white/70 font-light mb-6 leading-relaxed">
              Book a 30-minute strategy call. We'll diagnose your visibility gaps and show you exactly what's possible.
            </p>
            
            {/* What happens next */}
            <div className="space-y-3 mb-8">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/80 font-light">{step}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://calendly.com/yektad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-medium text-charcoal bg-white hover:bg-white/90 transition-all duration-300 rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              Book Strategy Call
            </a>
          </div>

          {/* Low Intent: Learn More */}
          <div className="bg-soft-gray rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-6">
              <ArrowRight className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mb-3 text-charcoal">Not Ready Yet?</h3>
            <p className="text-sm sm:text-base text-muted-foreground font-light mb-6 leading-relaxed">
              Get our free Enterprise Visibility Playbook—the exact framework we use with clients to land bigger contracts.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-light">5 positioning mistakes that keep you invisible</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-light">The "enterprise-ready" website checklist</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-light">How to price for corporate buyers</span>
              </div>
            </div>

            <PlaybookDownloadForm />
          </div>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-14">
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
            <p className="text-xs text-muted-foreground/70 mt-2 italic">I read every email personally — Yekta</p>
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

        {/* Cost of Waiting */}
        <div className="text-center pt-8 sm:pt-10 md:pt-12 border-t border-border">
          <p className="text-sm sm:text-base text-muted-foreground font-light mb-2">
            Every month you stay invisible, competitors win the contracts that should be yours.
          </p>
          <p className="text-xs text-muted-foreground/70">
            The average enterprise contract you're missing? £10k-50k.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
