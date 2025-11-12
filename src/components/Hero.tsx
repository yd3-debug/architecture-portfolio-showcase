import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import heroWorkspace from '@/assets/hero-workspace.jpg';
import automationDashboard from '@/assets/automation-dashboard.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroWorkspace} 
          alt="Professional workspace with automation dashboards" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85"></div>
      </div>

      <div className="container-professional pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Business Process Automation</span>
            </div>
            
            <h1 className="heading-hero mb-8 text-foreground">
              Streamline Your
              <span className="block bg-gradient-to-r from-accent via-accent-light to-coral bg-clip-text text-transparent">
                Business with Smart Automation
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed mb-10 max-w-2xl text-muted-foreground">
              Transform your operations with work automation, micro SaaS solutions, and optimized business architecture. Get expert guidance when you don't know what needs improvement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-hero group">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Schedule Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 - Featured with Image */}
              <div className="relative card-premium p-8 col-span-2 overflow-hidden">
                <img 
                  src={automationDashboard} 
                  alt="Automation dashboard with analytics" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/90"></div>
                <div className="relative z-10 text-white">
                  <Zap className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Process Automation</h3>
                  <p className="text-white/90">Eliminate repetitive tasks and boost efficiency by 80%</p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="text-sm text-white/90">500+ automations built</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card-premium">
                <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-coral" />
                </div>
                <h4 className="font-bold text-lg mb-2">Growth</h4>
                <p className="text-sm text-muted-foreground">340% average conversion increase</p>
              </div>

              {/* Card 3 */}
              <div className="card-premium bg-primary text-white">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="text-white/90 text-sm">Users served daily by our SaaS solutions</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-coral text-white px-6 py-3 rounded-full font-semibold shadow-xl animate-float">
              ⚡ Fast Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
