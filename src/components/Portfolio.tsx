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
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-soft-gray">
      <div className="container-professional max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-charcoal">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light">
            A curated collection of recent projects
          </p>
        </div>

        {/* Image Grid - Full width on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 -mx-4 sm:mx-0">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#portfolio"
              className="group relative overflow-hidden bg-white aspect-[16/10] sm:aspect-[4/3] block"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 sm:bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
              </div>

              {/* Overlay Content - Always visible on mobile */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white/80 text-xs sm:text-sm font-light mb-1 sm:mb-2 tracking-wide uppercase">
                  {project.category}
                </p>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Link to All Projects */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <a href="/apps" className="text-charcoal hover:text-accent font-light text-xs sm:text-sm tracking-wide transition-colors inline-flex items-center gap-2 border-b border-charcoal/20 hover:border-accent pb-1">
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;