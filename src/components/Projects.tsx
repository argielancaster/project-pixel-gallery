
import React, { useEffect, useRef } from 'react';
import { Eye, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample project data - replace with your own
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task manager with drag-and-drop functionality and team collaboration features.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers with data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A beautiful weather app with 7-day forecast, location search, and responsive design.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["React Native", "Redux", "Weather API", "Geolocation"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  }
];

const Projects = () => {
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-x-0', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-2">
          <Badge 
            variant="outline" 
            className="border-white/20 text-white font-medium px-4 py-1.5 rounded-full"
          >
            Featured projects
          </Badge>
        </div>
        
        <h2 className="text-6xl font-bold mb-8 text-white">Projects</h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mb-16">
          Helping businesses showcase their work with modern web applications that
          captivate and convert effectively.
        </p>
        
        <div className="flex flex-col space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => {
                if (el) projectRefs.current[index] = el;
              }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center transition-all duration-700 transform ${index % 2 === 0 ? '-translate-x-full' : 'translate-x-full'} opacity-0`}
            >
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                
                <p className="text-gray-400">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-black border border-white/20 text-white text-sm px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glow-button rounded-full px-6 py-2 text-sm flex items-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      See Project
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-white/20 text-white rounded-full px-6 py-2 text-sm flex items-center gap-2 hover:bg-white/5 transition-all"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
