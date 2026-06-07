const painPoints = [
  {
    number: '01',
    pain: 'Stuck on Referrals',
    solution:
      "New work only shows up when someone happens to mention you. That's not a plan — it's luck. Together we build a few simple systems so the right clients can find you on their own.",
  },
  {
    number: '02',
    pain: 'Invisible Online',
    solution:
      "You're genuinely good at what you do, but your website doesn't show it. People searching for exactly what you offer end up clicking on someone with half your experience instead.",
  },
  {
    number: '03',
    pain: 'No Clear Way to Grow',
    solution:
      "You know there's more in this business — better clients, steadier work, a bit more breathing room. You just don't have a clear way to get there without losing what makes it yours.",
  },
];

const PainPoints = () => {
  return (
    <section className="bg-charcoal py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-18 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5 font-light">
            The Problem
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.1]">
            What's quietly<br />
            <span className="text-white/50">holding you back</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {painPoints.map((item) => (
            <div
              key={item.number}
              className="group p-7 sm:p-8 rounded-2xl border border-white/8
                         hover:border-accent/50 hover:bg-white/5
                         transition-all duration-300"
            >
              <span className="font-serif text-5xl sm:text-6xl font-light text-white/10 group-hover:text-accent/20 transition-colors leading-none block mb-6">
                {item.number}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-light mb-4 leading-tight">
                {item.pain}
              </h3>
              <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed group-hover:text-white/65 transition-colors">
                {item.solution}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 sm:mt-18 pt-10 sm:pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-serif text-xl sm:text-2xl text-white/80 font-light max-w-md">
            Sound familiar? Let's fix it — together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium
                       text-charcoal bg-white hover:bg-white/90 transition-all duration-300 rounded-lg flex-shrink-0"
          >
            Schedule a Discovery Session
          </a>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
