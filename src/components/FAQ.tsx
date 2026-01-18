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
      answer: "We work with a range of businesses—from entrepreneurs ready to scale to established companies that are the 'diamonds in the rough.' These are organizations that have done exceptional work but haven't been noticed due to lack of proper positioning, branding, or strategic direction. We help them shine."
    },
    {
      question: "How long do engagements typically take?",
      answer: "It really depends on the scope and what we'd like to achieve together. Some projects wrap up in a few weeks, while others evolve into ongoing partnerships. We'll define clear milestones and timelines during our initial planning."
    },
    {
      question: "Do you work remotely or on-site?",
      answer: "Both. We're flexible and adapt to what works best for your business. Many clients prefer remote collaboration for efficiency, while others benefit from periodic on-site sessions for deeper strategic work."
    },
    {
      question: "How is pricing structured?",
      answer: "Pricing depends on the scope of work, your company's specific needs, and the services required. Every business is different, so we provide tailored proposals after our initial conversation. No hidden fees—just transparent pricing that matches your goals."
    },
    {
      question: "What's the first step to working together?",
      answer: "Simply reach out via email or the contact form. We'll schedule a discovery call to understand your challenges, goals, and see if we're the right fit. There's no obligation—just an honest conversation about how we might help."
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
              className="bg-white border-none px-5 sm:px-6 md:px-8 rounded-xl data-[state=open]:bg-white"
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
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
