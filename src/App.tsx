import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Location />
      <Reviews />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;