import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroWorkspace from '../assets/hero-workspace.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Professional Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroWorkspace} 
          alt="Professional workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      <div className="container-professional relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-8">
            <CheckCircle2 className="w-4 h-4" />
            <span>Business Process Automation</span>
          </div>

          {/* Clean Headline */}
          <h1 className="heading-hero text-foreground mb-6">
            Transform Your Business with Smart Automation
          </h1>

          {/* Concise Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We build custom solutions that streamline operations, boost productivity, and drive measurable growth for forward-thinking businesses.
          </p>

          {/* Single Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </section>
  );
};

export default Hero;
