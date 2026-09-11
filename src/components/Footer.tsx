import React from 'react';
import { Heart, Linkedin, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Hassan Khaled Mohamed</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Data Analyst & BI Developer specializing in transforming complex data 
              into actionable business insights through powerful visualizations and analytics.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/hassan3411/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/201142764930"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:hassan.khaled.othman341@gmail.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <a 
                  href="mailto:hassan.khaled.othman341@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  hassan.khaled.othman341@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-3 text-gray-400" />
                <a 
                  href="tel:01142764930"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  01142764930
                </a>
              </div>
              <div className="text-gray-300 text-sm">
                Available for remote work and consultations
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Hassan Khaled Mohamed. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>for turning data into insights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;