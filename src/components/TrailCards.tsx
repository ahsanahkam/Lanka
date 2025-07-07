
import React from 'react';
import { trailsData } from '../data/trails';

const TrailCard = ({ trail }: { trail: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="relative h-48">
        <img 
          src={trail.image} 
          alt={trail.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{trail.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{trail.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-emerald-600 font-semibold">{trail.duration}</span>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200">
            Discover This Trail
          </button>
        </div>
      </div>
    </div>
  );
};

const TrailCards = () => {
  return (
    <section id="trails" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Curated Trails</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best of Sri Lanka through our specially designed trail experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trailsData.map((trail, index) => (
            <TrailCard key={index} trail={trail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrailCards;
