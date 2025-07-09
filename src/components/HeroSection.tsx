
import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Software Developer & Data Analyst";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950" />
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 3D Rotating Cube */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-20 animate-spin-slow" />
            <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-40 animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg opacity-60 animate-bounce" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          PAVITHRA M V
        </h1>

        <div className="text-2xl md:text-3xl text-purple-300 mb-8 h-12 flex items-center justify-center">
          <span className="font-mono">
            {text}
            {showCursor && <span className="animate-blink">|</span>}
          </span>
        </div>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Detail-oriented Software Developer skilled in designing efficient algorithms, data transformations, 
          and scalable solutions. Proficient in multiple programming languages and tools, committed to 
          driving organizational success as a collaborative team player.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:pavithramv064@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </a>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 border-2 border-purple-500 rounded-full text-purple-300 font-semibold hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            View Projects
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/Pavithramv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-purple-800/50 rounded-full hover:bg-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/pavithra-mv-086250250/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-purple-800/50 rounded-full hover:bg-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="tel:+916361009538"
            className="p-3 bg-purple-800/50 rounded-full hover:bg-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            <Phone size={24} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-purple-300 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
