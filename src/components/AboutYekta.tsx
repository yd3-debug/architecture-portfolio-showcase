import { ArrowRight, Globe } from 'lucide-react';

const AboutYekta = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — story */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-light">
              About Yekta
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal leading-[1.1] mb-8">
              Small businesses,<br />
              <span className="text-muted-foreground">done properly.</span>
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              <p>
                I'm <strong className="text-charcoal font-medium">Yekta Dastranj</strong>. I work with independent founders and small teams — usually one to ten people — who are great at what they do but largely invisible online.
              </p>
              <p>
                The pattern is always the same: real skill, happy clients, word-of-mouth growth — and a digital presence that doesn't show any of it. The website looks thrown together, the positioning is vague, and the people who'd happily pay for what you offer simply can't find you.
              </p>
              <p>
                That's what I fix. A website that actually reflects your work, clearer positioning, and a few simple systems that help you grow without losing what makes the business yours in the first place.
              </p>
              <p className="text-charcoal/70 italic font-light border-l-2 border-accent/40 pl-4">
                "I only take on work I'm confident I can deliver. That means turning some businesses away — but the ones I work with get my full attention."
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 text-sm font-medium
                         text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg"
            >
              Work with Yekta
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — what sets this apart */}
          <div className="lg:pt-16 space-y-4">

            {[
              {
                title: "A handful of clients at a time",
                body: "I work with a small number of businesses at once so each one gets real attention. If I can't see a clear path to results before we start, I won't take the project on."
              },
              {
                title: "Your website is doing more than you think",
                body: "For most small businesses it's the first impression — and often the only one. I build sites that look like the business you actually are, load fast, and quietly do the work of bringing in new enquiries."
              },
              {
                title: "You talk to me, not a team",
                body: "Every email, every call, every decision comes from me. No account managers, no handoffs. Just direct access to the person doing the work."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-2xl bg-soft-gray border border-border/40 hover:border-accent/30 transition-colors"
              >
                <h4 className="font-serif text-base sm:text-lg text-charcoal font-light mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}

            <div className="flex items-center gap-3 pt-2 px-1">
              <Globe className="w-4 h-4 text-muted-foreground/50" />
              <span className="text-xs text-muted-foreground/50 font-light">Working with small businesses across the UK, EU and US</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutYekta;
