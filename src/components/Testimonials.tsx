import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The website redesign transformed our conversion rates by 340%. The modern design and seamless user experience exceeded our expectations completely.",
      name: "Sarah Chen",
      title: "CEO, TechVision Startup",
      location: "San Francisco, CA",
      service: "Website Design",
      rating: 5,
      avatar: "SC"
    },
    {
      id: 2,
      quote: "Our custom micro SaaS platform launched in record time. The solution handles 50,000+ users daily and generates recurring revenue we never thought possible.",
      name: "James Mitchell",
      title: "E-commerce Director",
      location: "London, UK", 
      service: "Micro SaaS",
      rating: 5,
      avatar: "JM"
    },
    {
      id: 3,
      quote: "Workflow automation eliminated 80% of manual tasks. Our team now focuses on strategy instead of repetitive work. ROI was achieved in just 3 months.",
      name: "Li Wei",
      title: "Operations Manager",
      location: "Singapore",
      service: "Workflow Optimization",
      rating: 5,
      avatar: "LW"
    },
    {
      id: 4,
      quote: "Business architecture guidance cleaned up years of operational chaos. Clear processes, better profits, and a team that actually knows their roles.",
      name: "Emma Thompson",
      title: "Restaurant Chain Owner",
      location: "Sydney, Australia",
      service: "Business Architecture",
      rating: 5,
      avatar: "ET"
    },
    {
      id: 5,
      quote: "Negotiated better vendor contracts and streamlined operations. Saved 30% on operational costs while improving service quality across all locations.",
      name: "Carlos Rodriguez",
      title: "Digital Agency Founder",
      location: "São Paulo, Brazil",
      service: "Business Optimization",
      rating: 5,
      avatar: "CR"
    },
    {
      id: 6,
      quote: "The micro SaaS solution handles complex inventory management beautifully. Real-time tracking, automated reordering, and detailed analytics in one platform.",
      name: "Priya Sharma",
      title: "Supply Chain Director",
      location: "Mumbai, India",
      service: "Micro SaaS",
      rating: 5,
      avatar: "PS"
    }
  ];

  const serviceColors = {
    "Website Design": "bg-blue-500/10 text-blue-600 border-blue-200",
    "Micro SaaS": "bg-purple-500/10 text-purple-600 border-purple-200",
    "Workflow Optimization": "bg-green-500/10 text-green-600 border-green-200",
    "Business Architecture": "bg-orange-500/10 text-orange-600 border-orange-200",
    "Business Optimization": "bg-red-500/10 text-red-600 border-red-200"
  };

  return (
    <section className="section-padding bg-gradient-to-br from-secondary/30 to-secondary/10">
      <div className="container-professional">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 hover-scale">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Client Success Stories
          </div>
          <h2 className="heading-section mb-6">
            Trusted by Businesses
            <span className="gradient-text"> Worldwide</span>
          </h2>
          <p className="text-professional max-w-2xl mx-auto">
            From startups to established enterprises, businesses across the globe trust our solutions 
            to drive growth and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Glassmorphism Card */}
              <div className="card-elevated backdrop-blur-sm bg-card/80 border border-border/50 hover:bg-card/90 hover:border-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in">
                {/* Service Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${serviceColors[testimonial.service]}`}>
                    {testimonial.service}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        style={{
                          animationDelay: `${(index * 150) + (i * 50)}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/20 transform rotate-180" />
                  <blockquote className="text-base leading-relaxed text-foreground/90 pl-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-soft rounded-full flex items-center justify-center text-white font-semibold text-sm group-hover:scale-110 transition-transform duration-200">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-primary-soft/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center space-x-8 bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;