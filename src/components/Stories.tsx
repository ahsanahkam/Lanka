
import React from 'react';

const stories = [
  {
    title: "Hiking the Highland Trail: Ella's Peaks",
    excerpt: "An unforgettable journey through Sri Lanka's tea country, where misty mountains meet endless green plantations and every sunrise brings new adventures.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    readTime: "5 min read",
    date: "Dec 15, 2023"
  },
  {
    title: "Wildlife Encounters in Yala National Park",
    excerpt: "Face-to-face with Sri Lankan leopards and gentle giants - a wildlife photography adventure that captures the raw beauty of nature at its finest.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
    readTime: "7 min read",
    date: "Dec 10, 2023"
  },
  {
    title: "Coastal Serenity: Galle Fort Sunsets",
    excerpt: "Discovering the timeless charm of colonial architecture against the backdrop of Indian Ocean sunsets - where history meets paradise.",
    image: "https://images.unsplash.com/photo-1571152832930-0f71efe30d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Emma Williams",
    readTime: "4 min read",
    date: "Dec 5, 2023"
  }
];

const Stories = () => {
  return (
    <section id="stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trail Tales</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from travelers who discovered the magic of Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative h-48">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{story.author}</span>
                  <span className="mx-2">•</span>
                  <span>{story.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{story.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{story.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
            Submit Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
