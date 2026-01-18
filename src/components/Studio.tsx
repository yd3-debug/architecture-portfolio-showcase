import studioWorkspace from '../assets/studio-workspace.jpg';
import { Handshake, Eye, Rocket, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Studio = () => {
  const values = [
    {
      icon: Handshake,
      title: "Partnership First",
      description: "We don't just deliver services—we become invested in your success. Your wins are our wins."
    },
    {
      icon: Eye,
      title: "Clarity Over Complexity",
      description: "We simplify the complicated. You'll always know where you stand and what comes next."
    },
    {
      icon: Rocket,
      title: "Action-Oriented",
      description: "Less theory, more results. Every recommendation comes with a clear path to implementation."
    }
  ];

  return (
    <section id="studio" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Image - Optimized for mobile */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/3] overflow-hidden -mx-4 sm:mx-0">
              <img
                src={studioWorkspace}
                alt="Organized professional workspace representing clarity and structure"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal leading-tight">
              A Partner, Not<br className="hidden sm:block" /> Just a Provider
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-4 sm:mb-6 md:mb-8">
              Business owners don't need another vendor. They need someone who understands 
              their challenges and works alongside them to solve them.
            </p>

            <div className="space-y-4 sm:space-y-5 text-muted-foreground font-light leading-relaxed mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
              <p>
                We've been where you are—overwhelmed, unsure of the next step, and trying to 
                do everything at once. That's why we built YektaD: to be the strategic partner 
                we wished we had.
              </p>

              <p>
                Whether it's structuring your operations, building your online presence, or 
                planning your next phase of growth, we're here to walk with you—not just 
                hand you a deliverable and disappear.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 md:mb-10">
              <h3 className="font-serif text-lg sm:text-xl text-charcoal">How We Work</h3>
              {values.map((value, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-0.5 sm:mb-1 text-sm sm:text-base">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact">
              <Button variant="outline" className="group text-sm">
                Start a Conversation
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
