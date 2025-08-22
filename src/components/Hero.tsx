import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import businessHeroBg from '@/assets/business-hero-bg.jpg';

const Hero = () => {
  return (
    <section className="hero-full-screen hero-overlay flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${businessHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-light/70 to-primary-soft/60" />
      <div className="container-professional pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up text-white">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
                ✨ Business Process Automation
              </span>
            </div>
            
            <h1 className="heading-hero mb-6 text-white">
              Streamline Your Business with
              <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent"> Smart Automation</span>
            </h1>
            
            <p className="text-xl leading-relaxed mb-8 max-w-lg text-white/90">
              Transform your operations with work automation, micro SaaS solutions, and optimized business architecture. Get expert guidance when you don't know what needs improvement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-hero group">
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="btn-professional">
                Schedule Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                Process Automation Expert
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                Custom SaaS Development
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                Business Optimization
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Strategic Business Architecture"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;