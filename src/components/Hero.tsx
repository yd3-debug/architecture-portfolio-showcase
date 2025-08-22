import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-light to-primary-soft relative overflow-hidden">
      <div className="container-professional pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up text-white">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
                ✨ Strategic Business Architecture
              </span>
            </div>
            
            <h1 className="heading-hero mb-6 text-white">
              Transform Your Business with
              <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent"> Strategic Architecture</span>
            </h1>
            
            <p className="text-xl leading-relaxed mb-8 max-w-lg text-white/90">
              I design and implement comprehensive business architectures that align technology, processes, and people to drive sustainable growth and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-hero group">
                View My Work
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
                15+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                200+ Projects Delivered
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                Fortune 500 Clients
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-delay">
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded-md"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Strategic Vision</h3>
                  <p className="text-white/80">
                    Connecting business goals with technical excellence
                  </p>
                </div>
              </div>
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