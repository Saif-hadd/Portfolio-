import React, { useEffect, useRef, useState } from 'react';
import { 
  Database, 
  Server, 
  Cloud, 
  Code, 
  Settings,
  Sparkles,
  Zap,
  Cpu,
  Shield
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.getAttribute('data-skill-index') || '0');
            setAnimatedSkills(prev => new Set([...prev, skillIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('.skill-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
  {
    title: 'Frontend Mastery',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'TypeScript', level: 80, color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600' },
      { name: 'Tailwind CSS', level: 82, color: 'from-cyan-400 to-teal-500' },
      { name: 'Flutter', level: 80, color: 'from-blue-400 to-indigo-500' }
    ]
  },
  {
    title: 'Backend Excellence',
    icon: Server,
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', level: 100, color: 'from-green-400 to-green-600' },
      { name: 'NestJS', level: 88, color: 'from-red-400 to-red-600' },
      { name: 'Spring Boot', level: 75, color: 'from-green-500 to-emerald-500' },
      { name: 'Express.js', level: 98, color: 'from-gray-400 to-gray-600' },
      { name: 'GraphQL', level: 82, color: 'from-pink-400 to-purple-500' }
    ]
  },
  {
    title: 'Database Mastery',
    icon: Database,
    gradient: 'from-green-500 to-teal-500',
    skills: [
      { name: 'PostgreSQL', level: 95, color: 'from-blue-500 to-blue-700' },
      { name: 'MongoDB', level: 88, color: 'from-green-500 to-green-700' },
      { name: 'MySQL', level: 82, color: 'from-orange-400 to-orange-600' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    gradient: 'from-orange-500 to-red-500',
    skills: [
      { name: 'AWS', level: 86, color: 'from-orange-400 to-orange-600' },
      { name: 'Azure', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'Docker', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'Kubernetes', level: 85, color: 'from-blue-600 to-purple-600' },
      { name: 'Terraform', level: 90, color: 'from-purple-500 to-indigo-500' },
      { name: 'Ansible', level: 85, color: 'from-red-400 to-red-600' },
      { name: 'Prometheus', level: 82, color: 'from-orange-400 to-red-500' },
      { name: 'Grafana', level: 80, color: 'from-orange-500 to-yellow-500' }
    ]
  },
  {
    title: 'AI & Innovation',
    icon: Cpu,
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Machine Learning', level: 85, color: 'from-purple-400 to-pink-500' },
      { name: 'OpenAI API', level: 88, color: 'from-green-400 to-teal-500' },
      { name: 'TensorFlow', level: 80, color: 'from-orange-400 to-red-500' },
      { name: 'Python', level: 87, color: 'from-blue-400 to-green-500' },
      { name: 'Data Science', level: 82, color: 'from-indigo-400 to-purple-500' }
    ]
  },
  {
    title: 'Security & Tools',
    icon: Shield,
    gradient: 'from-red-500 to-pink-500',
    skills: [
      { name: 'DevSecOps', level: 84, color: 'from-green-500 to-emerald-700' },
      { name: 'OWASP', level: 80, color: 'from-yellow-500 to-orange-600' },
      { name: 'SonarQube', level: 83, color: 'from-indigo-500 to-purple-700' },
      { name: 'Docker Security', level: 82, color: 'from-blue-600 to-cyan-600' },
      { name: 'Kubernetes Security', level: 76, color: 'from-teal-500 to-green-700' },
      { name: 'HashiCorp Vault', level: 74, color: 'from-purple-500 to-pink-600' },
      { name: 'Snyk', level: 81, color: 'from-pink-500 to-rose-700' },
      { name: 'Trivy', level: 89, color: 'from-cyan-500 to-teal-700' }
    ]
  }
];


  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden" id="skills">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Zap className="text-yellow-400 mr-4 animate-pulse" size={24} />
            <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">Technical Arsenal</span>
            <Zap className="text-yellow-400 ml-4 animate-pulse" size={24} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Cutting-Edge Expertise
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-lg blur-xl"></div>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit for building the future of technology
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-card group relative"
              data-skill-index={categoryIndex}
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-semibold text-lg">{skill.name}</span>
                        <span className={`font-bold text-lg bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ 
                            width: animatedSkills.has(categoryIndex) ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${category.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '25+', label: 'Technologies Mastered', icon: Code },
            { number: '5+', label: 'Projects Completed', icon: Zap },
            { number: '2+', label: 'Cloud Platforms', icon: Cloud },
            { number: '∞', label: 'Learning Never Stops', icon: Sparkles }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={24} className="text-blue-400" />
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;