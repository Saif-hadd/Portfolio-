import React, { useEffect, useRef } from 'react';
import { Code, Server, Cloud, Zap, Sparkles, Rocket, Brain, Heart, User, Camera } from 'lucide-react';
import maPhoto from '../assets/ma-photo.jpg';



const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Mastery',
      description: 'Architecting seamless experiences from pixel-perfect UIs to robust backend systems',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0s'
    },
    {
      icon: Server,
      title: 'DevOps Excellence',
      description: 'Orchestrating cloud infrastructure with precision, automation, and scalability at heart',
      gradient: 'from-purple-500 to-pink-500',
      delay: '0.2s'
    },
    {
      icon: Cloud,
      title: 'Cloud Innovation',
      description: 'Designing next-generation solutions that scale effortlessly across global infrastructure',
      gradient: 'from-green-500 to-teal-500',
      delay: '0.4s'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leveraging artificial intelligence to create intelligent, adaptive applications',
      gradient: 'from-orange-500 to-red-500',
      delay: '0.6s'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden" id="about">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-yellow-400 mr-4 animate-pulse" size={24} />
            <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">About Me</span>
            <Sparkles className="text-yellow-400 ml-4 animate-pulse" size={24} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-lg blur-xl"></div>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Profile Photo Section */}
        <div className="flex justify-center mb-16 animate-on-scroll">
          <div className="relative group">
            {/* Main photo container */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-reverse"></div>
              <div className="absolute inset-8 rounded-full border-2 border-cyan-500/30 animate-spin-slow"></div>
              
              {/* Photo frame with gradient border */}
              <div className="absolute inset-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-full p-1">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full overflow-hidden relative">
                  {/* Placeholder for actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center relative">
                    {/* You can replace this with an actual image */}
                    <img 
                      src={maPhoto}
                      alt="Saif Eddine - Full Stack & DevOps Engineer"
                      className="w-full h-full object-cover rounded-full"
                    />
                    
                    {/* Overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float">
                <Rocket size={24} className="text-blue-400" />
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Heart size={24} className="text-purple-400" />
              </div>
              <div className="absolute top-1/2 right-4 w-10 h-10 bg-cyan-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Code size={20} className="text-cyan-400" />
              </div>
              <div className="absolute top-1/2 left-4 w-10 h-10 bg-green-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
                <Brain size={20} className="text-green-400" />
              </div>

              {/* Photo upload hint (for development) */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                  <Camera size={16} className="text-blue-400" />
                  <span className="text-gray-300 text-sm">Professional Photo</span>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Professional intro */}
          <div className="animate-on-scroll">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-blue-400" size={24} />
                <h3 className="text-2xl font-bold text-white">Saif Eddine</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">visionary engineer</span> with over 1 years of experience transforming complex challenges into elegant, scalable solutions. My journey began with an insatiable curiosity for how digital systems work, evolving into a passion for creating technology that makes a difference.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Today, I specialize in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">end-to-end innovation</span> – from designing intuitive user experiences to architecting cloud-native infrastructures that scale globally. I bridge the gap between imagination and implementation.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                When I'm not crafting code, you'll find me exploring emerging technologies, contributing to open-source communities, and mentoring the next generation of developers. I believe in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 font-semibold">technology with purpose</span>.
              </p>
            </div>
          </div>
          
          {/* Stats and achievements */}
          <div className="space-y-8 animate-on-scroll">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '10+', label: 'Projects Delivered' },
                { number: '1+', label: 'Years Experience' },
                { number: '20+', label: 'Users Impacted' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-yellow-400" />
                Quick Facts
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Location', value: 'Tunisia, Sfax' },
                  { label: 'Specialization', value: 'Full Stack & DevOps' },
                  { label: 'Passion', value: 'AI & Cloud Innovation' },
                  { label: 'Philosophy', value: 'Code with Purpose' }
                ].map((fact, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{fact.label}:</span>
                    <span className="text-white font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative"
              style={{ animationDelay: item.delay }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={32} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;