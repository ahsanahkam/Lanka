import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trails } from '../data.js';

const TrailFinder = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [filteredTrails, setFilteredTrails] = useState(trails);
  const navigate = useNavigate();

  const sectionStyle = {
    padding: '5rem 0',
    backgroundColor: '#f9fafb'
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
    marginBottom: '3rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto 3rem'
  };

  const filterBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '3rem'
  };

  const filterButtonStyle = (isActive) => ({
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    backgroundColor: isActive ? '#10b981' : 'white',
    color: isActive ? 'white' : '#374151',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '1.5rem'
  };

  const trailTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1f2937'
  };

  const descriptionStyle = {
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: '1.6'
  };

  const metaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: '#9ca3af'
  };

  const badgeStyle = {
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'capitalize'
  };

  const getBadgeColor = (type) => {
    const colors = {
      cultural: { bg: '#fef3c7', color: '#d97706' },
      coastal: { bg: '#dbeafe', color: '#2563eb' },
      highland: { bg: '#d1fae5', color: '#059669' },
      wildlife: { bg: '#fde68a', color: '#d97706' }
    };
    return colors[type] || { bg: '#f3f4f6', color: '#6b7280' };
  };

  const handleFilter = (type) => {
    setSelectedType(type);
    if (type === 'all') {
      setFilteredTrails(trails);
    } else {
      setFilteredTrails(trails.filter(trail => trail.type === type));
    }
  };

  const handleTrailClick = (trailId) => {
    navigate(`/trail/${trailId}`);
  };

  return (
    <section id="trails" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Find Your Perfect Trail</h2>
        <p style={subtitleStyle}>
          Discover amazing trails across Sri Lanka, from ancient cultural sites to pristine beaches and lush mountains
        </p>

        <div style={filterBarStyle}>
          <button 
            style={filterButtonStyle(selectedType === 'all')}
            onClick={() => handleFilter('all')}
          >
            All Trails
          </button>
          <button 
            style={filterButtonStyle(selectedType === 'cultural')}
            onClick={() => handleFilter('cultural')}
          >
            Cultural
          </button>
          <button 
            style={filterButtonStyle(selectedType === 'coastal')}
            onClick={() => handleFilter('coastal')}
          >
            Coastal
          </button>
          <button 
            style={filterButtonStyle(selectedType === 'highland')}
            onClick={() => handleFilter('highland')}
          >
            Highland
          </button>
          <button 
            style={filterButtonStyle(selectedType === 'wildlife')}
            onClick={() => handleFilter('wildlife')}
          >
            Wildlife
          </button>
        </div>

        <div style={gridStyle}>
          {filteredTrails.map(trail => {
            const badgeColor = getBadgeColor(trail.type);
            return (
              <div 
                key={trail.id} 
                style={cardStyle}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                  src={trail.image} 
                  alt={trail.title}
                  style={imageStyle}
                  onError={(e) => {
                    e.target.src = '/placeholder.svg';
                    e.target.style.backgroundColor = '#f3f4f6';
                  }}
                />
                <div style={contentStyle}>
                  <h3 style={trailTitleStyle}>{trail.title}</h3>
                  <p style={descriptionStyle}>{trail.description}</p>
                  
                  <div style={metaStyle}>
                    <div>
                      <span style={{
                        ...badgeStyle,
                        backgroundColor: badgeColor.bg,
                        color: badgeColor.color
                      }}>
                        {trail.type}
                      </span>
                    </div>
                    <div>
                      <span>{trail.duration} • {trail.difficulty}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleTrailClick(trail.id)}
                    style={{
                      width: '100%',
                      marginTop: '1rem',
                      padding: '0.75rem',
                      backgroundColor: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTrails.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#6b7280'
          }}>
            <h3>No trails found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrailFinder;
