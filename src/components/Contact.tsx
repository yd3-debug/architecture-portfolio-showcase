import { Mail, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@businesssolutions.com",
      description: "Project inquiries and consultations",
      action: "mailto:hello@businesssolutions.com"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Free 15-min consultation",
      description: "Strategy session available",
      action: "#schedule"
    },
    {
      icon: MapPin,
      title: "Global Services",
      value: "Remote & On-site",
      description: "Serving businesses worldwide",
      action: null
    }
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Free consultation to understand your needs" },
    { step: "02", title: "Strategy", desc: "Detailed analysis and tailored proposal" },
    { step: "03", title: "Development", desc: "Agile implementation with regular updates" },
    { step: "04", title: "Launch", desc: "Deployment with ongoing support" }
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      
      <div className="container-professional relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          
          <h2 className="heading-section mb-8">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
              Next Project?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with custom solutions. Get in touch to discuss 
            your automation, development, and optimization needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                {info.action ? (
                  <a href={info.action} className="block">
                    <div className="card-premium text-center hover:shadow-xl">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-soft flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-3">{info.title}</h4>
                      <p className="text-accent font-semibold mb-2">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </a>
                ) : (
                  <div className="card-premium text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-soft flex items-center justify-center mx-auto mb-6">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-3">{info.title}</h4>
                    <p className="text-accent font-semibold mb-2">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="card-premium bg-gradient-to-br from-accent/5 to-coral/5 animate-fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Simple Process, Powerful Results</h3>
              <p className="text-muted-foreground text-lg">From initial consultation to successful implementation</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center relative">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                  )}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-soft text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="btn-hero">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
