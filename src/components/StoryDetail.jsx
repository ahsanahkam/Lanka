import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dataManager from '../dataManager.js';

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStory = () => {
      const foundStory = dataManager.getStoryById(id);
      setStory(foundStory);
      setLoading(false);
    };

    loadStory();

    // Listen for story data changes
    dataManager.addListener(loadStory);

    return () => {
      dataManager.removeListener(loadStory);
    };
  }, [id]);

  if (loading) {
    return (
      <div style={{ 
        padding: '6rem 2rem 2rem', 
        textAlign: 'center',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>Loading story...</div>
      </div>
    );
  }

  if (!story) {
    return (
      <div style={{ 
        padding: '6rem 2rem 2rem', 
        textAlign: 'center',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#dc2626' }}>Story not found</h2>
        <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
          The story you're looking for doesn't exist or may have been removed.
        </p>
        <button 
          onClick={() => navigate('/')} 
          style={{ 
            padding: '0.75rem 1.5rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
    paddingTop: '6rem' // Account for fixed navbar
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem'
  };

  const metaStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  };

  const metaItemStyle = {
    textAlign: 'center'
  };

  const metaLabelStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: '0.25rem'
  };

  const metaValueStyle = {
    fontSize: '1rem',
    color: '#1f2937',
    fontWeight: '600'
  };

  const mainImageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  };

  const contentStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.8',
    color: '#374151',
    marginBottom: '2rem'
  };

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: '2rem',
    marginBottom: '1rem'
  };

  const backButtonStyle = {
    position: 'fixed',
    top: '6rem',
    left: '2rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    zIndex: 100,
    transition: 'all 0.3s ease'
  };

  return (
    <div>
      <button 
        style={backButtonStyle}
        onClick={() => navigate('/')}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#059669';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#10b981';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        ← Back to Home
      </button>

      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>{story.title}</h1>
          
          <div style={metaStyle}>
            <div style={metaItemStyle}>
              <div style={metaLabelStyle}>Author</div>
              <div style={metaValueStyle}>{story.author}</div>
            </div>
            <div style={metaItemStyle}>
              <div style={metaLabelStyle}>Published</div>
              <div style={metaValueStyle}>{new Date(story.date).toLocaleDateString()}</div>
            </div>
            {story.readTime && (
              <div style={metaItemStyle}>
                <div style={metaLabelStyle}>Read Time</div>
                <div style={metaValueStyle}>{story.readTime}</div>
              </div>
            )}
          </div>
        </div>

        <img 
          src={story.image} 
          alt={story.title}
          style={mainImageStyle}
          onError={(e) => {
            e.target.src = '/placeholder.svg';
          }}
        />

        <div style={contentStyle}>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#6b7280', marginBottom: '1.5rem' }}>
            {story.excerpt}
          </p>
          <p>{story.content}</p>
        </div>

        {story.fullContent && (
          <div style={contentStyle}>
            <p>{story.fullContent}</p>
          </div>
        )}

        {story.gallery && (
          <>
            <h2 style={sectionTitleStyle}>Photo Gallery</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {story.gallery.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${story.title} - Photo ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.target.src = '/placeholder.svg';
                    e.target.style.backgroundColor = '#f3f4f6';
                  }}
                />
              ))}
            </div>
          </>
        )}

        <h2 style={sectionTitleStyle}>About the Experience</h2>
        <div style={contentStyle}>
          <p>
            {story.title.includes('Sigiriya') && "Climbing Sigiriya Rock Fortress is not just a physical journey, but a walk through centuries of Sri Lankan history. The ancient frescoes, intricate water gardens, and architectural marvels tell the story of King Kashyapa's ambitious vision."}
            {story.title.includes('Mirissa') && "Whale watching in Mirissa offers a unique opportunity to witness these magnificent creatures in their natural habitat. The experience combines the thrill of marine wildlife observation with the serene beauty of Sri Lanka's southern coastline."}
            {story.title.includes("Adam's Peak") && "The pilgrimage to Adam's Peak is a spiritual journey that transcends religious boundaries. Thousands of pilgrims from different faiths climb together, creating a unique atmosphere of unity and devotion under the starlit sky."}
          </p>
        </div>

        <h2 style={sectionTitleStyle}>Travel Tips</h2>
        <div style={contentStyle}>
          <div style={{ 
            backgroundColor: '#f0fdf4', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #bbf7d0'
          }}>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              {story.title.includes('Sigiriya') && (
                <>
                  <li style={{ marginBottom: '0.5rem' }}>Start early morning to avoid crowds and heat</li>
                  <li style={{ marginBottom: '0.5rem' }}>Wear comfortable shoes with good grip</li>
                  <li style={{ marginBottom: '0.5rem' }}>Bring water and sun protection</li>
                  <li style={{ marginBottom: '0.5rem' }}>Allow 3-4 hours for the complete experience</li>
                </>
              )}
              {story.title.includes('Mirissa') && (
                <>
                  <li style={{ marginBottom: '0.5rem' }}>Book whale watching tours in advance</li>
                  <li style={{ marginBottom: '0.5rem' }}>Best time is December to April</li>
                  <li style={{ marginBottom: '0.5rem' }}>Bring motion sickness medication if needed</li>
                  <li style={{ marginBottom: '0.5rem' }}>Early morning tours have higher success rates</li>
                </>
              )}
              {story.title.includes("Adam's Peak") && (
                <>
                  <li style={{ marginBottom: '0.5rem' }}>Start climbing around 2 AM for sunrise</li>
                  <li style={{ marginBottom: '0.5rem' }}>Peak season is December to May</li>
                  <li style={{ marginBottom: '0.5rem' }}>Bring warm clothing for the summit</li>
                  <li style={{ marginBottom: '0.5rem' }}>Follow the chain of lights on the path</li>
                </>
              )}
            </ul>
          </div>
        </div>

        <h2 style={sectionTitleStyle}>More Stories You Might Like</h2>
        <div style={contentStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem'
          }}>
            {stories
              .filter(s => s.id !== story.id)
              .slice(0, 2)
              .map(similarStory => (
                <div 
                  key={similarStory.id}
                  onClick={() => navigate(`/story/${similarStory.id}`)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img 
                    src={similarStory.image} 
                    alt={similarStory.title}
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {similarStory.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.4' }}>
                      {similarStory.excerpt}
                    </p>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                      By {similarStory.author}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
