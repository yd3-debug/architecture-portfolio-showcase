import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0d0d0d] overflow-hidden flex items-center">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 min-h-screen">

        {/* Left — copy, no 3D behind it */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-24 lg:py-0 relative z-10">

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/35 mb-8 font-light">
            Business Architecture &nbsp;·&nbsp; Strategic Partnership
          </p>

          <h1 className="font-serif font-light text-white leading-[1.03] tracking-tight mb-8
                          text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            I architect<br />
            how businesses<br />
            <span className="text-white/40">scale.</span>
          </h1>

          <p className="text-sm sm:text-base text-white/45 font-light leading-relaxed max-w-sm mb-12">
            Positioning, systems, and go-to-market infrastructure for service businesses ready to stop growing through referrals and start landing enterprise contracts.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium
                         text-[#0d0d0d] bg-white hover:bg-white/85
                         transition-all duration-300 rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              Book a Strategy Session
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center gap-2 text-white/45 hover:text-white/80
                         text-sm font-light transition-all py-3.5"
            >
              See the work
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Minimal credential strip */}
          <div className="mt-16 pt-8 border-t border-white/8 flex items-center gap-8">
            <div>
              <p className="font-serif text-2xl text-white font-light">12+</p>
              <p className="text-[11px] text-white/30 font-light mt-0.5">Businesses transformed</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="font-serif text-2xl text-white font-light">90 days</p>
              <p className="text-[11px] text-white/30 font-light mt-0.5">To first enterprise lead</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="font-serif text-2xl text-white font-light">UK · EU</p>
              <p className="text-[11px] text-white/30 font-light mt-0.5">Markets served</p>
            </div>
          </div>
        </div>

        {/* Right — Spline 3D, clean, no text on top */}
        <div className="relative h-[55vw] lg:h-auto lg:min-h-screen">
          <iframe
            src="https://my.spline.design/webdiagram-ZOJH9vcCzv1MsqQbLpyazIZu/"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Business architecture diagram"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none lg:pointer-events-auto"
            loading="lazy"
          />
          {/* Cover Spline watermark (bottom-right of iframe) */}
          <div className="absolute bottom-0 right-0 w-44 h-10 bg-[#0d0d0d]" />
        </div>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-8 sm:left-12 lg:left-16 flex items-center gap-3">
        <div className="w-4 h-7 border border-white/15 rounded-full flex items-start justify-center p-1">
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full animate-bounce" />
        </div>
        <span className="text-[10px] text-white/25 uppercase tracking-[0.2em] font-light">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
