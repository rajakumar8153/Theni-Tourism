import React from 'react';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">Theni Tourism</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the breathtaking beauty of Theni, Tamil Nadu. From misty mountains to cascading waterfalls, 
              experience nature at its finest with our expertly guided tours and authentic local experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">info@thenitourism.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <span className="text-gray-300">
                  123 Tourism Street<br />
                  Theni, Tamil Nadu 625531
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/attractions" className="block text-gray-300 hover:text-green-400 transition-colors">
                Tourist Attractions
              </a>
              <a href="/about" className="block text-gray-300 hover:text-green-400 transition-colors">
                About Us
              </a>
              <a href="/testimonials" className="block text-gray-300 hover:text-green-400 transition-colors">
                Reviews
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Theni Tourism. All rights reserved. | Explore the beauty of Tamil Nadu's hidden gem.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;