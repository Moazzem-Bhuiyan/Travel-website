import React from 'react';
import { motion } from 'framer-motion';

const ConnectedUs = () => {
  return (
    <div className="my-20">
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/2FqWJsc/unsplash-Tej-Fa7-VW5e4.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>

        {/* Animated Heading */}
        <motion.h1 
          className="text-5xl font-bold text-white -mt-60 p-5"
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }}   // Animate to this state
          transition={{ duration: 1 }}      // Duration of the animation
        >
          Subscribe to get special price
        </motion.h1>

        <div className="md:w-1/2 flex bg-white py-1 md:px-2 -mt-5 rounded-full">
          <motion.input
            type="search"
            placeholder="Enter your email"
            className="w-full outline-none bg-white py-1 mt-1 px-2 rounded-full"
            initial={{ scale: 1 }}        // Initial scale
            whileFocus={{ scale: 1.05 }}   // Scale up on focus
            transition={{ duration: 0.2 }}  // Duration of the focus animation
          />
          <motion.button 
            className="btn text-white rounded-full"
            initial={{ scale: 1 }}        // Initial scale
            whileHover={{ scale: 1.1 }}    // Scale up on hover
            transition={{ duration: 0.3 }}  // Duration of the hover animation
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ConnectedUs;
