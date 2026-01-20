import { ArrowRight } from 'lucide-react';
import heroDesktop from '@/assets/hero-desktop-new.jpg';
import heroMobile from '@/assets/hero-mobile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Background Image */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img 
          src={heroDesktop} 
          alt="Professional workspace with strategic planning elements" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-charcoal/60"></div>
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        <img 
          src={heroMobile} 
          alt="Professional workspace with strategic planning elements" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-charcoal/60"></div>
      </div>

      <div className="container-professional relative z-10 max-w-4xl text-center px-4">
        {/* Transformation-focused Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 md:mb-8 leading-[1.1] tracking-tight">
          From Overwhelmed<br className="hidden sm:block" /> to Organised
        </h1>

        {/* Client-focused Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6 leading-relaxed font-light max-w-2xl mx-auto">
          We help service businesses and consultancies get found by enterprise clients—without relying on referrals alone
        </p>

        {/* Proof Point */}
        <p className="text-xs sm:text-sm text-white/60 mb-8 sm:mb-12 md:mb-14">
          Trusted by 50+ businesses to increase visibility and close bigger deals
        </p>

        {/* CTAs - Primary Focus */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a 
            href="#contact"
            className="px-8 py-3.5 sm:px-10 sm:py-4 text-sm font-medium text-charcoal bg-white hover:bg-white/90 transition-all duration-300 rounded-lg shadow-lg"
          >
            Book a Discovery Call
          </a>
          <a 
            href="#services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-light transition-all"
          >
            See How We Help
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border border-white/20 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-1.5 sm:h-2 bg-white/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
