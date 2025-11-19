import automationDashboard from '../assets/automation-dashboard.jpg';
import automationService from '../assets/automation-service.jpg';
import saasService from '../assets/saas-service.jpg';
import websiteService from '../assets/website-service.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise Automation Platform",
      category: "Business Automation",
      image: automationDashboard
    },
    {
      title: "Financial SaaS Application",
      category: "Custom Software",
      image: saasService
    },
    {
      title: "E-commerce Transformation",
      category: "Digital Experience",
      image: websiteService
    },
    {
      title: "Workflow Optimization Suite",
      category: "Process Automation",
      image: automationService
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-soft-gray">
      <div className="container-professional max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-charcoal">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            A curated collection of recent projects
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#portfolio"
              className="group relative overflow-hidden bg-white aspect-[4/3] block"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white/80 text-sm font-light mb-2 tracking-wide uppercase">
                  {project.category}
                </p>
                <h3 className="font-serif text-3xl text-white">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Link to All Projects */}
        <div className="text-center mt-16">
          <a href="/apps" className="text-charcoal hover:text-accent font-light text-sm tracking-wide transition-colors inline-flex items-center gap-2 border-b border-charcoal/20 hover:border-accent pb-1">
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;