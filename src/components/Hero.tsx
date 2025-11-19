import { ArrowRight } from 'lucide-react';
import heroWorkspace from '../assets/hero-workspace.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroWorkspace} 
          alt="Professional workspace showcasing modern business architecture solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="container-professional relative z-10 max-w-6xl">
        <div className="max-w-3xl">
          {/* Elegant Serif Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-white mb-8 leading-tight tracking-tight">
            Transform Your Business Through Strategic Solutions
          </h1>

          {/* Minimal Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl">
            Crafting custom automation, elegant applications, and architectural frameworks that drive measurable growth.
          </p>

          {/* Single CTA */}
          <a href="#contact">
            <button className="btn-hero group">
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
