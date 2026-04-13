import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#070707] overflow-hidden flex flex-col lg:flex-row">

      {/* ── MOBILE: 3D on top half ─────────────────────────────── */}
      <div className="relative lg:hidden w-full h-[50vh] shrink-0">
        <iframe
          src="https://my.spline.design/webdiagram-ZOJH9vcCzv1MsqQbLpyazIZu/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Business architecture visualisation"
          aria-hidden="true"
          className="w-full h-full pointer-events-none"
          loading="lazy"
        />
        {/* Bottom fade into dark text area */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
        {/* Spline watermark cover */}
        <div className="absolute bottom-0 right-0 w-52 h-10 bg-[#070707]" />
      </div>

      {/* ── DESKTOP: 3D fills right panel absolutely ───────────── */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[60%]">
        <iframe
          src="https://my.spline.design/webdiagram-ZOJH9vcCzv1MsqQbLpyazIZu/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Business architecture visualisation"
          aria-hidden="true"
          className="w-full h-full pointer-events-auto"
          loading="lazy"
        />
        {/* Left blend into text panel */}
        <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r
                        from-[#070707] via-[#070707]/80 to-transparent pointer-events-none" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t
                        from-[#070707] to-transparent pointer-events-none" />
        {/* Spline watermark cover */}
        <div className="absolute bottom-0 right-0 w-52 h-12 bg-[#070707]" />
      </div>

      {/* ── TEXT PANEL ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-between
                      w-full lg:w-[52%]
                      px-6 sm:px-10 lg:px-16 xl:px-20
                      pb-10 pt-6 lg:pt-0 lg:pb-0 lg:min-h-screen">

        {/* Top eyebrow — desktop only */}
        <div className="hidden lg:flex items-center gap-3 pt-32">
          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-light">
            Business Architecture &nbsp;·&nbsp; Strategic Partnership
          </span>
        </div>

        {/* Main headline */}
        <div className="py-8 lg:py-0 lg:mt-auto">

          {/* Mobile eyebrow */}
          <div className="flex items-center gap-2 mb-5 lg:hidden">
            <div className="w-1 h-1 rounded-full bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-light">
              Business Architecture · Strategic Partnership
            </span>
          </div>

          <h1
            className="font-serif font-light text-white tracking-tight leading-[0.95]
                       text-[clamp(2.6rem,7.5vw,7rem)] mb-6 sm:mb-8"
          >
            Architecture<br />
            <span className="text-white/40">for enterprise</span><br />
            growth.
          </h1>

          <div className="w-10 h-px bg-white/20 mb-5 sm:mb-7" />

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed
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
              className="inline-flex items-center gap-2 text-white/55 hover:text-white/85
                         text-sm font-light transition-all group"
            >
              See the work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/[0.09] pt-6 pb-2 lg:pb-8 lg:mt-auto
                        flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-10">
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">12+</p>
            <p className="text-[10px] text-white/40 font-light mt-1.5 tracking-wide">Businesses</p>
          </div>
          <div className="w-px h-8 bg-white/[0.1]" />
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">90 days</p>
            <p className="text-[10px] text-white/40 font-light mt-1.5 tracking-wide">To first enterprise lead</p>
          </div>
          <div className="w-px h-8 bg-white/[0.1]" />
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">UK · EU</p>
            <p className="text-[10px] text-white/40 font-light mt-1.5 tracking-wide">Markets served</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
