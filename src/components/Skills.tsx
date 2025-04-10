
import React from 'react';

// Tech logos with categories and image paths
const skillsData = {
  frontend: [
    { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Vue.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "#4FC08D" },
    { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
    { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" }
  ],
  backend: [
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
    { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
    { name: "Ruby on Rails", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg", color: "#CC0000" },
    { name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg", color: "#777BB4" },
    { name: "GraphQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E10098" }
  ],
  database: [
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
    { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#DC382D" },
    { name: "Supabase", image: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg", color: "#3ECF8E" }
  ],
  devops: [
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
    { name: "Vercel", image: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", color: "#000000" },
    { name: "Netlify", image: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg", color: "#00C7B7" },
    { name: "CI/CD", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#4285F4" }
  ],
  tools: [
    { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    { name: "Adobe XD", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", color: "#FF61F6" },
    { name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", color: "#FF6C37" },
    { name: "Jira", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", color: "#0052CC" },
    { name: "Notion", image: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg", color: "#000000" }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">Frontend Development</h3>
            <div className="grid grid-cols-4 gap-4">
              {skillsData.frontend.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item group"
                >
                  <div className="flex flex-col items-center">
                    <div className="skill-icon-container group-hover:border-white/50 overflow-hidden">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-[13.5px] h-[13.5px] sm:w-[13.5px] sm:h-[13.5px] md:w-[13.5px] md:h-[13.5px] grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">Backend Development</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.backend.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item group"
                >
                  <div className="flex flex-col items-center">
                    <div className="skill-icon-container group-hover:border-white/50 overflow-hidden">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-[13.5px] h-[13.5px] sm:w-[13.5px] sm:h-[13.5px] md:w-[13.5px] md:h-[13.5px] grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">Database & Storage</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.database.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item group"
                >
                  <div className="flex flex-col items-center">
                    <div className="skill-icon-container group-hover:border-white/50 overflow-hidden">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-[13.5px] h-[13.5px] sm:w-[13.5px] sm:h-[13.5px] md:w-[13.5px] md:h-[13.5px] grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">DevOps & Deployment</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.devops.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item group"
                >
                  <div className="flex flex-col items-center">
                    <div className="skill-icon-container group-hover:border-white/50 overflow-hidden">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-[13.5px] h-[13.5px] sm:w-[13.5px] sm:h-[13.5px] md:w-[13.5px] md:h-[13.5px] grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">Tools & Software</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.tools.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item group"
                >
                  <div className="flex flex-col items-center">
                    <div className="skill-icon-container group-hover:border-white/50 overflow-hidden">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-[13.5px] h-[13.5px] sm:w-[13.5px] sm:h-[13.5px] md:w-[13.5px] md:h-[13.5px] grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
