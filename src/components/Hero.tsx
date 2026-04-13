import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#070707] overflow-hidden">

      {/* ── 3D SCENE ─────────────────────────────────────────────
          Fills right 62% on desktop, full-width behind on mobile.
          Three gradient masks blend it seamlessly into the dark bg.
      ─────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 lg:left-[38%]">
        <iframe
          src="https://my.spline.design/webdiagram-ZOJH9vcCzv1MsqQbLpyazIZu/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Business architecture visualisation"
          aria-hidden="true"
          className="w-full h-full pointer-events-none lg:pointer-events-auto"
          loading="lazy"
        />
        {/* Left blend — merges 3D into dark text panel */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r
                        from-[#070707] via-[#070707]/75 to-transparent pointer-events-none" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t
                        from-[#070707] to-transparent pointer-events-none" />
        {/* Mobile top fade */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b
                        from-[#070707] to-transparent pointer-events-none lg:hidden" />
        {/* Spline watermark cover */}
        <div className="absolute bottom-0 right-0 w-52 h-12 bg-[#070707]" />
      </div>

      {/* ── TEXT CONTENT ──────────────────────────────────────── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between
                      px-6 sm:px-10 lg:px-16 xl:px-20
                      pt-28 pb-10 lg:pt-0 lg:pb-0
                      w-full lg:w-[52%]">

        {/* Top tag */}
        <div className="hidden lg:flex items-center gap-3 pt-32">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-light">
            Business Architecture &nbsp;·&nbsp; Strategic Partnership
          </span>
        </div>

        {/* Headline block */}
        <div className="py-12 lg:py-0 lg:mt-auto">
          <h1
            className="font-serif font-light text-white tracking-tight leading-[0.95]
                       text-[clamp(3rem,8vw,7.5rem)] mb-6 sm:mb-8"
          >
            Architecture<br />
            <span className="text-white/22">for enterprise</span><br />
            growth.
          </h1>

          {/* Thin rule */}
          <div className="w-10 h-px bg-white/18 mb-6 sm:mb-8" />

          <p className="text-sm sm:text-base text-white/38 font-light leading-relaxed
                        max-w-xs sm:max-w-sm mb-8 sm:mb-10">
            I design the positioning, systems, and go-to-market infrastructure that
            moves service businesses from referrals to enterprise contracts.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium
                         text-[#070707] bg-white hover:bg-white/85
                         transition-all duration-300 rounded-lg shrink-0"
            >
              Book a Strategy Session
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center gap-2 text-white/38 hover:text-white/75
                         text-sm font-light transition-all group"
            >
              See the work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* ── STATS STRIP ───────────────────────────────────────── */}
        <div className="border-t border-white/[0.07] pt-6 pb-2 lg:pb-8
                        flex items-center gap-6 sm:gap-10 lg:mt-auto">
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">12+</p>
            <p className="text-[10px] text-white/25 font-light mt-1.5 tracking-wide">Businesses</p>
          </div>
          <div className="w-px h-8 bg-white/[0.08]" />
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">90 days</p>
            <p className="text-[10px] text-white/25 font-light mt-1.5 tracking-wide">To first enterprise lead</p>
          </div>
          <div className="w-px h-8 bg-white/[0.08]" />
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">UK · EU</p>
            <p className="text-[10px] text-white/25 font-light mt-1.5 tracking-wide">Markets served</p>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-16 hidden lg:flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-white/10" />
        <span className="text-[9px] text-white/20 uppercase tracking-[0.25em] rotate-90 mt-2">Scroll</span>
      </div>

    </section>
  );
};

export default Hero;
