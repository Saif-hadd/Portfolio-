import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Zap, MessageSquare, Dumbbell, Image, Sparkles, Star, TrendingUp } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI Vision Studio',
      subtitle: 'Next-Gen Image Generation Platform',
      description: 'Revolutionary AI-powered image generation platform that rivals Midjourney and DALL-E. Features advanced prompt engineering, style transfer algorithms, and ultra-high resolution output with real-time preview capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express.js', 'OpenAI API', 'MongoDb', 'Cloudinary'],
      features: [
        "AI-powered image generation inspired by DALL·E",
        "Full Stack MERN architecture (MongoDB, Express.js, React, Node.js)",
        "Cloudinary integration for secure image storage and sharing",
        "User-friendly interface for creating and viewing generated images",
        "Deployment via Render for smooth and accessible hosting",
        "Real-time image generation feedback with loading indicators",
        "Download and share generated images functionality"
      ],
      metrics: {
        users: '100+',
        images: '+100',
        rating: '4.9/5'
      },
      github: 'https://github.com/Saif-hadd/AI-Image-Generation-App',
      demo: '#',
      icon: Image,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      featured: true
    },
    {
      title: 'FitTrack Universe',
      subtitle: 'Holistic Fitness Ecosystem',
      description: 'Comprehensive fitness platform combining workout planning, nutrition tracking, social features, and AI-powered personal training. Built with Flutter for seamless cross-platform experience.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'NestJS', 'PostgreSQL', 'Firebase', 'Google Cloud', 'TensorFlow', 'WebRTC'],
      features: [
        "Integration of two external APIs: ExerciseDB and YouTube API",
        "Exercise browsing with category and muscle group filters",
        "Advanced search functionality by equipment, body part, or name",
        "Responsive pagination for smoother navigation across exercises",
        "Display of related YouTube workout videos for each exercise",
        "Enhanced user experience through dynamic UI and interactive components",
      ],
      metrics: {
        users: '100+',
        workouts: '100+',
        rating: '4.8/5'
      },
      github: 'https://github.com/Saif-hadd/FitTrack-Universe/',
      demo: '#',
      icon: Dumbbell,
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      featured: true
    },
   
    {
      title: 'CloudOps Command Center',
      subtitle: 'Plateforme DevOps automatisée pour la gestion et le déploiement cloud',
      description: 'Automated deployment pipeline for full-stack apps using Docker, Ansible, and Terraform. CI/CD via GitHub Actions, infrastructure on Azure, and monitoring with Grafana — enabling fast, secure, and observable releases.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Terraform', 'Ansible', 'Docker', 'Prometheus', 'Grafana', 'GithubActions', 'Azure'],
      features: [
        "Infrastructure provisioning on Azure using Terraform (Infrastructure as Code)",
        "Automated deployment of Node.js, React, and PostgreSQL services with Ansible",
        "Secure CI/CD pipeline setup using GitHub Actions",
        "Integration of unit testing, static code analysis, and vulnerability scanning in CI/CD",
        "Real-time monitoring with Prometheus and custom dashboards in Grafana",
        "Network and VM security configuration on Azure (firewalls, SSH access, etc.)",
      ],
      metrics: {
        uptime: '99.99%',
        cost_saved: '40%'
      },
      github: 'https://github.com/Saif-hadd/infra-as-code-automation',
      demo: '#',
      icon: Zap,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      featured: true
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden" id="projects">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-yellow-400 mr-4 animate-pulse" size={24} />
            <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">Portfolio Showcase</span>
            <Star className="text-yellow-400 ml-4 animate-pulse" size={24} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Innovation Gallery
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-lg blur-xl"></div>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforming visionary concepts into production-ready solutions that impact millions
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-16 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className={`animate-on-scroll group relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Project icon */}
                  <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center backdrop-blur-sm`}>
                    <project.icon size={28} className="text-white" />
                  </div>

                  {/* Metrics overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-white font-bold text-lg">{value}</div>
                        <div className="text-gray-300 text-xs capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="text-yellow-400" size={20} />
                    <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Featured Project</span>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-2">{project.title}</h3>
                  <p className={`text-xl font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp size={20} className="text-green-400" />
                    Key Innovations
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full text-sm font-medium hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="group/btn flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={20} />
                    <span className="font-semibold">Source Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className={`group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center`}>
                    <project.icon size={20} className="text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-400 rounded-full text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-white rounded-xl hover:bg-slate-600/50 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg`}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;