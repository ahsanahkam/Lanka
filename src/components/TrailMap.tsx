
import React, { useState } from 'react';

const TrailMap = () => {
  const [selectedPin, setSelectedPin] = useState<string | null>(null);

  const destinations = [
    {
      id: 'sigiriya',
      name: 'Sigiriya',
      description: 'Ancient rock fortress and UNESCO World Heritage Site',
      x: '60%',
      y: '35%',
      trail: 'Cultural Trail'
    },
    {
      id: 'galle',
      name: 'Galle Fort',
      description: 'Colonial fortifications and historic charm',
      x: '25%',
      y: '80%',
      trail: 'Coastal Trail'
    },
    {
      id: 'ella',
      name: 'Ella',
      description: 'Scenic hill country with tea plantations',
      x: '70%',
      y: '65%',
      trail: 'Highland Trail'
    },
    {
      id: 'yala',
      name: 'Yala National Park',
      description: 'Premier wildlife safari destination',
      x: '80%',
      y: '75%',
      trail: 'Wildlife Trail'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Interactive Trail Map</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on the pins to explore destinations across Sri Lanka
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Sri Lanka Map */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Sri Lanka Map"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            {/* Destination Pins */}
            {destinations.map((dest) => (
              <div key={dest.id} className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                   style={{ left: dest.x, top: dest.y }}>
                <button
                  onClick={() => setSelectedPin(selectedPin === dest.id ? null : dest.id)}
                  className="w-8 h-8 bg-emerald-600 rounded-full border-4 border-white shadow-lg hover:bg-emerald-700 transition-colors duration-200 pulse-animation"
                >
                  <span className="sr-only">{dest.name}</span>
                </button>
                
                {/* Tooltip */}
                {selectedPin === dest.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-4 bg-white rounded-lg shadow-xl border z-10">
                    <div className="text-center">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{dest.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{dest.description}</p>
                      <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold mb-2">
                        {dest.trail}
                      </span>
                      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-sm transition-colors">
                        Learn More
                      </button>
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailMap;
