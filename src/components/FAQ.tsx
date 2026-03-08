import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How is YektaD different from a typical marketing agency?",
      answer: "We're not a marketing agency — we're a growth partner. Instead of running ads or posting on social media, we focus on the full picture: your positioning, your digital presence, and your strategy for winning enterprise clients. Everything we do is designed to land you bigger contracts, not just more traffic."
    },
    {
      question: "How much does it cost?",
      answer: "Every engagement is different because every business is different. We don't do cookie-cutter packages. After our Discovery Session, we'll put together a proposal that's tailored to your goals and budget. Our focus is always on ROI — the investment should pay for itself many times over."
    },
    {
      question: "What results can I expect, and how quickly?",
      answer: "Most clients see their first qualified enterprise lead within 6–8 weeks. Beyond that, we focus on building systems that keep delivering — not just one-off wins. We'll set clear goals together during our initial session so you know exactly what to expect."
    },
    {
      question: "How much of my time will this take?",
      answer: "We know you're busy. The initial brief takes about 5 minutes, followed by a 30-minute Discovery Session. After that, we handle the heavy lifting and keep you updated with clear, concise communication — no unnecessary meetings."
    },
    {
      question: "How do I know if YektaD is right for my business?",
      answer: "We work best with established service businesses that have a proven offering but are stuck growing through referrals alone. If you want to break into the enterprise market and are ready to invest in doing it properly, we're likely a good fit. The Discovery Session is designed to figure that out together."
    },
    {
      question: "What happens after I book a Discovery Session?",
      answer: "You'll get a short brief to fill out (5 minutes) so we can understand your business before we talk. Then we have a 30-minute conversation to dig into your challenges and opportunities. Within 48 hours, you'll receive a tailored growth plan — no obligation, no pressure."
    },
    {
      question: "What if it doesn't work out?",
      answer: "We set clear goals and milestones from day one. If something isn't working, we'll be the first to flag it and adjust. Our success depends on yours — we're not interested in long engagements that don't deliver results."
    },
    {
      question: "Why not just hire someone in-house?",
      answer: "Hiring for enterprise growth is expensive, slow, and risky. You need strategy, design, development, and market expertise — that's a full team. With us, you get all of that from day one, without the overhead of recruitment, training, and management."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-soft-gray">
      <div className="container-professional max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Straight answers to the questions we hear most
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
              Schedule Discovery Session
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
