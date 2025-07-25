import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '3rem 0 1rem'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const sectionStyle = {
    marginBottom: '1rem'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#10b981'
  };

  const linkStyle = {
    display: 'block',
    color: '#d1d5db',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease'
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#374151',
    borderRadius: '50%',
    color: 'white',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease'
  };

  const copyrightStyle = {
    borderTop: '1px solid #374151',
    paddingTop: '1rem',
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '0.875rem'
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          {/* About Section */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>🌴 Lanka Trails</h3>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              Discover the hidden gems of Sri Lanka through our carefully curated trails. 
              From ancient temples to pristine beaches, we help you explore the Pearl of the Indian Ocean.
            </p>
            <div style={socialContainerStyle}>
              <a 
                href="#" 
                style={socialLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#10b981'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                📘
              </a>
              <a 
                href="#" 
                style={socialLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#10b981'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                📸
              </a>
              <a 
                href="#" 
                style={socialLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#10b981'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                🐦
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Quick Links</h3>
            <button 
              onClick={() => scrollToSection('home')}
              style={{...linkStyle, background: 'none', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer'}}
              onMouseEnter={(e) => e.target.style.color = '#10b981'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('trails')}
              style={{...linkStyle, background: 'none', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer'}}
              onMouseEnter={(e) => e.target.style.color = '#10b981'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Trails
            </button>
            <button 
              onClick={() => scrollToSection('stories')}
              style={{...linkStyle, background: 'none', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer'}}
              onMouseEnter={(e) => e.target.style.color = '#10b981'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Stories
            </button>
            <button 
              onClick={() => scrollToSection('sponsors')}
              style={{...linkStyle, background: 'none', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer'}}
              onMouseEnter={(e) => e.target.style.color = '#10b981'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Sponsors
            </button>
          </div>

          {/* Trail Categories */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Trail Categories</h3>
            <a 
              href="#" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#10b981'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Cultural Heritage
            </a>
            <a 
              href="#" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#10b981'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Coastal Adventures
            </a>
            <a 
              href="#" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#10b981'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Highland Treks
            </a>
            <a 
              href="#" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#10b981'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Wildlife Safaris
            </a>
          </div>

          {/* Contact Info */}
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Contact</h3>
            <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
              📧 hello@lankatrails.com
            </p>
            <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
              📞 +94 11 234 5678
            </p>
            <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
              📍 Colombo, Sri Lanka
            </p>
          </div>
        </div>

        <div style={copyrightStyle}>
          <p>&copy; 2024 Lanka Trails. All rights reserved. Made with ❤️ for Sri Lankan adventures.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
