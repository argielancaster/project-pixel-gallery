
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  delay
}) => {
  return (
    <div 
      className="project-card opacity-0 animate-fade-in bg-black/30 border border-white/10" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="project-image w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 glow-text">{title}</h3>
        
        <div className="mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="flex space-x-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-button text-sm py-2"
            >
              <ExternalLink className="mr-2 h-4 w-4 inline" />
              Live Demo
            </a>
          )}
          
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-button text-sm py-2 bg-white/5"
            >
              <Github className="mr-2 h-4 w-4 inline" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
