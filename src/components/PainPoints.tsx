import { AlertCircle, CheckCircle2 } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      pain: "Overwhelmed running your business?",
      solution: "We bring structure and clarity to your operations"
    },
    {
      pain: "Online presence not converting?",
      solution: "Professional web design that builds trust and drives results"
    },
    {
      pain: "Unsure how to compete in your market?",
      solution: "Strategic positioning that sets you apart"
    },
    {
      pain: "Growth has stalled?",
      solution: "Actionable strategies to unlock your next phase"
    },
    {
      pain: "Doing everything yourself?",
      solution: "A strategic partner who works alongside you"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-soft-gray">
      <div className="container-professional max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Sound Familiar?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            These are the challenges business owners face every day. We help you overcome them.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="space-y-4 sm:space-y-6">
          {painPoints.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 transition-all hover:shadow-md"
            >
              {/* Pain */}
              <div className="flex items-start sm:items-center gap-3 sm:flex-1">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-charcoal font-medium text-sm sm:text-base md:text-lg">
                  {item.pain}
                </p>
              </div>

              {/* Arrow/Divider */}
              <div className="hidden sm:block w-px h-8 bg-border mx-2" />
              <div className="sm:hidden h-px w-full bg-border" />

              {/* Solution */}
              <div className="flex items-start sm:items-center gap-3 sm:flex-1">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-muted-foreground font-light text-sm sm:text-base">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a href="#contact">
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300">
              Let's Solve This Together
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
