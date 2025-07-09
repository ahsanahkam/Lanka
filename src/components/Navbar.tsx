
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">Lanka Trails</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('trails')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Explore Trails
            </button>
            <button onClick={() => scrollToSection('stories')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Stories
            </button>
            <button onClick={() => scrollToSection('finder')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Plan Your Trip
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </button>
            <button onClick={() => window.location.href = '/admin'} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors">
              Admin
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('trails')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 w-full text-left">
                Explore Trails
              </button>
              <button onClick={() => scrollToSection('stories')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 w-full text-left">
                Stories
              </button>
              <button onClick={() => scrollToSection('finder')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 w-full text-left">
                Plan Your Trip
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 w-full text-left">
                Contact
              </button>
              <button onClick={() => window.location.href = '/admin'} className="block px-3 py-2 bg-emerald-600 text-white hover:bg-emerald-700 w-full text-left rounded-md mx-3 mt-2">
                Admin
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
