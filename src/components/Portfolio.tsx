import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Eye, BarChart3 } from 'lucide-react';

const Portfolio: React.FC = () => {
  const portfolioRef = useRef<HTMLSection>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      const elements = portfolioRef.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Sales Performance Dashboard',
      description: 'Comprehensive Power BI dashboard tracking sales metrics, regional performance, and forecasting trends across multiple product lines.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'SQL Server', 'DAX', 'Excel'],
      category: 'Business Intelligence',
      link: '#',
      features: [
        'Real-time sales tracking',
        'Geographic performance mapping',
        'Predictive analytics',
        'Mobile-responsive design'
      ]
    },
    {
      id: 2,
      title: 'Customer Analytics Platform',
      description: 'Advanced customer segmentation and behavior analysis dashboard providing insights into customer lifetime value and retention patterns.',
      image: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'Python', 'SQL', 'Azure'],
      category: 'Customer Analytics',
      link: '#',
      features: [
        'Customer segmentation analysis',
        'Churn prediction models',
        'Lifetime value calculations',
        'Interactive filtering'
      ]
    },
    {
      id: 3,
      title: 'Financial Reporting Suite',
      description: 'Automated financial reporting system generating monthly P&L statements, budget vs actual analysis, and cash flow projections.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'Excel', 'SQL', 'Power Query'],
      category: 'Financial Analytics',
      link: '#',
      features: [
        'Automated report generation',
        'Budget variance analysis',
        'Cash flow forecasting',
        'Multi-currency support'
      ]
    },
    {
      id: 4,
      title: 'Operational Efficiency Monitor',
      description: 'Real-time operational dashboard monitoring key performance indicators, resource utilization, and process efficiency metrics.',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'Tableau', 'SQL', 'Power Automate'],
      category: 'Operations',
      link: '#',
      features: [
        'Real-time KPI monitoring',
        'Resource utilization tracking',
        'Process optimization insights',
        'Alert notifications'
      ]
    },
    {
      id: 5,
      title: 'Market Research Dashboard',
      description: 'Comprehensive market analysis dashboard combining internal sales data with external market research to identify growth opportunities.',
      image: 'https://images.pexels.com/photos/7947660/pexels-photo-7947660.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'Python', 'API Integration', 'Excel'],
      category: 'Market Analysis',
      link: '#',
      features: [
        'Market trend analysis',
        'Competitive benchmarking',
        'Opportunity identification',
        'External data integration'
      ]
    },
    {
      id: 6,
      title: 'HR Analytics Dashboard',
      description: 'Employee performance and HR metrics dashboard tracking recruitment, retention, performance, and employee satisfaction across departments.',
      image: 'https://images.pexels.com/photos/7947678/pexels-photo-7947678.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'Excel', 'Survey Integration', 'SQL'],
      category: 'Human Resources',
      link: '#',
      features: [
        'Employee performance tracking',
        'Recruitment analytics',
        'Retention analysis',
        'Satisfaction surveys integration'
      ]
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" ref={portfolioRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my collection of data analytics projects and business intelligence dashboards
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 m-2 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in group ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Eye size={16} />
                      </button>
                      <a
                        href={project.link}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <BarChart3 size={16} className="inline mr-2" />
                    View Details
                  </button>
                  <a
                    href={project.link}
                    className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {project.category}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-gray-600 p-2"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href={project.link}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="inline mr-2" />
                      View Live Dashboard
                    </a>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;