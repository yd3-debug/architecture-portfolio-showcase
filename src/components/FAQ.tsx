import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How is YektaD different from a marketing agency or freelancer?",
      answer: "I'm not running ads or pumping out social posts, and I'm not juggling fifty clients at once. I work with a small number of businesses at a time and look at the whole picture — your website, how you're positioned, and the small systems that help you grow. It's closer to having a thoughtful partner than hiring a vendor."
    },
    {
      question: "How much does it cost?",
      answer: "Every business is different, so every proposal is different — I don't sell packages off a menu. After our Discovery Session I'll send you a clear, honest proposal scoped to what you actually need. The goal is always for the work to pay for itself, not for it to feel like an expense."
    },
    {
      question: "What results can I expect, and how quickly?",
      answer: "Most small businesses I work with start seeing better enquiries within a couple of months of going live. The real win is steadier work, clearer positioning, and a business that runs more calmly. We'll agree on what good looks like before we start so there are no surprises."
    },
    {
      question: "How much of my time will this take?",
      answer: "I know you're busy. There's a short brief (about 5 minutes), a 30-minute Discovery Session, then I do most of the heavy lifting. You'll get clear updates and only the meetings that actually matter — no admin for the sake of admin."
    },
    {
      question: "Is this right for my business if I'm just one person, or a small team?",
      answer: "Yes — that's exactly who I work with. Most of my clients are solo founders or teams of one to ten. If you've got real skill and happy customers but your online presence doesn't reflect any of it, we're probably a good fit."
    },
    {
      question: "What happens after I book a Discovery Session?",
      answer: "You'll get a short brief to fill in (5 minutes) so I can understand your business before we talk. Then we have a 30-minute conversation about where things are and where you want to go. Within 48 hours you'll get a tailored plan — no pressure, no obligation."
    },
    {
      question: "What if it doesn't work out?",
      answer: "We set clear goals from day one. If something isn't working, I'll be the first to flag it and adjust. I'd rather have a hard conversation early than drag out work that isn't delivering — my reputation depends on yours doing well."
    },
    {
      question: "Why not just use a website builder or template?",
      answer: "You absolutely can — and for some businesses, that's enough. But a templated site usually looks like a templated site, ranks poorly, and quietly costs you the enquiries you don't even know you're missing. A custom, considered website tends to do a lot of quiet work in the background."
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
