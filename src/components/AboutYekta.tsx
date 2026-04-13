import { ArrowRight, Award, Globe, Users } from 'lucide-react';

const credentials = [
  { icon: Users,  value: '12+',    label: 'Businesses transformed' },
  { icon: Award,  value: '90 days', label: 'Average time to first enterprise lead' },
  { icon: Globe,  value: 'UK · US · EU', label: 'Clients served globally' },
];

const AboutYekta = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Grid: story left, credentials right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — story */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-light">
              About Yekta
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal leading-[1.1] mb-8">
              I architect the systems<br />
              <span className="text-muted-foreground">that scale businesses.</span>
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              <p>
                I'm <strong className="text-charcoal font-medium">Yekta Dastranj</strong> — Business Architect and Strategic Partner. Every engagement at YektaD is led personally by me. No account managers, no junior teams.
              </p>
              <p>
                Over 10+ years I've seen the same pattern: exceptional service businesses growing through referrals, invisible to the enterprise buyers who need them most. They don't have a quality problem — they have an architecture problem. Their positioning, systems, and go-to-market approach aren't built for enterprise.
              </p>
              <p>
                I build what's missing: the commercial infrastructure, the web presence that ranks, and the outreach system that replaces luck with a repeatable pipeline.
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

          {/* Right — credentials */}
          <div className="lg:pt-16 space-y-4">
            {credentials.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 sm:p-7 rounded-2xl bg-soft-gray
                           border border-border/40 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-charcoal font-light leading-none mb-1">
                    {c.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light">{c.label}</p>
                </div>
              </div>
            ))}

            {/* Quote */}
            <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-charcoal text-white">
              <p className="font-serif text-base sm:text-lg font-light leading-relaxed opacity-90 mb-4">
                "Every email is read and responded to by me personally. That's not a promise — it's just how I work."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-xs font-medium">YD</span>
                </div>
                <span className="text-sm text-white/60 font-light">Yekta Dastranj, Founder</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutYekta;
