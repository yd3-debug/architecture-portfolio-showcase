import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-charcoal">
        <iframe
          src="https://my.spline.design/webdiagram-ZOJH9vcCzv1MsqQbLpyazIZu/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Interactive web architecture diagram"
          aria-hidden="true"
          className="w-full h-full pointer-events-none lg:pointer-events-auto"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/60 lg:bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center">

        {/* Eyebrow */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mb-6 sm:mb-8 font-light">
          Business Visibility Consulting
        </p>

        {/* Personal headline */}
        <h1 className="font-serif font-light text-white leading-[1.05] tracking-tight mb-6 sm:mb-8
                        text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          Hi, I'm Yekta.<br />
          <span className="text-white/70">I help you land</span><br />
          enterprise clients.
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-base md:text-lg text-white/65 mb-10 sm:mb-14 font-light leading-relaxed max-w-2xl mx-auto">
          I've helped 12+ service businesses move from word-of-mouth to 6-figure enterprise contracts
          — typically within 90 days.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-medium
                       text-charcoal bg-white hover:bg-white/90
                       transition-all duration-300 rounded-lg shadow-xl shadow-black/20"
          >
            <Calendar className="w-4 h-4" />
            Book a Discovery Session
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-light transition-all"
          >
            Who is Yekta?
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Social proof pill */}
        <div className="mt-10 sm:mt-12 inline-flex items-center gap-3 px-5 py-2.5
                        bg-white/8 backdrop-blur-sm border border-white/10 rounded-full">
          <span className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-accent text-xs">★</span>
            ))}
          </span>
          <span className="text-xs sm:text-sm text-white/75 font-light">
            12+ businesses transformed &nbsp;·&nbsp; 1 spot left for Q2 2026
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
