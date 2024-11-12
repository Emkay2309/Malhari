import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import images from the res folder
import d1 from '../res/d1.jpg';
import d2 from '../res/d2.jpg';
import d3 from '../res/d3.jpg';
import d4 from '../res/d4.jpg';
import d5 from '../res/d5.jpg';
import d6 from '../res/d6.jpg';
import d7 from '../res/d7.jpg';
import d8 from '../res/d8.jpg';
import d9 from '../res/d9.jpg';
import d10 from '../res/d10.jpg';
import d11 from '../res/d11.jpg';
import d12 from '../res/d12.jpg';


const images = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12];

const Hero = () => (
  <section id="our-dishes" className="py-16 bg-gray-100">
    <h2 className="text-4xl font-bold text-center mb-10">Our Dishes</h2>
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000 }}
      loop
      spaceBetween={20}
      slidesPerView={3} // Adjust to show 3 slides at a time
      className="max-w-6xl mx-auto"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 w-full">
              <img 
                src={image} 
                alt={`Dish ${index + 1}`} 
                className="h-full w-full object-cover" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Dish {index + 1}</h3>
              <p className="text-gray-600">A brief description of the dish goes here.</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Hero;
