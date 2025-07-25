import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrailFinder from './components/TrailFinder.jsx';
import Stories from './components/Stories.jsx';
import Sponsors from './components/Sponsors.jsx';
import Footer from './components/Footer.jsx';
import TrailDetail from './components/TrailDetail.jsx';
import StoryDetail from './components/StoryDetail.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import UserManagement from './components/UserManagement.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Profile from './components/Profile.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrailFinder />
      <Stories />
      <Sponsors />
    </>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const appStyle = {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    lineHeight: '1.6',
    color: '#333'
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trail/:id" element={<TrailDetail />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onLogin={handleLogin} />} />
        </Routes>
        {/* Only show footer on main content pages, not auth pages */}
        <Routes>
          <Route path="/login" element={null} />
          <Route path="/register" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
