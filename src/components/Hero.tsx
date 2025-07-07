
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToTrails = () => {
    const element = document.getElementById('trails');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1580654712603-eb43273aff33?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover Sri Lanka with <span className="text-emerald-400">Lanka Trails</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
          Explore cultural, coastal, highland, and wildlife trails tailored to your journey
        </p>
        <button 
          onClick={scrollToTrails}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in"
        >
          Find Your Trail
        </button>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white opacity-70" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
