import {  motion } from 'framer-motion'
import React from 'react'

const LandingPage = () => {
  
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className='hidden sm:block relative top-0 w-full h-[430px] md:h-screen bg-[url("https://www.pixground.com/wp-content/uploads/2023/10/Maui-Beach-Sunset-4K-Wallpaper-jpg.webp")] bg-no-repeat bg-cover pt-1' >
      
      <div className='mt-32 px-10 md:mt-52 md:px-20 leading-10'>
        {["let's Explore ", "the World ", "together"].map((item, index) => {
          return (
            <div>
              <div className='text-black w-fit items-center flex overflow-hidden '>
              {index === 1 && (
              <motion.div
              initial={{width:0}} 
              animate={{width:"9vw"}}  
              transition={{ease:[0.76, 0, 0.24, 1], duration:1}}
              className='border-2 md:border-4 border-black mr-[1vw] w-[8vw] rounded-md h-8 md:h-[4.6vw]  relative bg-[url("https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=")] bg-no-repeat bg-cover '></motion.div>
              )}
              <h1 className='uppercase text-[8.5vw] md:max-xl:text-[8vw] xl:text-8xl leading-10 font-bold md:leading-[5.7vw]'>{item}</h1>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
    <div className='sm:hidden relative top-0  w-full h-[430px] md:h-screen bg-[url("https://external-preview.redd.it/z8CuPkClf4movRsMiAN13NBBK28ci1QFAoq8EyRWzZ0.jpg?width=1080&crop=smart&auto=webp&s=de7cf0c99c6c0ce56124a78df735389f7680cdc6")] bg-no-repeat bg-cover pt-1' >
      
      <div className='mt-32 px-10 md:mt-52  md:px-20 leading-10'>
        {["let's Explore ", "the World ", "together"].map((item, index) => {
          return (
            <div>
              <div className='text-black w-fit items-center flex overflow-hidden '>
              {index === 1 && (
              <motion.div
              initial={{width:0}} 
              animate={{width:"12vw"}}  
              transition={{ease:[0.76, 0, 0.24, 1], duration:1}}
              className='border-2 md:border-4 border-black mr-[1vw] w-[8vw] rounded-md h-8 md:h-[4.6vw]  relative bg-[url("https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=")] bg-no-repeat bg-cover '></motion.div>
              )}
              <h1 className='uppercase text-[9.5vw] md:max-xl:text-[8vw] xl:text-8xl leading-[2.7rem] font-bold md:leading-[5.7vw] text-white' style={{ WebkitTextStroke: '2px black' }}>{item}</h1>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
    </>
  )
}

export default LandingPage
