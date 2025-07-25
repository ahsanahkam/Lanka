
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };
    
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showUserMenu]);

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

  const handleLogout = () => {
    localStorage.removeItem('user');
    onLogout();
    setShowUserMenu(false);
    navigate('/');
  };

  const userMenuStyle = {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    minWidth: '200px',
    padding: '0.5rem 0',
    zIndex: 1001,
    marginTop: '0.5rem',
    display: showUserMenu ? 'block' : 'none'
  };

  const userMenuItemStyle = {
    display: 'block',
    width: '100%',
    padding: '0.75rem 1rem',
    border: 'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
    color: '#374151',
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'background-color 0.2s ease'
  };

  const userAvatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '#6b7280',
    cursor: 'pointer',
    border: '2px solid #10b981'
  };

  const authButtonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    marginLeft: '0.5rem'
  };

  const loginButtonStyle = {
    ...authButtonStyle,
    backgroundColor: 'transparent',
    color: '#374151',
    border: '1px solid #d1d5db'
  };

  const registerButtonStyle = {
    ...authButtonStyle,
    backgroundColor: '#10b981',
    color: 'white'
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
            <Link 
              to="/admin" 
              style={linkStyle}
              onMouseEnter={!isMobile ? handleMouseEnter : undefined}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              Admin
            </Link>
          </li>
        </ul>

        {/* User Authentication Section */}
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          {user ? (
            <div style={{ position: 'relative' }} className="user-menu-container">
              <div 
                style={userAvatarStyle}
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
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
              
              <div style={userMenuStyle}>
                <div style={{ 
                  padding: '0.75rem 1rem', 
                  borderBottom: '1px solid #e5e7eb',
                  fontSize: '0.875rem'
                }}>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>{user.name}</div>
                  <div style={{ color: '#6b7280' }}>{user.email}</div>
                </div>
                
                {user.role === 'admin' && (
                  <button
                    style={userMenuItemStyle}
                    onClick={() => {
                      navigate('/admin/users');
                      setShowUserMenu(false);
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    👥 Manage Users
                  </button>
                )}
                
                <button
                  style={userMenuItemStyle}
                  onClick={() => {
                    navigate('/profile');
                    setShowUserMenu(false);
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  👤 Profile
                </button>
                
                <button
                  style={userMenuItemStyle}
                  onClick={handleLogout}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  🚪 Logout
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link 
                to="/login" 
                style={loginButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                style={registerButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

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
          <Link 
            to="/admin" 
            style={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Admin
          </Link>
        </li>
        
        {/* Mobile Authentication Links */}
        {user ? (
          <>
            <li style={{ 
              padding: '1rem', 
              borderTop: '1px solid #e5e7eb',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Logged in as <strong>{user.name}</strong>
              </div>
            </li>
            
            {user.role === 'admin' && (
              <li>
                <Link 
                  to="/admin/users" 
                  style={mobileLinkStyle}
                  onClick={() => setIsMenuOpen(false)}
                >
                  👥 Manage Users
                </Link>
              </li>
            )}
            
            <li>
              <button 
                onClick={() => {
                  navigate('/profile');
                  setIsMenuOpen(false);
                }}
                style={mobileLinkStyle}
              >
                👤 Profile
              </button>
            </li>
            
            <li>
              <button 
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                style={mobileLinkStyle}
              >
                🚪 Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
              <Link 
                to="/login" 
                style={mobileLinkStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                style={{
                  ...mobileLinkStyle,
                  backgroundColor: '#10b981',
                  color: 'white',
                  borderRadius: '8px',
                  margin: '0.5rem'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
