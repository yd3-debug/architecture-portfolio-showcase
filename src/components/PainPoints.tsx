import { useState, useCallback } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/painpoints-hero.jpg';

const PainPoints = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const painPoints = [
    {
      pain: "Working 60+ hours but still behind?",
      solution: "We build systems so your business runs in 20 hours, not 60",
    },
    {
      pain: "Great reputation but invisible online?",
      solution: "We put hidden gems in front of the right buyers",
    },
    {
      pain: "Getting website traffic but no sales?",
      solution: "Websites optimized to turn browsers into buyers",
    },
    {
      pain: "Competitors stealing your customers?",
      solution: "Positioning that makes you the obvious choice",
    },
    {
      pain: "Enterprise clients can't find you?",
      solution: "We've helped 12+ businesses land 6-figure contracts",
    },
    {
      pain: "Can't afford to hire but can't do it alone?",
      solution: "Fractional support—expert help without full-time cost",
    }
  ];

  const handleTouch = useCallback((index: number) => {
    setIsTouchDevice(true);
    setActiveIndex(prev => prev === index ? prev : index);
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    if (!isTouchDevice) {
      setActiveIndex(index);
    }
  }, [isTouchDevice]);

  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className="w-full h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Split desk view showing transformation from cluttered chaos with scattered papers and devices to organized clarity with a single leather notebook and pen" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
              Sound Familiar?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              These are the challenges business owners face every day. We've solved them for 50+ businesses.
            </p>
          </div>

          {/* Desktop: Two-Column Split Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16">
            {/* Left: Pain Points List */}
            <div className="space-y-2">
              {painPoints.map((item, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <div
                    key={index}
                    className={`
                      relative py-5 px-6 rounded-lg cursor-pointer transition-all duration-300
                      ${isActive 
                        ? 'bg-charcoal text-white shadow-lg' 
                        : 'bg-transparent hover:bg-soft-gray/50'
                      }
                    `}
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-accent' : 'bg-muted-foreground/30'
                      }`} />
                      <h3 className="font-serif text-lg xl:text-xl leading-tight">
                        {item.pain}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Solution Display */}
            <div className="flex items-center">
              <div className="relative w-full">
                <div className="bg-gradient-to-br from-soft-gray to-white rounded-2xl p-8 xl:p-12 border border-border/30 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Our Solution</p>
                      <p className="font-serif text-xl xl:text-2xl text-charcoal leading-relaxed">
                        {painPoints[activeIndex]?.solution}
                      </p>
                    </div>
                  </div>
                  
                  {/* Visual indicator */}
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <div className="flex gap-2">
                      {painPoints.map((_, index) => (
                        <div 
                          key={index}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            index === activeIndex 
                              ? 'w-8 bg-accent' 
                              : 'w-2 bg-muted-foreground/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Flowing Strips with Tap-to-Reveal */}
          <div className="lg:hidden space-y-3 sm:space-y-4">
            {painPoints.map((item, index) => {
              const isActive = activeIndex === index;
              const isOdd = index % 2 === 1;
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-300 ${
                    isOdd ? 'sm:ml-8' : 'sm:mr-8'
                  }`}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    handleTouch(index);
                  }}
                >
                  <div className={`
                    relative py-5 px-5 sm:px-8 
                    border border-border/50 rounded-xl
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-charcoal text-white border-charcoal shadow-lg' 
                      : 'bg-white'
                    }
                  `}>
                    {/* Pain Point */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-base sm:text-lg leading-tight">
                        {item.pain}
                      </h3>
                      <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                        isActive ? 'rotate-90 text-accent' : 'text-muted-foreground'
                      }`} />
                    </div>

                    {/* Solution - Reveals on tap */}
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
                Book a Strategy Call
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
