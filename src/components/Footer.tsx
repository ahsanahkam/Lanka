
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Lanka Trails</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your gateway to discovering Sri Lanka's incredible diversity. From ancient temples to pristine beaches, 
              we curate unforgettable experiences that showcase the pearl of the Indian Ocean.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.81 3.708 13.659 3.708 12.362c0-1.297.49-2.448 1.42-3.321.93-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.873.873 1.297 2.024 1.297 3.321 0 1.297-.424 2.448-1.297 3.321-.873.873-2.024 1.305-3.321 1.305zm7.508-9.441c-.424 0-.765-.341-.765-.765V5.617c0-.424.341-.765.765-.765h1.298c.424 0 .765.341.765.765v1.165c0 .424-.341.765-.765.765H15.957z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('trails')} className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Explore Trails
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('stories')} className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Stories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('finder')} className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Plan Your Trip
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium">Email:</span><br />
                info@lankatrails.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Phone:</span><br />
                +94 11 123 4567
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Address:</span><br />
                Colombo, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 Lanka Trails. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Discover Sri Lanka's Paths with Lanka Trails—Your Journey, Your Way.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
