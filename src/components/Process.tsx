import { useState } from 'react';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Discovery",
      description: "Understanding your business challenges, goals, and opportunities through in-depth consultation."
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy",
      description: "Crafting a tailored solution architecture that aligns with your vision and objectives."
    },
    {
      number: "03",
      icon: Code,
      title: "Development",
      description: "Building elegant, functional solutions with attention to detail and user experience."
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      description: "Deploying your solution with ongoing support to ensure long-term success."
    }
  ];

  const handleTap = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-soft-gray">
      <div className="container-professional">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
            Our Process
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light">
            A systematic approach to delivering exceptional results
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-border" />
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer"
                  onClick={() => handleTap(index)}
                >
                  {/* Timeline Dot */}
                  <div className={`
                    w-3 h-3 rounded-full mx-auto mb-8 relative z-10 transition-all duration-300
                    ${activeStep === index 
                      ? 'bg-accent scale-150 shadow-lg shadow-accent/30' 
                      : 'bg-charcoal group-hover:bg-accent group-hover:scale-125'
                    }
                  `} />
                  
                  {/* Content */}
                  <div className="text-center">
                    <span className={`
                      inline-block text-xs font-medium tracking-widest uppercase mb-3 transition-colors duration-300
                      ${activeStep === index ? 'text-accent' : 'text-muted-foreground group-hover:text-accent'}
                    `}>
                      {step.number}
                    </span>
                    <h3 className={`
                      font-serif text-xl lg:text-2xl mb-4 transition-colors duration-300
                      ${activeStep === index ? 'text-accent' : 'text-charcoal'}
                    `}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-[250px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Connecting Line */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-6 w-px bg-border" />
            
            {/* Steps */}
            <div className="space-y-8 sm:space-y-10">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`
                    relative flex items-start gap-6 sm:gap-8 cursor-pointer
                    transition-all duration-300 ease-out
                    ${activeStep === index ? 'scale-[1.02]' : ''}
                  `}
                  onClick={() => handleTap(index)}
                >
                  {/* Timeline Dot */}
                  <div className={`
                    relative z-10 w-8 sm:w-12 h-8 sm:h-12 rounded-full flex items-center justify-center
                    transition-all duration-300 shrink-0
                    ${activeStep === index 
                      ? 'bg-accent shadow-lg shadow-accent/30' 
                      : 'bg-white border-2 border-border'
                    }
                  `}>
                    <step.icon className={`
                      w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300
                      ${activeStep === index ? 'text-white' : 'text-charcoal'}
                    `} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`
                        text-xs font-medium tracking-widest uppercase transition-colors duration-300
                        ${activeStep === index ? 'text-accent' : 'text-muted-foreground'}
                      `}>
                        {step.number}
                      </span>
                      <span className="text-muted-foreground/30">·</span>
                      <h3 className={`
                        font-serif text-lg sm:text-xl transition-colors duration-300
                        ${activeStep === index ? 'text-accent' : 'text-charcoal'}
                      `}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={`
                      text-sm text-muted-foreground font-light leading-relaxed
                      transition-all duration-300
                      ${activeStep === index ? 'opacity-100' : 'opacity-80'}
                    `}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
