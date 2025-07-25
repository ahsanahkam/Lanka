import React from 'react';

const Hero = () => {
  const scrollToTrails = () => {
    const element = document.getElementById('trails');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/assets/images/hero-background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    color: 'white',
    padding: '0 1rem',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    animation: 'fadeInUp 1s ease-out'
  };

  const highlightStyle = {
    color: '#10b981'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    opacity: 0.9,
    lineHeight: '1.6'
  };

  const buttonStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '1rem 2rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '2rem'
  };

  const buttonHoverStyle = {
    backgroundColor: '#059669',
    transform: 'scale(1.05)'
  };

  const arrowStyle = {
    position: 'absolute',
    bottom: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    opacity: 0.5,
    animation: 'bounce 2s infinite',
    fontSize: '1.5rem'
  };

  // Add CSS animations
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
      40% { transform: translateX(-50%) translateY(-10px); }
      60% { transform: translateX(-50%) translateY(-5px); }
    }
    @media (max-width: 768px) {
      .hero-title { font-size: 2.5rem !important; }
      .hero-subtitle { font-size: 1.125rem !important; }
    }
  `;
  if (!document.head.querySelector('style[data-hero-styles]')) {
    styleSheet.setAttribute('data-hero-styles', 'true');
    document.head.appendChild(styleSheet);
  }

  return (
    <section id="home" style={heroStyle}>
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>
      
      <div style={contentStyle}>
        <h1 className="hero-title" style={titleStyle}>
          Discover Sri Lanka with{' '}
          <span style={highlightStyle}>Lanka Trails</span>
        </h1>
        <p className="hero-subtitle" style={subtitleStyle}>
          Explore cultural, coastal, highland, and wildlife trails tailored to your journey
        </p>
        <button 
          style={buttonStyle}
          onClick={scrollToTrails}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.transform = buttonHoverStyle.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.transform = 'scale(1)';
          }}
        >
          Find Your Trail
        </button>
      </div>
      
      <div style={arrowStyle}>↓</div>
    </section>
  );
};

export default Hero;
