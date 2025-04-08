
import React from 'react';
import ProjectCard from './ProjectCard';

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
    delay: 0.2
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task manager with drag-and-drop functionality and team collaboration features.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    delay: 0.4
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers with data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    delay: 0.6
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A beautiful weather app with 7-day forecast, location search, and responsive design.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["React Native", "Redux", "Weather API", "Geolocation"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    delay: 0.8
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black/30">
      <div className="section-container">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
