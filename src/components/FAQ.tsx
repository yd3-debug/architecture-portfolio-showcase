import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What's the investment range?",
      answer: "Our engagements are scope-dependent. Foundation packages (website + positioning) start at £5k-8k. Growth partnerships (full visibility system) range £10k-15k. Enterprise-level strategic partnerships are £20k+ and custom-scoped. During our discovery call, we'll identify exactly what you need—no more, no less."
    },
    {
      question: "What results can I realistically expect?",
      answer: "Based on our track record: clients typically see their first enterprise lead within 6-8 weeks of launch. Most experience a 3-5x increase in qualified inbound inquiries within 90 days. We've helped 12+ service businesses land 6-figure contracts. Results vary by industry and starting point—we'll give you honest projections on our call."
    },
    {
      question: "How much time do I need to commit?",
      answer: "Week 1-2: 3-4 hours for strategy sessions and discovery. Week 3-6: 1-2 hours weekly for reviews and feedback. After launch: 30 minutes weekly check-ins. We do the heavy lifting. You provide the expertise and input that only you can provide."
    },
    {
      question: "How do I know if we're a good fit?",
      answer: "You're a great fit if: You have a proven service/product (customers love what you do). You're growing via referrals but want more. You're ready to invest in long-term visibility, not quick fixes. You're not a good fit if: You're looking for the cheapest option. You need results in 2 weeks. You want a 'set and forget' solution."
    },
    {
      question: "What happens after I book a call?",
      answer: "Within 24 hours, you'll receive a brief questionnaire (5 minutes). On the call, we'll diagnose your visibility gaps together. Within 48 hours after the call, you'll get a custom proposal with clear deliverables, timeline, and investment. No pressure—just clarity on what we can achieve together."
    },
    {
      question: "What if I'm not happy with the work?",
      answer: "We offer a 50% refund if you're unsatisfied after the first month. But honestly? This has never been used. We're selective about who we work with precisely because we want every engagement to succeed. Our reputation depends on your results."
    },
    {
      question: "Why not just hire a marketing agency?",
      answer: "Most agencies sell tactics—ads, SEO, content. We build business architecture. The difference: agencies optimize what exists; we build what's missing. We act as your strategic partner, not a vendor churning deliverables. You get a Director-level perspective, not just execution."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-soft-gray">
      <div className="container-professional max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Real Questions, Honest Answers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            No vague corporate speak. Here's exactly what you need to know before reaching out.
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
              <AccordionContent className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed pb-4 sm:pb-5 md:pb-6 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-muted-foreground font-light mb-4 sm:mb-6">
            Still have questions? Let's talk.
          </p>
          <a href="#contact">
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg">
              Book a Strategy Call
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
