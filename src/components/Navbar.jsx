
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    padding: '1rem 0',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
    transition: 'all 0.3s ease'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#10b981',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    padding: '0.5rem',
    borderRadius: '0.5rem'
  };

  const menuStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem'
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
    padding: '1rem 0',
    listStyle: 'none',
    margin: 0,
    borderTop: '1px solid rgba(16, 185, 129, 0.2)',
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.3s ease'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    padding: '0.75rem 1.25rem',
    borderRadius: '0.75rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    textShadow: 'none'
  };

  const mobileLinkStyle = {
    ...linkStyle,
    padding: '1rem 2rem',
    borderRadius: '0',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
  };

  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '0.75rem',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.5rem',
    transition: 'all 0.5s ease',
    position: 'relative'
  };

  const hamburgerLineStyle = (index) => ({
    width: '25px',
    height: '3px',
    backgroundColor: '#374151',
    margin: '2px 0',
    transition: 'all 0.5s ease',
    borderRadius: '2px',
    transform: isMenuOpen ? 
      (index === 0 ? 'rotate(45deg) translate(6px, 6px)' :
       index === 1 ? 'opacity(0)' :
       'rotate(-45deg) translate(7px, -6px)') : 'none'
  });

  const desktopMenuStyle = {
    ...menuStyle,
    display: isMobile ? 'none' : 'flex'
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#10b981';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#374151';
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link 
          to="/" 
          style={logoStyle}
        >
          🌴 Lanka Trails
        </Link>
        
        <ul style={desktopMenuStyle}>
          <li>
            <button 
              onClick={() => scrollToSection('home')} 
              style={linkStyle}
              onMouseEnter={!isMobile ? handleMouseEnter : undefined}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('trails')} 
              style={linkStyle}
              onMouseEnter={!isMobile ? handleMouseEnter : undefined}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              Trails
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('stories')} 
              style={linkStyle}
              onMouseEnter={!isMobile ? handleMouseEnter : undefined}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              Stories
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('sponsors')} 
              style={linkStyle}
              onMouseEnter={!isMobile ? handleMouseEnter : undefined}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              Sponsors
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('admin')} 
              style={linkStyle}
              onMouseEnter={!isMobile ? handleMouseEnter : undefined}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              Admin
            </button>
          </li>
        </ul>

        <button 
          style={hamburgerStyle} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div style={hamburgerLineStyle(0)}></div>
          <div style={hamburgerLineStyle(1)}></div>
          <div style={hamburgerLineStyle(2)}></div>
        </button>
      </div>

      <ul style={mobileMenuStyle}>
        <li>
          <button 
            onClick={() => scrollToSection('home')} 
            style={mobileLinkStyle}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('trails')} 
            style={mobileLinkStyle}
          >
            Trails
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('stories')} 
            style={mobileLinkStyle}
          >
            Stories
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('sponsors')} 
            style={mobileLinkStyle}
          >
            Sponsors
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('admin')} 
            style={mobileLinkStyle}
          >
            Admin
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
