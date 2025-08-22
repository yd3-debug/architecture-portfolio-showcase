import { ExternalLink, Github, Smartphone, Globe, Database, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  const apps = [
    {
      title: "Enterprise Resource Planning Suite",
      category: "Web Application",
      description: "Comprehensive ERP system built for manufacturing companies to manage inventory, production, and supply chain operations with real-time analytics and reporting.",
      icon: BarChart3,
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      features: ["Real-time Dashboards", "Inventory Management", "Supply Chain Tracking", "Advanced Analytics"],
      status: "Production",
      users: "5,000+"
    },
    {
      title: "Financial Planning Mobile App",
      category: "Mobile Application",
      description: "AI-powered financial planning application that helps users manage investments, track expenses, and plan retirement with personalized recommendations.",
      icon: Smartphone,
      tech: ["React Native", "Python", "MongoDB", "TensorFlow"],
      features: ["AI Recommendations", "Portfolio Tracking", "Risk Analysis", "Goal Planning"],
      status: "Production",
      users: "50,000+"
    },
    {
      title: "Customer Relationship Management Platform",
      category: "SaaS Platform",
      description: "Modern CRM platform designed for B2B companies with advanced lead scoring, pipeline management, and customer journey analytics.",
      icon: Globe,
      tech: ["Vue.js", "Laravel", "MySQL", "ElasticSearch"],
      features: ["Lead Scoring", "Pipeline Management", "Email Automation", "Customer Analytics"],
      status: "Production",
      users: "10,000+"
    },
    {
      title: "Supply Chain Analytics Dashboard",
      category: "Data Platform",
      description: "Real-time supply chain visibility platform that provides predictive analytics and optimization recommendations for global logistics operations.",
      icon: Database,
      tech: ["Angular", "Django", "Apache Kafka", "Apache Spark"],
      features: ["Predictive Analytics", "Real-time Tracking", "Cost Optimization", "Risk Monitoring"],
      status: "Production",
      users: "2,000+"
    },
    {
      title: "Digital Banking Platform",
      category: "FinTech Application",
      description: "Next-generation digital banking platform with advanced security features, micro-services architecture, and seamless user experience.",
      icon: Globe,
      tech: ["React", "Spring Boot", "PostgreSQL", "Kubernetes"],
      features: ["Multi-factor Authentication", "Real-time Transactions", "Investment Tools", "Credit Scoring"],
      status: "Beta",
      users: "25,000+"
    },
    {
      title: "Workforce Management System",
      category: "Enterprise Software",
      description: "Intelligent workforce management system with AI-powered scheduling, performance tracking, and compliance management for large organizations.",
      icon: BarChart3,
      tech: ["Svelte", "FastAPI", "Redis", "Docker"],
      features: ["AI Scheduling", "Performance Metrics", "Compliance Tracking", "Resource Optimization"],
      status: "Production",
      users: "15,000+"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Featured Applications
          </h2>
          <p className="text-professional max-w-3xl mx-auto">
            A preview of enterprise-grade applications I've designed and developed. 
            <a href="/apps" className="text-primary hover:underline ml-1">View all applications →</a>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {apps.slice(0, 4).map((app, index) => (
            <div key={index} className="card-elevated group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-soft rounded-xl flex items-center justify-center">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{app.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{app.category}</span>
                      <span className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          app.status === 'Production' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        {app.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors duration-200">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{app.description}</p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-semibold text-primary">{app.users} Active Users</span>
                <span className="text-xs text-muted-foreground">Enterprise Grade</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-professional mb-8">
            Want to see all applications and detailed case studies?
          </p>
          <a href="/apps" className="btn-hero mr-4">
            View All Applications
          </a>
          <button className="btn-professional">
            Technical Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;