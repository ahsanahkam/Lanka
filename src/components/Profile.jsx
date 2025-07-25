import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    paddingTop: '100px',
    padding: '100px 1rem 2rem'
  };

  const cardStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#6b7280',
    margin: '0 auto 2rem',
    border: '4px solid #10b981'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    marginBottom: '1rem',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    marginRight: '1rem',
    transition: 'background-color 0.3s ease'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#10b981',
    color: 'white'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f3f4f6',
    color: '#374151'
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // In a real app, this would update the user data via API
    const updatedUser = { ...user, ...formData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  if (!user) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={titleStyle}>Please log in to view your profile</h1>
          <div style={{ textAlign: 'center' }}>
            <button
              style={primaryButtonStyle}
              onClick={() => navigate('/login')}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>My Profile</h1>
        
        <div style={avatarStyle}>
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt={user.name}
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.textContent = user.name.charAt(0);
              }}
            />
          ) : (
            user.name.charAt(0)
          )}
        </div>

        {isEditing ? (
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                style={primaryButtonStyle}
                onClick={handleSave}
              >
                Save Changes
              </button>
              <button
                style={secondaryButtonStyle}
                onClick={() => {
                  setIsEditing(false);
                  setFormData({ name: user.name, email: user.email });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#6b7280' }}>
                Full Name
              </label>
              <div style={{ fontSize: '1.125rem', color: '#1f2937' }}>
                {user.name}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#6b7280' }}>
                Email Address
              </label>
              <div style={{ fontSize: '1.125rem', color: '#1f2937' }}>
                {user.email}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#6b7280' }}>
                Account Type
              </label>
              <div style={{ 
                fontSize: '1.125rem', 
                padding: '0.5rem 1rem',
                backgroundColor: user.role === 'admin' ? '#fef3c7' : '#f3f4f6',
                color: user.role === 'admin' ? '#d97706' : '#6b7280',
                borderRadius: '8px',
                display: 'inline-block',
                fontWeight: '600',
                textTransform: 'capitalize'
              }}>
                {user.role}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                style={primaryButtonStyle}
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              <button
                style={secondaryButtonStyle}
                onClick={() => navigate('/')}
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
