import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, rating, comment }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{comment}</p>
      <p className="font-semibold text-gray-800">- {name}</p>
    </motion.div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Singh",
      rating: 5,
      comment: "Amazing ambiance and delicious food! The butter chicken is to die for."
    },
    {
      name: "Rahul Kumar",
      rating: 4,
      comment: "Great service and authentic Indian flavors. Will definitely come back!"
    },
    {
      name: "Anita Sharma",
      rating: 5,
      comment: "Best restaurant in Ranchi! The biryani is absolutely fantastic."
    }
  ];

  return (
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-gray-600">What our guests say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;