import React from 'react';
import { sponsors } from '../data.js';

const Sponsors = () => {
  const sectionStyle = {
    padding: '5rem 0',
    backgroundColor: '#f3f4f6'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#1f2937'
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const logoStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    margin: '0 auto 1rem',
    display: 'block'
  };

  const nameStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1f2937'
  };

  const descriptionStyle = {
    color: '#6b7280',
    fontSize: '0.875rem',
    marginBottom: '1rem'
  };

  const linkStyle = {
    color: '#10b981',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.875rem',
    transition: 'color 0.3s ease'
  };

  return (
    <section id="sponsors" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Our Partners</h2>
        <p style={subtitleStyle}>
          We partner with leading organizations to bring you the best Sri Lankan travel experiences.
        </p>

        <div style={gridStyle}>
          {sponsors.map(sponsor => (
            <div
              key={sponsor.id}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                style={logoStyle}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.marginTop = '0';
                }}
              />
              <h3 style={nameStyle}>{sponsor.name}</h3>
              <p style={descriptionStyle}>{sponsor.description}</p>
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#10b981';
                }}
              >
                Visit Website →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
