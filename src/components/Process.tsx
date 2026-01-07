import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const Process = () => {
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

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-soft-gray">
      <div className="container-professional">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
            Our Process
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light">
            A systematic approach to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-accent/20 mb-3 sm:mb-4 md:mb-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full bg-white border border-border flex items-center justify-center group-hover:border-accent transition-all">
                <step.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-charcoal group-hover:text-accent transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 text-charcoal">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-border -ml-6" 
                     style={{ width: 'calc(100% - 3rem)' }}>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
