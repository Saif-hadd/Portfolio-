import React, { useEffect, useRef } from 'react';
import { Award, CheckCircle, ExternalLink, Shield, Cloud, Server, Network, BarChart3, Lock, Sparkles } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Red Hat Certified System Administrator (RHCSA)',
      issuer: 'KodeKloud ',
      date: '2025',
      icon: Server,
      description: 'Advanced Linux system administration and enterprise infrastructure management',
      skills: ['Linux Administration', 'System Configuration', 'Security', 'Troubleshooting'],
      gradient: 'from-red-500 to-orange-500',
      featured: true
    },
    
    {
      title: 'CompTIA Security+',
      issuer: 'KodeKloud ',
      date: '2025',
      icon: Shield,
      description: 'Comprehensive cybersecurity fundamentals and best practices',
      skills: ['Network Security', 'Risk Management', 'Cryptography', 'Incident Response'],
      gradient: 'from-blue-500 to-indigo-500',
      featured: true
    },
    {
      title: 'Introduction to Ethical Hacking and IoT Cybersecurity/IoT Equipment Penetration Test',
      issuer: 'IT-CyberSec Expert',
      date: '2025',
      icon: Shield,
      description: 'Fundamentals of ethical hacking, IoT security, and penetration testing for connected devices',
      skills: ['Ethical Hacking', 'IoT Security', 'Penetration Testing', 'Cybersecurity'],
      gradient: 'from-green-500 to-blue-500',
      featured: false
},

    {
      title: 'Ansible Automation',
      issuer: 'KodeKloud ',
      date: '2025',
      icon: Server,
      description: 'Infrastructure automation and configuration management expertise',
      skills: ['Ansible Playbooks', 'Automation', 'Configuration Management', 'YAML'],
      gradient: 'from-red-500 to-pink-500',
      featured: false
    },
    {
      title: 'AWS Certified: Amazon ECS Specialty',
      issuer: 'KodeKloud ',
      date: '2025',
      icon: Cloud,
      description: 'Container orchestration and microservices deployment on AWS ECS',
      skills: ['ECS', 'Docker', 'Fargate', 'Container Security', 'Load Balancing'],
      gradient: 'from-orange-400 to-red-500',
      featured: false
    },
    {
      title: 'Grafana Loki',
      issuer: 'KodeKloud ',
      date: '2025',
      icon: BarChart3,
      description: 'Advanced monitoring, observability, and log aggregation with Grafana Loki',
      skills: ['Grafana', 'Loki', 'Prometheus', 'Monitoring', 'Alerting'],
      gradient: 'from-purple-500 to-blue-500',
      featured: false
    },
    {
      title: 'Network  (Certiport)',
      issuer: 'Certiport',
      date: '2025',
      icon: Network,
      description: 'Network fundamentals, routing, switching, and network security',
      skills: ['Networking', 'Routing', 'Switching', 'Network Security', 'Troubleshooting'],
      gradient: 'from-cyan-500 to-teal-500',
      featured: false
    }
  ];

  const featuredCerts = certifications.filter(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden" id="certifications">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <Award className="text-yellow-400 mr-4 animate-pulse" size={24} />
            <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">Professional Credentials</span>
            <Award className="text-yellow-400 ml-4 animate-pulse" size={24} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Certifications & Expertise
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-lg blur-xl"></div>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Industry-recognized certifications validating expertise across cloud, security, automation, and infrastructure
          </p>
        </div>

        {/* Featured certifications */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredCerts.map((cert, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 h-full">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="text-yellow-400" size={16} />
                      <span className="text-yellow-400 text-xs font-semibold tracking-wider uppercase">Featured</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent mb-1`}>
                      {cert.issuer}
                    </p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{cert.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Key Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full text-sm font-medium hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-white hover:text-gray-300 font-semibold transition-colors group/btn">
                  <span>View Certificate</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${cert.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Other certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCerts.map((cert, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon size={20} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {cert.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent mb-1`}>
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-xs mb-3">{cert.date}</p>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-gray-400 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-gray-500 rounded text-xs">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  <span>View</span>
                  <ExternalLink size={12} />
                </button>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${cert.gradient} rounded-2xl blur opacity-0 group-hover:opacity-15 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '5+', label: 'Active Certifications', icon: Award },
            { number: '3', label: 'Cloud Platforms', icon: Cloud },
            { number: '100%', label: 'Industry Recognition', icon: CheckCircle },
            { number: '2025', label: 'Latest Achievement', icon: Sparkles }
          ].map((stat, index) => (
            <div key={index} className="text-center group animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
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

export default Certifications;
