import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrailFinder from './components/TrailFinder.jsx';
import Stories from './components/Stories.jsx';
import Sponsors from './components/Sponsors.jsx';
import Footer from './components/Footer.jsx';
import TrailDetail from './components/TrailDetail.jsx';
import StoryDetail from './components/StoryDetail.jsx';

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
  const appStyle = {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    lineHeight: '1.6',
    color: '#333'
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trail/:id" element={<TrailDetail />} />
          <Route path="/story/:id" element={<StoryDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
