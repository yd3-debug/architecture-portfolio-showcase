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
    <section className="section-padding bg-soft-gray">
      <div className="container-professional">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-charcoal">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            A systematic approach to delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="text-6xl font-serif font-light text-accent/20 mb-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white border border-border flex items-center justify-center group-hover:border-accent transition-all">
                <step.icon className="w-7 h-7 text-charcoal group-hover:text-accent transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl mb-4 text-charcoal">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
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
