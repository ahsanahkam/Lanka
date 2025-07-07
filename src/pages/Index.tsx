
import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TrailCards from '../components/TrailCards';
import TrailMap from '../components/TrailMap';
import TrailFinder from '../components/TrailFinder';
import Stories from '../components/Stories';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrailCards />
      <TrailMap />
      <TrailFinder />
      <Stories />
      <Footer />
    </div>
  );
};

export default Index;
