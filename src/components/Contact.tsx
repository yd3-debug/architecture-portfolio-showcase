import { Mail, MapPin, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import PlaybookDownloadForm from './PlaybookDownloadForm';

const Contact = () => {
  const nextSteps = [
    "Confidential Strategic Brief (5 min) to comprehensively understand your business context and growth aspirations",
    "30-min Executive Discovery Session to diagnose core impediments and explore bespoke solutions",
    "Customized Growth Blueprint within 48 hours—a no-obligation, meticulously crafted strategic proposal"
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-5xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
            Engage for Unrivaled Enterprise Dominance
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-6">
            We are dedicated to forging deep, transformative partnerships, not merely executing transactional projects. To ensure unparalleled focus, we selectively engage with a limited cohort of businesses.
          </p>
          {/* Scarcity Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/5 rounded-full">
            <Users className="w-4 h-4 text-charcoal" />
            <span className="text-xs sm:text-sm font-medium text-charcoal">
              <span className="line-through opacity-50">4</span>
              <span className="mx-1">→</span>
              <span className="font-semibold text-accent">1</span> partnership spot remaining for Q1 2026
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
            <h3 className="font-serif text-xl sm:text-2xl mb-3">Initiate Your Strategic Dialogue</h3>
            <p className="text-sm sm:text-base text-white/70 font-light mb-6 leading-relaxed">
              More than a consultation—a rigorous strategic assessment to pinpoint your unique market visibility gaps and delineate an actionable trajectory toward enterprise market leadership.
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
              Secure Your Executive Discovery Session
            </a>
          </div>

          {/* Low Intent: Learn More */}
          <div className="bg-soft-gray rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-6">
              <ArrowRight className="w-6 h-6 text-charcoal" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mb-3 text-charcoal">Strategic Insights First?</h3>
            <p className="text-sm sm:text-base text-muted-foreground font-light mb-6 leading-relaxed">
              Access our complimentary Enterprise Visibility Playbook—the proprietary framework utilized in our client engagements to secure significant enterprise contracts.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-light">The 5 pervasive positioning errors that render even exceptional businesses invisible to discerning enterprise buyers</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-light">The definitive "enterprise-ready" website checklist, engineered for optimal conversion</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-light">Mastering pricing strategies tailored for sophisticated corporate procurement processes</span>
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
            <p className="text-xs text-muted-foreground/70 mt-2 italic">Direct correspondence from Yekta ensures every inquiry receives personalized, executive-level attention</p>
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
            Each month without a defined enterprise strategy represents a tangible loss, as competitors invariably capture opportunities that are rightfully yours.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Estimated value of a single missed enterprise contract: £10k-50k.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
