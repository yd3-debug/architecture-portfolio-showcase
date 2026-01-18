import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const PainPoints = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const painPoints = [
    {
      pain: "Overwhelmed running your business?",
      solution: "We bring structure and clarity to your operations",
      dark: true
    },
    {
      pain: "Online presence not converting?",
      solution: "Professional web design that builds trust and drives results",
      dark: false
    },
    {
      pain: "Unsure how to compete in your market?",
      solution: "Strategic positioning that sets you apart",
      dark: false
    },
    {
      pain: "Growth has stalled?",
      solution: "Actionable strategies to unlock your next phase",
      dark: true
    },
    {
      pain: "Doing everything yourself?",
      solution: "A strategic partner who works alongside you",
      dark: false
    }
  ];

  // Handle both hover (desktop) and tap (mobile)
  const handleInteraction = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    // Only set on hover for desktop - don't interfere with tap
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container-professional max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Sound Familiar?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            These are the challenges business owners face every day. We help you overcome them.
          </p>
        </div>

        {/* Pain Points - Offset Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {painPoints.filter((_, i) => i % 2 === 0).map((item, idx) => {
              const originalIndex = idx * 2;
              const isActive = activeIndex === originalIndex;
              return (
                <div
                  key={originalIndex}
                  className={`relative p-6 sm:p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden rounded-xl ${
                    item.dark ? 'bg-charcoal text-white' : 'bg-soft-gray text-charcoal'
                  }`}
                  onClick={() => handleInteraction(originalIndex)}
                  onMouseEnter={() => handleMouseEnter(originalIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Pain Point */}
                  <h3 className={`font-serif text-lg sm:text-xl md:text-2xl leading-tight mb-4 transition-all duration-300 ${
                    isActive ? 'opacity-60' : ''
                  }`}>
                    {item.pain}
                  </h3>

                  {/* Solution - Reveals on hover/tap */}
                  <div className={`flex items-start gap-3 transition-all duration-500 ${
                    isActive 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2'
                  }`}>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-accent" />
                    <p className={`text-sm sm:text-base font-light ${
                      item.dark ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {item.solution}
                    </p>
                  </div>

                  {/* Hover indicator line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500 rounded-b-xl ${
                    isActive ? 'w-full' : 'w-0'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column - Offset */}
          <div className="space-y-4 sm:space-y-6 md:mt-12">
            {painPoints.filter((_, i) => i % 2 === 1).map((item, idx) => {
              const originalIndex = idx * 2 + 1;
              const isActive = activeIndex === originalIndex;
              return (
                <div
                  key={originalIndex}
                  className={`relative p-6 sm:p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden rounded-xl ${
                    item.dark ? 'bg-charcoal text-white' : 'bg-soft-gray text-charcoal'
                  }`}
                  onClick={() => handleInteraction(originalIndex)}
                  onMouseEnter={() => handleMouseEnter(originalIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Pain Point */}
                  <h3 className={`font-serif text-lg sm:text-xl md:text-2xl leading-tight mb-4 transition-all duration-300 ${
                    isActive ? 'opacity-60' : ''
                  }`}>
                    {item.pain}
                  </h3>

                  {/* Solution - Reveals on hover/tap */}
                  <div className={`flex items-start gap-3 transition-all duration-500 ${
                    isActive 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2'
                  }`}>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-accent" />
                    <p className={`text-sm sm:text-base font-light ${
                      item.dark ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {item.solution}
                    </p>
                  </div>

                  {/* Hover indicator line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500 rounded-b-xl ${
                    isActive ? 'w-full' : 'w-0'
                  }`} />
                </div>
              );
            })}
          </div>
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
