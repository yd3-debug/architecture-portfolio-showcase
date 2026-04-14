const pillars = [
  {
    label: "Selective by design",
    body: "Every engagement begins with a clear vision of what's possible. If that path isn't visible before we start, the engagement doesn't begin.",
  },
  {
    label: "Architecture, not tactics",
    body: "Campaigns end. Systems compound. We build the commercial infrastructure that makes enterprise buyers come to you — and stay.",
  },
  {
    label: "Every angle considered",
    body: "Digital presence, positioning, go-to-market, operations — each element is designed as part of one coherent system, never in isolation.",
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
