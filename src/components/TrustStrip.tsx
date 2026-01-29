import { Users, Target, TrendingUp } from 'lucide-react';

const TrustStrip = () => {
  return (
    <section className="bg-muted/30 border-y border-border/50 py-6 sm:py-8">
      <div className="container-professional">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-16">
          {/* Stat 1 */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-medium text-foreground">50+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Businesses Transformed</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-border/60"></div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-medium text-foreground">6-8 Weeks</p>
              <p className="text-xs sm:text-sm text-muted-foreground">To First Enterprise Lead</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-border/60"></div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-medium text-foreground">3-5x</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Increase in Qualified Leads</p>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Quote */}
        <div className="mt-6 sm:mt-8 text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-muted-foreground italic">
            "We landed our first £50k enterprise contract 3 weeks after launching our new positioning."
          </p>
          <p className="mt-2 text-xs text-muted-foreground/80">— B2B Consultancy Founder</p>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
