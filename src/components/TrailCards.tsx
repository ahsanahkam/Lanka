
import React from 'react';
import { trailsData, Trail } from '../data/trails';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, Hotel, Camera, Shield } from 'lucide-react';

const TrailCard = ({ trail }: { trail: Trail }) => {
  return (
    <div className={`bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
      trail.isSponsored ? 'border-2 border-saffron ring-2 ring-saffron/20' : ''
    }`}>
      <div className="relative h-48">
        <img 
          src={trail.image} 
          alt={trail.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {trail.isSponsored && (
          <Badge className="absolute top-3 left-3 bg-saffron text-white">
            <Star className="w-3 h-3 mr-1" />
            Sponsored by {trail.sponsorName}
          </Badge>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{trail.name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{trail.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-emerald font-semibold">{trail.duration}</span>
          <Button className="bg-emerald hover:bg-emerald/90 text-white rounded-full text-sm">
            Discover This Trail
          </Button>
        </div>
        
        {/* Affiliate Links */}
        {trail.affiliateLinks && (
          <div className="border-t pt-4 space-y-2">
            <h4 className="text-sm font-semibold text-foreground mb-2">Book Your Experience:</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={() => window.open(trail.affiliateLinks!.hotels, '_blank')}
              >
                <Hotel className="w-3 h-3 mr-1" />
                Hotels
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={() => window.open(trail.affiliateLinks!.tours, '_blank')}
              >
                <Camera className="w-3 h-3 mr-1" />
                Tours
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={() => window.open(trail.affiliateLinks!.insurance, '_blank')}
              >
                <Shield className="w-3 h-3 mr-1" />
                Insurance
              </Button>
            </div>
          </div>
        )}
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
