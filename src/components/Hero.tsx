import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroWorkspace from '../assets/hero-workspace.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Visible Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroWorkspace} 
          alt="Professional workspace showcasing modern business automation solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container-professional relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Backdrop blur container for text */}
          <div className="backdrop-blur-sm bg-black/20 rounded-3xl p-8 md:p-12">
            {/* Bold White Headline with Shadow */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Transform Your Business with Smart Automation
            </h1>

            {/* White Subheading with Shadow */}
            <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              We build custom solutions that streamline operations, boost productivity, and drive measurable growth for forward-thinking businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#contact">
                <button className="btn-hero group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#services">
                <button className="btn-secondary">
                  View Services
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
