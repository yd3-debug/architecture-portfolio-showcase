import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What distinguishes YektaD from traditional marketing or consulting agencies?",
      answer: "YektaD operates as a strategic growth architect, not merely a service vendor. Unlike traditional agencies that often focus on isolated marketing tactics or general consulting, we specialize in end-to-end enterprise acquisition for established service businesses. Our methodology integrates business architecture, high-performance digital infrastructure, and precision growth strategies to deliver measurable 6-figure contracts, rather than just leads or advice. We are partners in your strategic evolution, focused on systemic growth and market leadership."
    },
    {
      question: "What is the typical investment range for YektaD's services?",
      answer: "Our engagements are bespoke and scope-dependent, reflecting the unique strategic objectives and complexities of each enterprise client. While we do not offer standardized packages, our partnerships are structured to deliver significant ROI, typically targeting 6-figure contract acquisition. We prioritize value creation over cost, and a detailed investment proposal is provided after our Executive Discovery Session, tailored to your specific growth blueprint."
    },
    {
      question: "What results can I realistically expect, and how quickly?",
      answer: "Our clients consistently experience tangible results, with the first qualified enterprise lead typically engaged within 6-8 weeks of initiating our strategic partnership. Beyond lead generation, our focus is on securing high-value, 6-figure contracts and establishing sustainable growth ecosystems. Specific outcomes are defined and measured against the Customized Growth Blueprint developed during our initial engagement, ensuring alignment with your strategic KPIs."
    },
    {
      question: "How much time commitment is required from my executive team?",
      answer: "We understand the demands on executive time. Our process is designed for maximum efficiency and minimal disruption. The Confidential Strategic Brief takes approximately 5 minutes, followed by a 30-minute Executive Discovery Session. Post-engagement, we provide clear communication channels and concise updates, ensuring your team remains informed and strategically engaged without being burdened by day-to-day oversight."
    },
    {
      question: "How do I know if YektaD is the right strategic partner for my business?",
      answer: "YektaD is ideally suited for established service businesses that have achieved success through referrals but are now seeking to strategically scale into the enterprise market. You have a proven service, a desire for 6-figure contracts, and a readiness to invest in a transformative growth strategy. Our Executive Discovery Session is specifically designed to assess mutual fit, diagnose your unique challenges, and determine if our specialized expertise aligns with your ambitious growth objectives."
    },
    {
      question: "What happens after I schedule an Executive Discovery Session?",
      answer: "Upon scheduling, you will receive a brief Confidential Strategic Brief to complete, which helps us understand your business context. This is followed by a 30-minute Executive Discovery Session where we engage in an in-depth dialogue to diagnose your challenges and explore potential solutions. Within 48 hours of this session, you will receive a Customized Growth Blueprint—a no-obligation, strategic proposal outlining a bespoke plan to achieve your enterprise growth ambitions."
    },
    {
      question: "What if I'm not satisfied with the partnership or results?",
      answer: "Our commitment is to delivering measurable results and fostering long-term strategic partnerships. We establish clear KPIs and milestones within your Customized Growth Blueprint. Should any aspect of our engagement not meet the agreed-upon expectations, we prioritize open communication and proactive problem-solving. Our success is intrinsically linked to yours, and we are dedicated to ensuring your complete satisfaction."
    },
    {
      question: "Why should we partner with YektaD instead of expanding our internal team?",
      answer: "Expanding internal teams for specialized enterprise acquisition can be a lengthy, costly, and high-risk endeavor. YektaD provides immediate access to a highly specialized team with a proven framework and deep expertise in B2B enterprise growth, without the overheads of recruitment, training, and infrastructure development. We offer an agile, results-driven alternative, allowing your core team to focus on service delivery while we architect and execute your market expansion."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-soft-gray">
      <div className="container-professional max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal">
            Strategic Clarity for Enterprise Leaders
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            We understand that engaging a strategic partner for enterprise growth is a significant decision. Here's the clarity you need.
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
