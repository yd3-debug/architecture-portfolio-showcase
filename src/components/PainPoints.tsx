import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const PainPoints = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const painPoints = [
    {
      pain: "Overwhelmed running your business?",
      solution: "We bring structure and clarity to your operations",
    },
    {
      pain: "Online presence not converting?",
      solution: "Professional web design that builds trust and drives results",
    },
    {
      pain: "Unsure how to compete in your market?",
      solution: "Strategic positioning that sets you apart",
    },
    {
      pain: "Growth has stalled?",
      solution: "Actionable strategies to unlock your next phase",
    },
    {
      pain: "Doing everything yourself?",
      solution: "A strategic partner who works alongside you",
    }
  ];

  const handleTap = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Sound Familiar?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            These are the challenges business owners face every day. We help you overcome them.
          </p>
        </div>

        {/* Pain Points - Flowing Strips */}
        <div className="space-y-3 sm:space-y-4">
          {painPoints.map((item, index) => {
            const isActive = activeIndex === index;
            const isOdd = index % 2 === 1;
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-300 cursor-pointer ${
                  isOdd ? 'sm:ml-8 lg:ml-16' : 'sm:mr-8 lg:mr-16'
                }`}
                onClick={() => handleTap(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className={`
                  relative py-5 sm:py-6 px-5 sm:px-8 
                  border border-border/50 rounded-xl
                  transition-all duration-300
                  ${isActive 
                    ? 'bg-charcoal text-white border-charcoal shadow-lg' 
                    : 'bg-white hover:bg-soft-gray/50'
                  }
                `}>
                  {/* Pain Point */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`font-serif text-base sm:text-lg md:text-xl leading-tight transition-colors duration-300`}>
                      {item.pain}
                    </h3>
                    <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                      isActive ? 'rotate-90 text-accent' : 'text-muted-foreground'
                    }`} />
                  </div>

                  {/* Solution - Reveals on hover/tap */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isActive ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                  }`}>
                    <p className={`text-sm sm:text-base font-light ${
                      isActive ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {item.solution}
                    </p>
                  </div>

                  {/* Accent line indicator */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-b-xl transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a href="#contact">
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg">
              Let's Solve This Together
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
