import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with established small to medium-sized businesses, entrepreneurs ready to scale, and companies looking to streamline their operations. Our clients range from service-based businesses to product companies across various industries."
    },
    {
      question: "How long do engagements typically take?",
      answer: "It depends on the scope. Website projects typically take 4-8 weeks. Business architecture and strategy work can range from a focused 2-week sprint to ongoing quarterly partnerships. We'll give you a clear timeline after our initial consultation."
    },
    {
      question: "Do you work remotely or on-site?",
      answer: "We work primarily remotely, which allows us to serve clients globally. However, for certain strategic planning sessions or workshops, we can arrange on-site visits if needed. Our digital-first approach means we're responsive and accessible regardless of location."
    },
    {
      question: "How is pricing structured?",
      answer: "We offer project-based pricing for defined deliverables (websites, strategy documents) and retainer arrangements for ongoing operations management and advisory work. Every engagement starts with a free consultation where we'll discuss your needs and provide a clear proposal."
    },
    {
      question: "What's the first step to working together?",
      answer: "Simply reach out through our contact form or email. We'll schedule a no-obligation discovery call to understand your challenges, goals, and whether we're the right fit for each other. From there, we'll propose a tailored approach and timeline."
    },
    {
      question: "What does 'Operations Management' include?",
      answer: "Our Operations Management service acts as your outsourced Director of Operations. This includes international logistics coordination, vendor and supplier negotiations, supply chain optimization, process standardization, and day-to-day operational oversight—freeing you to focus on growth and strategy."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-soft-gray">
      <div className="container-professional max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Common Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border-none px-5 sm:px-6 md:px-8 data-[state=open]:bg-white"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium text-charcoal hover:no-underline py-4 sm:py-5 md:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed pb-4 sm:pb-5 md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-muted-foreground font-light mb-4 sm:mb-6">
            Still have questions?
          </p>
          <a href="#contact">
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;