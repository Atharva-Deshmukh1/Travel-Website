import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (

    <motion.div
      id='aboutus'
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className='w-full pt-20 bg-[#184652] rounded-tl-3xl rounded-tr-3xl z-50  relative'
    >

      <h1 className='px-10 md:px-20 font-bold text-[8vw] md:text-5xl'>About Us:</h1>

      <div className='flex flex-wrap md:flex-nowrap p-6 md:p-10'>

        <div className='text-[2vw] md:text-[1.5vw] tracking-tight px-4 md:px-10 w-full pb-10 md:pb-0 md:w-3/4 relative z-10'>
          <p>
            Welcome to TravelWise, where wanderlust meets convenience. We're passionate about crafting unforgettable
            travel experiences for adventurers of all kinds. Whether you're seeking the thrill of exploring new cultures,
            the tranquility of nature's wonders, or the pulse of bustling city life, we're here to guide you every step of the way.
          </p>
          <p>
            At TravelWise, we understand that travel isn't just about reaching a destination—it's about the journey itself.
            That's why we're committed to providing you with comprehensive resources, expert insights, and personalized
            recommendations to help you plan your perfect getaway.
          </p>
          <p>
            Join us on a journey of discovery, exploration, and boundless adventure. Let's embark on this incredible adventure together,
            because at TravelWise, the world is yours to explore.
          </p>
        </div>

        <div className='w-[80%] mx-10 md:mx-0 md:w-1/2 h-auto md:h-52  relative z-10'>
          <img className='w-full rounded-xl ' src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg" alt="" />
        </div>

      </div>
      <div className='border-black border-b-8'></div>
    </motion.div>
  );
};

export default About;
