
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-white">Hello, I'm</span>
            <span className="text-primary block mt-2">Your Name</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-300 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Full Stack Developer
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I build exceptional digital experiences with modern technologies. Focused on creating responsive, user-friendly applications that solve real problems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex space-x-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
