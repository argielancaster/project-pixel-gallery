
import React from 'react';
import {
  Figma, Database, Server, Github, 
  Code2, Globe, Cpu, Cog, LayoutGrid,
  FileCode, MonitorSmartphone, Tablet
} from 'lucide-react';

// Tech logos with categories
const skillsData = {
  frontend: [
    { name: "HTML5", icon: Globe, color: "#E34F26" },
    { name: "CSS3", icon: FileCode, color: "#1572B6" },
    { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
    { name: "TypeScript", icon: Code2, color: "#3178C6" },
    { name: "React", icon: Code2, color: "#61DAFB" },
    { name: "Vue.js", icon: Code2, color: "#4FC08D" },
    { name: "Next.js", icon: Code2, color: "#000000" },
    { name: "Tailwind CSS", icon: Code2, color: "#06B6D4" }
  ],
  backend: [
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "Express", icon: Server, color: "#000000" },
    { name: "Django", icon: Server, color: "#092E20" },
    { name: "Ruby on Rails", icon: Server, color: "#CC0000" },
    { name: "PHP", icon: Server, color: "#777BB4" },
    { name: "GraphQL", icon: Server, color: "#E10098" }
  ],
  database: [
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "PostgreSQL", icon: Database, color: "#336791" },
    { name: "MySQL", icon: Database, color: "#4479A1" },
    { name: "Firebase", icon: Database, color: "#FFCA28" },
    { name: "Redis", icon: Database, color: "#DC382D" },
    { name: "Supabase", icon: Database, color: "#3ECF8E" }
  ],
  devops: [
    { name: "Git", icon: Github, color: "#F05032" },
    { name: "Docker", icon: Cpu, color: "#2496ED" },
    { name: "AWS", icon: Cpu, color: "#FF9900" },
    { name: "Vercel", icon: Cpu, color: "#000000" },
    { name: "Netlify", icon: Cpu, color: "#00C7B7" },
    { name: "CI/CD", icon: Cog, color: "#4285F4" }
  ],
  tools: [
    { name: "VS Code", icon: LayoutGrid, color: "#007ACC" },
    { name: "Figma", icon: Figma, color: "#F24E1E" },
    { name: "Adobe XD", icon: MonitorSmartphone, color: "#FF61F6" },
    { name: "Postman", icon: Tablet, color: "#FF6C37" },
    { name: "Jira", icon: LayoutGrid, color: "#0052CC" },
    { name: "Notion", icon: LayoutGrid, color: "#000000" }
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
              {skillsData.frontend.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="skill-item group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="skill-icon-container group-hover:border-white/50">
                        <Icon 
                          size={32} 
                          className="text-white/70 group-hover:text-transparent transition-all duration-300"
                          style={{ stroke: "currentColor", fill: "none" }}
                        />
                        <Icon 
                          size={32} 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ stroke: skill.color, fill: "none" }}
                        />
                      </div>
                      <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">Backend Development</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.backend.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="skill-item group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="skill-icon-container group-hover:border-white/50">
                        <Icon 
                          size={32} 
                          className="text-white/70 group-hover:text-transparent transition-all duration-300"
                          style={{ stroke: "currentColor", fill: "none" }}
                        />
                        <Icon 
                          size={32} 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ stroke: skill.color, fill: "none" }}
                        />
                      </div>
                      <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">Database & Storage</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.database.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="skill-item group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="skill-icon-container group-hover:border-white/50">
                        <Icon 
                          size={32} 
                          className="text-white/70 group-hover:text-transparent transition-all duration-300"
                          style={{ stroke: "currentColor", fill: "none" }}
                        />
                        <Icon 
                          size={32} 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ stroke: skill.color, fill: "none" }}
                        />
                      </div>
                      <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">DevOps & Deployment</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.devops.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="skill-item group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="skill-icon-container group-hover:border-white/50">
                        <Icon 
                          size={32} 
                          className="text-white/70 group-hover:text-transparent transition-all duration-300"
                          style={{ stroke: "currentColor", fill: "none" }}
                        />
                        <Icon 
                          size={32} 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ stroke: skill.color, fill: "none" }}
                        />
                      </div>
                      <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-xl font-bold mb-6 text-primary">Tools & Software</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.tools.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="skill-item group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="skill-icon-container group-hover:border-white/50">
                        <Icon 
                          size={32} 
                          className="text-white/70 group-hover:text-transparent transition-all duration-300"
                          style={{ stroke: "currentColor", fill: "none" }}
                        />
                        <Icon 
                          size={32} 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ stroke: skill.color, fill: "none" }}
                        />
                      </div>
                      <span className="mt-2 text-xs text-white/70 group-hover:text-white transition-all">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
