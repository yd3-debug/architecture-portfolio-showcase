import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@businesssolutions.com",
      description: "Project inquiries and consultations",
      action: "mailto:hello@businesssolutions.com"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "15-minute consultation",
      description: "Free strategy session available",
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

  return (
    <section id="contact" className="section-padding">
      <div className="container-professional">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section mb-6">
            Ready to Start Your
            <span className="gradient-text"> Next Project?</span>
          </h2>
          <p className="text-professional max-w-2xl mx-auto">
            Transform your business operations with custom solutions. Get in touch to discuss 
            your automation, development, and optimization needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {info.action ? (
                  <a
                    href={info.action}
                    className="block card-elevated hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                    <p className="text-primary font-semibold mb-2">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </a>
                ) : (
                  <div className="card-elevated">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                    <p className="text-primary font-semibold mb-2">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="card-elevated bg-gradient-to-br from-primary/5 to-primary-soft/5 border-primary/20 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Simple Process, Powerful Results</h3>
              <p className="text-muted-foreground">From initial consultation to successful implementation</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Initial Consultation", desc: "Free 15-minute strategy session" },
                { step: "02", title: "Project Assessment", desc: "Detailed analysis and proposal" },
                { step: "03", title: "Development", desc: "Agile implementation process" },
                { step: "04", title: "Launch & Support", desc: "Deployment with ongoing assistance" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;