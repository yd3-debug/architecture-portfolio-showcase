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
              The architecture<br />
              <span className="text-muted-foreground">behind the growth.</span>
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              <p>
                <strong className="text-charcoal font-medium">Yekta Dastranj</strong> is a Business Architect and Strategic Partner. Every engagement at YektaD is led personally by Yekta — no account managers, no junior teams handed the brief.
              </p>
              <p>
                The same pattern appears across industries: businesses with genuine expertise, real results, and strong products — invisible to the enterprise buyers who need them most. The issue is never quality. It is architecture. The positioning is vague. The digital presence doesn't command trust. The go-to-market approach wasn't built for enterprise buyers, and no system exists to reach them consistently.
              </p>
              <p>
                YektaD builds what's missing — the commercial infrastructure, the digital presence built to rank and convert, and the outreach systems that replace referral dependency with a pipeline that works by design.
              </p>
              <p className="text-charcoal/70 italic font-light border-l-2 border-accent/40 pl-4">
                "Before any engagement begins, the full picture has to be clear — where the business is, where it needs to go, and every step in between. That clarity is non-negotiable."
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
                title: "Not every business is a fit",
                body: "YektaD works with a small number of businesses at a time. Each engagement is taken only when there is a clear, complete vision for what can be built — and confidence it can be delivered."
              },
              {
                title: "Digital presence is part of the architecture",
                body: "A website is not a brochure. It is infrastructure. Every site built at YektaD is engineered for search visibility, trust, and conversion — designed to work as a commercial asset, not a placeholder."
              },
              {
                title: "One person. Full accountability.",
                body: "Every email comes from Yekta. Every strategy is built by Yekta. The business owner gets direct access — not a process, not a portal."
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
              <span className="text-xs text-muted-foreground/50 font-light">Serving clients across UK, EU and US markets</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutYekta;
