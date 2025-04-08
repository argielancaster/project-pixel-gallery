
import React from 'react';

// Sample skill data - replace with your own
const skillsData = {
  frontend: [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", 
    "Tailwind CSS", "Sass", "Redux", "GraphQL", "Responsive Design"
  ],
  backend: [
    "Node.js", "Express", "Django", "Ruby on Rails", "PHP", "Flask",
    "RESTful APIs", "GraphQL", "Microservices"
  ],
  database: [
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Supabase"
  ],
  devops: [
    "Git", "GitHub", "GitLab", "Docker", "Kubernetes", "CI/CD Pipelines",
    "AWS", "Vercel", "Netlify", "DigitalOcean"
  ],
  tools: [
    "VS Code", "Figma", "Adobe XD", "Postman", "Jira", "Notion"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="bg-black/50">
      <div className="section-container">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 text-primary">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.frontend.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4 text-primary">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.backend.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-4 text-primary">Database & Storage</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.database.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-bold mb-4 text-primary">DevOps & Deployment</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.devops.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-xl font-bold mb-4 text-primary">Tools & Software</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
