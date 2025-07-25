import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dataManager from '../dataManager.js';

const Stories = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStories = () => {
      const allStories = dataManager.getStories();
      setStories(allStories);
      setLoading(false);
    };

    loadStories();

    // Listen for story data changes
    dataManager.addListener(loadStories);

    return () => {
      dataManager.removeListener(loadStories);
    };
  }, []);

  const handleStoryClick = (storyId) => {
    navigate(`/story/${storyId}`);
  };
  const sectionStyle = {
    padding: '5rem 0',
    backgroundColor: 'white'
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const cardStyle = {
    backgroundColor: '#f9fafb',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  };

  const cardContentStyle = {
    padding: '2rem'
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
    color: '#1f2937'
  };

  const authorStyle = {
    fontSize: '0.875rem',
    color: '#10b981',
    fontWeight: '500',
    marginBottom: '0.5rem'
  };

  const dateStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem'
  };

  const excerptStyle = {
    color: '#4b5563',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  };

  const readMoreStyle = {
    color: '#10b981',
    fontWeight: '500',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.3s ease'
  };

  return (
    <section id="stories" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Traveler Stories</h2>
        <p style={subtitleStyle}>
          Read inspiring stories from fellow travelers who have explored the beautiful trails of Sri Lanka.
        </p>

        {loading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '200px',
            color: '#6b7280'
          }}>
            <div>Loading stories...</div>
          </div>
        ) : stories.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#6b7280',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>No Stories Yet</h3>
            <p style={{ marginBottom: '2rem' }}>
              Be the first to share your travel experience! Stories will appear here once they're published.
            </p>
          </div>
        ) : (
          <div style={gridStyle}>
            {stories.map(story => (
              <article
                key={story.id}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  style={imageStyle}
                  onError={(e) => {
                    e.target.src = '/placeholder.svg';
                    e.target.style.backgroundColor = '#f3f4f6';
                  }}
                />
              <div style={cardContentStyle}>
                <h3 style={cardTitleStyle}>{story.title}</h3>
                <div style={authorStyle}>By {story.author}</div>
                <div style={dateStyle}>{new Date(story.date).toLocaleDateString()}</div>
                {story.readTime && (
                  <div style={{...dateStyle, marginTop: '0.25rem'}}>{story.readTime}</div>
                )}
                <p style={excerptStyle}>{story.excerpt}</p>
                <button
                  onClick={() => handleStoryClick(story.id)}
                  style={{
                    ...readMoreStyle,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                    marginTop: '1rem',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#059669';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#10b981';
                  }}
                >
                  Read Full Story →
                </button>
              </div>
            </article>
          ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Stories;
