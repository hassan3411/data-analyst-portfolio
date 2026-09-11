import React, { useEffect, useRef } from 'react';
import { BarChart3, Database, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Power BI', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'Excel', level: 95 },
    { name: 'Python', level: 80 },
    { name: 'Tableau', level: 75 },
    { name: 'Data Modeling', level: 88 },
  ];

  const highlights = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: 'Data Visualization',
      description: 'Creating compelling dashboards and reports that tell meaningful stories from complex datasets.'
    },
    {
      icon: <Database className="w-8 h-8 text-teal-600" />,
      title: 'Database Management',
      description: 'Expertise in SQL, data modeling, and optimizing database performance for analytics.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: 'Business Intelligence',
      description: 'Developing BI solutions that drive strategic decision-making and business growth.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Stakeholder Collaboration',
      description: 'Working closely with business teams to understand requirements and deliver insights.'
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate data professional with a strong foundation in analytics, 
            business intelligence, and data-driven storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="slide-in-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                With 2 years of hands-on experience in data analysis and business intelligence, 
                I specialize in transforming raw data into actionable insights that drive business success.
              </p>
              
              <p className="mb-6">
                My expertise spans across various tools and technologies including Power BI, SQL, 
                Excel, and Python. I have a proven track record of creating comprehensive dashboards, 
                performing complex data analysis, and collaborating with cross-functional teams 
                to deliver data-driven solutions.
              </p>
              
              <p className="mb-8">
                I'm passionate about uncovering hidden patterns in data and presenting them in 
                visually compelling ways that enable stakeholders to make informed decisions quickly and confidently.
              </p>
            </div>

            {/* Skills */}
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h4>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="slide-in-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">What I Bring</h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-md">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center bg-teal-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;