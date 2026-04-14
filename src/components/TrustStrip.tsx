const TrustStrip = () => {
  const stats = [
    { value: "50+", label: "Businesses worked with", sub: "across UK & EU markets" },
    { value: "90 days", label: "To first enterprise lead", sub: "average engagement timeline" },
    { value: "3–5×", label: "Increase in qualified leads", sub: "within the first quarter" },
  ];

  return (
    <section className="bg-[#0c0c0c] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-8 sm:py-10 px-0 sm:px-10 first:sm:pl-0 last:sm:pr-0"
            >
              <p className="font-serif text-[2.4rem] sm:text-[2.8rem] font-light text-white leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-white/75 leading-snug mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-white/35 font-light">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
