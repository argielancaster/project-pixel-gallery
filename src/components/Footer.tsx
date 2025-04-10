
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-white hover:glow-text transition-all">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white hover:glow-text transition-all">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white hover:glow-text transition-all">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white hover:glow-text transition-all">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
