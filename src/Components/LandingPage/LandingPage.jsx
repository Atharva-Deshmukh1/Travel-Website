import {  motion } from 'framer-motion'
import React from 'react'

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className='w-full h-screen bg-[url("https://www.pixground.com/wp-content/uploads/2023/10/Maui-Beach-Sunset-4K-Wallpaper-jpg.webp")] bg-no-repeat bg-cover pt-1' >
      <div className='mt-52 px-20'>
        {["let's Explore ", "the World ", "together"].map((item, index) => {
          return (
            <div>
              <div className='text-black w-fit items-center flex overflow-hidden '>
              {index === 1 && (
              <motion.div
              initial={{width:0}} 
              animate={{width:"9vw"}}  
              transition={{ease:[0.76, 0, 0.24, 1], duration:1}}
              className='border-4 border-black mr-[1vw] w-[8vw] rounded-md h-[4.6vw]  relative bg-[url("https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=")] bg-no-repeat bg-cover '></motion.div>
              )}
              <h1 className='uppercase text-8xl font-bold leading-[5.7vw]'>{item}</h1>
              </div>
            </div>
          )
        })}

      </div>
      
    </div>
  )
}

export default LandingPage
