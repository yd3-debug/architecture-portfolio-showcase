import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#070707] overflow-hidden">

      {/* 3D — right panel, tablet and desktop only (hidden on mobile) */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[55%] lg:w-[58%]">
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
        {/* Gradient: blends 3D into dark bg */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r
                        from-[#070707] via-[#070707]/85 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t
                        from-[#070707] to-transparent pointer-events-none" />
        {/* Watermark cover */}
        <div className="absolute bottom-0 right-0 w-52 h-12 bg-[#070707]" />
      </div>

      {/* Text panel */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between
                      w-full md:w-[52%] lg:w-[48%]
                      px-6 sm:px-10 md:px-10 lg:px-16 xl:px-20
                      py-24 md:py-0">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 md:pt-32">
          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/60 font-light">
            Business Architecture &nbsp;·&nbsp; Strategic Partnership
          </span>
        </div>

        {/* Headline */}
        <div className="md:mt-auto">
          <h1 className="font-serif font-light tracking-tight leading-[0.95]
                         text-[clamp(2.8rem,6.5vw,6.5rem)] mb-6 sm:mb-8">
            <span className="text-white">Architecture</span><br />
            <span className="text-accent">for enterprise</span><br />
            <span className="text-white">growth.</span>
          </h1>

          <div className="w-10 h-px bg-white/25 mb-5 sm:mb-7" />

          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed
                        max-w-[22rem] mb-8 sm:mb-10">
            I design the positioning, systems, and go-to-market infrastructure that
            moves service businesses from referrals to enterprise contracts.
          </p>

          <div className="flex flex-row flex-wrap items-center gap-4 sm:gap-7">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5
                         text-sm font-medium text-[#070707] bg-white hover:bg-white/85
                         transition-all duration-300 rounded-lg shrink-0"
            >
              Book a Strategy Session
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center gap-1.5 text-white/65 hover:text-white
                         text-sm font-light transition-all group"
            >
              See the work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/[0.1] pt-5 pb-6 md:pb-8 md:mt-auto
                        flex items-center gap-5 sm:gap-8">
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">12+</p>
            <p className="text-[10px] text-white/50 font-light mt-1.5 tracking-wide uppercase">Businesses</p>
          </div>
          <div className="w-px h-7 bg-white/[0.12] shrink-0" />
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">90 days</p>
            <p className="text-[10px] text-white/50 font-light mt-1.5 tracking-wide uppercase">First enterprise lead</p>
          </div>
          <div className="w-px h-7 bg-white/[0.12] shrink-0" />
          <div>
            <p className="font-serif text-xl sm:text-2xl text-white font-light leading-none">UK · EU</p>
            <p className="text-[10px] text-white/50 font-light mt-1.5 tracking-wide uppercase">Markets</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
