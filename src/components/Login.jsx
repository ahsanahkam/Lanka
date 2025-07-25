import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    padding: '1rem'
  };

  const formContainerStyle = {
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#1f2937'
  };

  const subtitleStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#6b7280'
  };

  const inputGroupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#374151'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.875rem',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '1rem'
  };

  const linkStyle = {
    color: '#10b981',
    textDecoration: 'none',
    fontWeight: '600'
  };

  const errorStyle = {
    backgroundColor: '#fef2f2',
    color: '#dc2626',
    padding: '0.75rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    border: '1px solid #fecaca'
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation (in real app, this would be API validation)
      if (formData.email === 'admin@lankatrails.com' && formData.password === 'admin123') {
        const userData = {
          id: 1,
          email: formData.email,
          name: 'Admin User',
          role: 'admin',
          avatar: '/placeholder.svg'
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        onLogin(userData);
        navigate('/admin');
      } else if (formData.email && formData.password) {
        const userData = {
          id: 2,
          email: formData.email,
          name: formData.email.split('@')[0],
          role: 'user',
          avatar: '/placeholder.svg'
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        onLogin(userData);
        navigate('/');
      } else {
        setError('Please enter valid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Welcome Back</h1>
        <p style={subtitleStyle}>Sign in to your Lanka Trails account</p>

        {error && (
          <div style={errorStyle}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label style={labelStyle} htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="your@email.com"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle} htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            style={{
              ...buttonStyle,
              backgroundColor: isLoading ? '#9ca3af' : '#10b981',
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
            Don't have an account?{' '}
            <a 
              href="/register" 
              style={linkStyle}
              onClick={(e) => {
                e.preventDefault();
                navigate('/register');
              }}
            >
              Sign up here
            </a>
          </p>
          
          <div style={{ 
            borderTop: '1px solid #e5e7eb', 
            paddingTop: '1rem', 
            marginTop: '1rem',
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            <p><strong>Demo Accounts:</strong></p>
            <p>Admin: admin@lankatrails.com / admin123</p>
            <p>User: any@email.com / anypassword</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
