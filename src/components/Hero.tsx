import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Zap } from 'lucide-react';
import cvFile from '../assets/saif-eddine-cv.pdf';


const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const words = ['Full Stack Developer', 'DevOps Engineer', 'Cloud Architect', 'Innovation Catalyst'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  // Scroll to about section
  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Download resume function
 const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = cvFile;
  link.download = 'Saif_Eddine_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  // Social media links
  const handleGithubClick = () => {
    window.open('https://github.com/Saif-hadd', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/saif-eddine-keraa-2838a71b9/', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:alex.haddedseif746@gmail.com?subject=Portfolio Contact&body=Hello Alex, I found your portfolio and would like to connect...';
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Interactive Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Interactive cursor glow */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg animate-float"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading with advanced animations */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="text-yellow-400 mr-4 animate-pulse" size={32} />
              <span className="text-yellow-400 font-semibold text-lg tracking-wider">MY PORTFOLIO</span>
              <Sparkles className="text-yellow-400 ml-4 animate-pulse" size={32} />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
                Saif Eddine
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-lg blur opacity-20 animate-pulse"></div>
            </h1>
            
            <div className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 h-16 flex items-center justify-center">
              <span className="text-gray-300 mr-4">I craft</span>
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                  {text}
                </span>
                <span className="animate-pulse text-blue-400 ml-1">|</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-lg blur-lg"></div>
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Transforming visionary ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                production-ready solutions
              </span>{' '}
              with cutting-edge technologies and architectural excellence.
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={handleExploreClick}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <Zap size={24} className="group-hover:animate-pulse" />
                <span>Explore My Universe</span>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>
            
            <button 
              onClick={handleDownloadResume}
              className="group relative px-10 py-4 border-2 border-white/20 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              <div className="flex items-center gap-3">
                <Download size={24} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </div>
            </button>
          </div>

          {/* Enhanced social links */}
          <div className="flex justify-center gap-8 mb-20">
            <button
              onClick={handleGithubClick}
              className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:text-gray-300"
              aria-label="GitHub"
            >
              <Github size={28} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={handleLinkedinClick}
              className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={handleEmailClick}
              className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:text-purple-400"
              aria-label="Email"
            >
              <Mail size={28} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Animated scroll indicator */}
          <div className="animate-bounce">
            <div className="relative">
              <ChevronDown size={40} className="mx-auto text-white/60 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;