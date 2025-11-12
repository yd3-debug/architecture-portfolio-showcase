import { Star, Quote, MapPin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The website redesign transformed our conversion rates by 340%. The modern design and seamless user experience exceeded our expectations completely.",
      name: "Sarah Chen",
      title: "CEO",
      company: "TechVision Startup",
      location: "San Francisco, CA",
      service: "Website Design",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      quote: "Our custom micro SaaS platform launched in record time. The solution handles 50,000+ users daily and generates recurring revenue we never thought possible.",
      name: "James Mitchell",
      title: "E-commerce Director",
      company: "Global Retail Co",
      location: "London, UK", 
      service: "Micro SaaS",
      rating: 5
    },
    {
      id: 3,
      quote: "Workflow automation eliminated 80% of manual tasks. Our team now focuses on strategy instead of repetitive work. ROI was achieved in just 3 months.",
      name: "Michael Thompson",
      title: "Operations Manager",
      company: "Tech Solutions Inc",
      location: "Toronto, Canada",
      service: "Automation",
      rating: 5
    },
    {
      id: 4,
      quote: "Business architecture guidance cleaned up years of operational chaos. Clear processes, better profits, and a team that actually knows their roles.",
      name: "Emma Thompson",
      title: "Restaurant Chain Owner",
      company: "Fresh Foods",
      location: "Sydney, Australia",
      service: "Architecture",
      rating: 5
    }
  ];

  const serviceColors = {
    "Website Design": { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
    "Micro SaaS": { bg: "bg-coral/10", text: "text-coral", border: "border-coral/30" },
    "Automation": { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
    "Architecture": { bg: "bg-accent-light/10", text: "text-accent-light", border: "border-accent-light/30" }
  };

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      
      <div className="container-professional relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="heading-section mb-8">
            Trusted by Businesses
            <span className="block bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From startups to established enterprises, businesses across the globe trust our solutions 
            to drive growth and operational excellence.
          </p>
        </div>

        {/* Magazine-style Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group ${testimonial.featured ? 'md:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-premium h-full relative overflow-hidden">
                {/* Large decorative quote mark */}
                <Quote className="absolute -top-4 -left-2 w-32 h-32 text-accent/5 transform rotate-180" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${serviceColors[testimonial.service].bg} ${serviceColors[testimonial.service].text} ${serviceColors[testimonial.service].border}`}>
                      {testimonial.service}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className={`${testimonial.featured ? 'text-2xl' : 'text-lg'} font-medium leading-relaxed text-foreground mb-8`}>
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-coral flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 animate-fade-in-up">
          {[
            { value: "500+", label: "Projects Completed", color: "accent" },
            { value: "98%", label: "Client Satisfaction", color: "coral" },
            { value: "24/7", label: "Support Available", color: "primary" }
          ].map((stat, index) => (
            <div key={index} className="card-premium text-center">
              <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${
                stat.color === 'accent' ? 'from-accent to-accent-light' :
                stat.color === 'coral' ? 'from-coral to-coral/80' :
                'from-primary to-primary-soft'
              } bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
