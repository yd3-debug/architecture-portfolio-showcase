import { ArrowRight } from 'lucide-react';
import heroWorkspace from '../assets/hero-workspace.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroWorkspace} 
          alt="Professional workspace showcasing modern business architecture solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container-professional relative z-10 max-w-7xl text-center px-4">
        {/* Dramatic Serif Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 md:mb-8 leading-[0.95] tracking-tighter">
          Transform Your Business
        </h1>

        {/* Minimal Subheading */}
        <p className="text-xs sm:text-sm md:text-base text-white/70 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light max-w-xl mx-auto">
          Strategic solutions for modern business
        </p>

        {/* Minimal CTA */}
        <a 
          href="#contact"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs sm:text-sm font-light border-b border-white/30 hover:border-white/60 transition-all pb-1"
        >
          Start a Conversation
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border border-white/20 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-1.5 sm:h-2 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
