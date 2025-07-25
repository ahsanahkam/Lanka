import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dataManager from '../dataManager.js';

const TrailDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trail, setTrail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrail = () => {
      const foundTrail = dataManager.getTrailById(id);
      setTrail(foundTrail);
      setLoading(false);
    };

    loadTrail();

    // Listen for trail data changes
    dataManager.addListener(loadTrail);

    return () => {
      dataManager.removeListener(loadTrail);
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
        <div>Loading trail details...</div>
      </div>
    );
  }

  if (!trail) {
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
        <h2 style={{ marginBottom: '1rem', color: '#dc2626' }}>Trail not found</h2>
        <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
          The trail you're looking for doesn't exist or may have been removed.
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
    marginBottom: '1rem',
    flexWrap: 'wrap'
  };

  const metaItemStyle = {
    textAlign: 'center'
  };

  const metaLabelStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500'
  };

  const metaValueStyle = {
    fontSize: '1rem',
    color: '#1f2937',
    fontWeight: '600'
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'capitalize',
    marginBottom: '2rem'
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

  const mainImageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '2rem'
  };

  const contentStyle = {
    lineHeight: '1.8',
    fontSize: '1.125rem',
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

  const imageGalleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '2rem',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr'
    }
  };

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px'
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

  const badgeColor = getBadgeColor(trail.type);

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
          <h1 style={titleStyle}>{trail.title}</h1>
          
          <div style={metaStyle}>
            <div style={metaItemStyle}>
              <div style={metaLabelStyle}>Duration</div>
              <div style={metaValueStyle}>{trail.duration || 'To be updated'}</div>
            </div>
            <div style={metaItemStyle}>
              <div style={metaLabelStyle}>Difficulty</div>
              <div style={metaValueStyle}>{trail.difficulty || 'To be updated'}</div>
            </div>
            <div style={metaItemStyle}>
              <div style={metaLabelStyle}>Location</div>
              <div style={metaValueStyle}>{trail.location || 'To be updated'}</div>
            </div>
            {trail.elevation && (
              <div style={metaItemStyle}>
                <div style={metaLabelStyle}>Elevation</div>
                <div style={metaValueStyle}>{trail.elevation}</div>
              </div>
            )}
            {trail.bestTime && (
              <div style={metaItemStyle}>
                <div style={metaLabelStyle}>Best Time</div>
                <div style={metaValueStyle}>{trail.bestTime}</div>
              </div>
            )}
          </div>

          <span style={{
            ...badgeStyle,
            backgroundColor: badgeColor.bg,
            color: badgeColor.color
          }}>
            {trail.type} Trail
          </span>
        </div>

        <img 
          src={trail.image} 
          alt={trail.title}
          style={mainImageStyle}
          onError={(e) => {
            e.target.src = '/placeholder.svg';
          }}
        />

        <div style={contentStyle}>
          <p>{trail.description || 'Trail description will be added soon. Check back later for detailed information about this amazing trail!'}</p>
        </div>

        {(trail.fullDescription || trail.details) && (
          <div style={contentStyle}>
            <p>{trail.fullDescription || trail.details}</p>
          </div>
        )}

        {trail.highlights && (
          <>
            <h2 style={sectionTitleStyle}>Trail Highlights</h2>
            <div style={contentStyle}>
              <ul style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '0.5rem',
                listStyle: 'none',
                padding: 0
              }}>
                {trail.highlights.map((highlight, index) => (
                  <li key={index} style={{
                    padding: '0.75rem',
                    backgroundColor: '#f0fdf4',
                    borderRadius: '6px',
                    color: '#059669',
                    fontWeight: '500',
                    border: '1px solid #bbf7d0'
                  }}>
                    ✓ {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <h2 style={sectionTitleStyle}>Experience Highlights</h2>
        <div style={contentStyle}>
          <p>
            {trail.type === 'cultural' && "Immerse yourself in Sri Lanka's rich cultural heritage. Explore ancient temples, royal palaces, and UNESCO World Heritage sites. Walk through centuries of history as you discover the stories carved in stone and preserved in sacred spaces."}
            {trail.type === 'coastal' && "Experience the pristine beauty of Sri Lanka's coastline. From golden sandy beaches to crystal-clear waters, enjoy water sports, whale watching, and stunning sunsets. Discover colonial architecture and vibrant fishing communities along the way."}
            {trail.type === 'highland' && "Journey through misty mountains and rolling tea plantations. Experience the cool climate of hill country, visit charming colonial towns, and witness breathtaking sunrise views. Learn about Sri Lanka's famous tea culture and scenic railway journeys."}
            {trail.type === 'wildlife' && "Embark on thrilling wildlife safaris in Sri Lanka's premier national parks. Spot elephants, leopards, and hundreds of bird species in their natural habitat. Experience the raw beauty of untamed wilderness and diverse ecosystems."}
          </p>
        </div>

        <h2 style={sectionTitleStyle}>Gallery</h2>
        {trail.gallery && trail.gallery.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {trail.gallery.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${trail.title} - View ${index + 1}`}
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
        ) : (
          <div style={{
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            marginBottom: '2rem'
          }}>
            <p style={{ color: '#6b7280', margin: '0' }}>
              📷 Gallery images will be added soon. Check back later for more visual content of this trail!
            </p>
          </div>
        )}

        <h2 style={sectionTitleStyle}>What to Expect</h2>
        <div style={contentStyle}>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Professional local guides with extensive knowledge</li>
            <li style={{ marginBottom: '0.5rem' }}>Small group sizes for personalized experience</li>
            <li style={{ marginBottom: '0.5rem' }}>All necessary permits and entrance fees included</li>
            <li style={{ marginBottom: '0.5rem' }}>Transportation and refreshments provided</li>
            <li style={{ marginBottom: '0.5rem' }}>Photography opportunities at scenic viewpoints</li>
          </ul>
        </div>

        <h2 style={sectionTitleStyle}>Planning Your Visit</h2>
        <div style={contentStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem', 
            marginBottom: '1.5rem' 
          }}>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#f9fafb', 
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <h4 style={{ color: '#1f2937', marginBottom: '1rem', fontWeight: '600' }}>Getting There</h4>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6' }}>
                {trail.type === 'cultural' && "Most cultural sites are accessible by public transport or organized tours from major cities like Colombo or Kandy."}
                {trail.type === 'coastal' && "Coastal destinations are well-connected by bus and train services. Consider staying overnight to enjoy sunset and sunrise views."}
                {trail.type === 'highland' && "Hill country destinations require early morning departure from Colombo. Train journeys offer scenic routes through tea plantations."}
                {trail.type === 'wildlife' && "Safari parks require advance booking. Most tours include transportation from nearby towns and accommodation."}
              </p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#f0fdf4', 
              borderRadius: '8px',
              border: '1px solid #bbf7d0'
            }}>
              <h4 style={{ color: '#1f2937', marginBottom: '1rem', fontWeight: '600' }}>What to Bring</h4>
              <ul style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6', paddingLeft: '1rem' }}>
                <li>Comfortable walking shoes</li>
                <li>Sun protection (hat, sunscreen)</li>
                <li>Camera for memorable shots</li>
                <li>Water bottle and snacks</li>
                <li>Light jacket for early mornings</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 style={sectionTitleStyle}>Best Time to Visit</h2>
        <div style={contentStyle}>
          <p>
            {trail.type === 'cultural' && "Year-round destination, though the cooler months from December to March offer the most comfortable weather for exploring ancient sites."}
            {trail.type === 'coastal' && "Best visited from December to April when the weather is dry and seas are calm. Perfect for water activities and beach relaxation."}
            {trail.type === 'highland' && "April to September offers clear skies and minimal rainfall. The cool climate makes it a perfect escape from the tropical heat."}
            {trail.type === 'wildlife' && "May to September during the dry season offers the best wildlife viewing opportunities as animals gather around water sources."}
          </p>
        </div>

        <h2 style={sectionTitleStyle}>Similar Trails You Might Like</h2>
        <div style={contentStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem'
          }}>
            {trails
              .filter(t => t.id !== trail.id && t.type === trail.type)
              .slice(0, 3)
              .map(similarTrail => (
                <div 
                  key={similarTrail.id}
                  onClick={() => navigate(`/trail/${similarTrail.id}`)}
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
                    src={similarTrail.image} 
                    alt={similarTrail.title}
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {similarTrail.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.4' }}>
                      {similarTrail.description}
                    </p>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                      {similarTrail.duration} • {similarTrail.difficulty}
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

export default TrailDetail;
