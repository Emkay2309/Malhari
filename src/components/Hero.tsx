import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Manually import images from the res folder
import m1 from '../res/m1.jpg';
import m2 from '../res/m2.jpg';
import m3 from '../res/m3.jpg';
import m4 from '../res/m4.jpg';
import m5 from '../res/m5.jpg';
import m6 from '../res/m6.jpg';
import m7 from '../res/m7.jpg';
import m8 from '../res/m8.jpg';
import m9 from '../res/m9.jpg';
import m10 from '../res/m10.jpg';
import m11 from '../res/m11.jpg';
import m12 from '../res/m12.jpg';

const localImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];

const externalImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop'
];

const images = [...localImages, ...externalImages];

const Hero = () => (
  <section id="home" className="relative h-screen">
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 3000 }}
      loop
      className="h-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 flex items-center justify-center text-center z-10"
    >
      <div className="text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Malhaari Food & Drinks
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience the finest Indian cuisine in Ranchi
        </p>
        <motion.a
          href="#book-table"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors inline-block"
        >
          Book a Table
        </motion.a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
