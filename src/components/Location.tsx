import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Copy } from 'lucide-react';

const Location = () => {
  const address = "Malhaari Food And Drinks Hochar, Ranchi Ring Rd, Ranchi, Jharkhand 834006";

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
  };

  return (
    <section id="location" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-gray-600">Visit us for an unforgettable dining experience</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-amber-600 flex-shrink-0" />
              <p className="text-gray-700">{address}</p>
            </div>
            <button
              onClick={copyAddress}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors"
            >
              <Copy size={20} />
              Copy Address
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[400px] rounded-lg overflow-hidden shadow-md"
          >
            <iframe
              title="Malhaari Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.019647385632!2d85.36975661744384!3d23.39731999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1e6773a4f1f%3A0x1c0a14c6e9c9f8e0!2sMalhaari%20Food%20And%20Drinks!5e0!3m2!1sen!2sin!4v1647887654321!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;