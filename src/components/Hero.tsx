import React, { useEffect, useRef } from 'react';
import { ArrowDown, Linkedin, MessageCircle, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hassan Khaled
            <span className="block text-3xl md:text-5xl text-blue-600 mt-2">
              Mohamed
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Data Analyst & BI Developer | Turning Data into Insights
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            With 2 years of experience transforming complex data into actionable business insights 
            through powerful visualizations and comprehensive analytics solutions.
          </p>
        </div>

        {/* Social Links */}
        <div className="slide-in-left flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/hassan3411/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
          </a>
          
          <a
            href="https://wa.me/201142764930"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-green-600" />
          </a>
          
          <a
            href="mailto:hassan.khaled.othman341@gmail.com"
            className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <Mail className="w-6 h-6 text-gray-600 group-hover:text-gray-700" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="slide-in-right flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="fade-in animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
          <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;