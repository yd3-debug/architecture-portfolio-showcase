import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-padding pt-32 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container-professional">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                ✨ Strategic Business Architecture
              </span>
            </div>
            
            <h1 className="heading-hero mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Strategic Architecture</span>
            </h1>
            
            <p className="text-professional mb-8 max-w-lg">
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                15+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                200+ Projects Delivered
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Fortune 500 Clients
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-delay">
            <div className="relative z-10 card-elevated">
              <div className="aspect-square bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded-md"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Strategic Vision</h3>
                  <p className="text-muted-foreground">
                    Connecting business goals with technical excellence
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary-soft/20 to-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;