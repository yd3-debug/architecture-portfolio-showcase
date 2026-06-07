const pillars = [
  {
    label: "Selective by design",
    body: "I take on a handful of small businesses at a time so each one gets real attention. If I can't see a clear path to results, the engagement doesn't begin.",
  },
  {
    label: "Built around your business",
    body: "No templates, no copy-paste strategies. Everything is shaped around how you actually work and what you want to build next.",
  },
  {
    label: "One person, fully invested",
    body: "Every email, every decision, every detail comes from me. You're not handed off to a junior team — you get a partner who cares about your business.",
  },
];

const TrustStrip = () => {
  return (
    <section className="bg-[#0c0c0c] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="py-8 sm:py-10 px-0 sm:px-10 first:sm:pl-0 last:sm:pr-0"
            >
              <p className="text-sm font-medium text-white/90 mb-3 leading-snug">
                {p.label}
              </p>
              <p className="text-xs text-white/40 font-light leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
