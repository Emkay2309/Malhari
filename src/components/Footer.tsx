import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Malhaari</h3>
            <p className="text-gray-400">
              Experience the finest Indian cuisine in a beautiful setting at Ranchi's premier dining destination.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-amber-600" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-amber-600" />
                <span>info@malhaari.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={20} className="text-amber-600" />
                <span>Hochar, Ranchi Ring Rd, Ranchi</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-amber-600" />
                <span>Mon - Fri: 12pm - 11pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-amber-600" />
                <span>Sat - Sun: 11am - 11pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Malhaari Food & Drinks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;