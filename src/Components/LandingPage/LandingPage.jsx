import {  motion } from 'framer-motion'
import React from 'react'

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className='w-full h-screen bg-[url("https://www.pixground.com/wp-content/uploads/2023/10/Maui-Beach-Sunset-4K-Wallpaper-jpg.webp")] bg-no-repeat bg-cover pt-1' >
      <div className='mt-52 px-20'>
        {["we give", "the best", "vacation possible"].map((item, index) => {
          return (
            <div>
              <div className='text-black w-fit items-center flex overflow-hidden '>
              {index === 1 && (
              <motion.div
              initial={{width:0}} 
              animate={{width:"9vw"}}  
              transition={{ease:[0.76, 0, 0.24, 1], duration:1}}
              className='border-4 border-black mr-[1vw] w-[8vw] rounded-md h-[4.6vw]  relative bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6-Hb1gZaYflP1uAGUS5XlAYk7ZJ72BrMgOQWNdqrx9B6ArX_U1fb4L_7V7xpNvpbcEA&usqp=CAU")] bg-no-repeat bg-cover '></motion.div>
              )}
              <h1 className='uppercase text-8xl font-bold leading-[5.5vw]'>{item}</h1>
              </div>
            </div>
          )
        })}

      </div>
      <div className='border-t-2 border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
        {["for public and private companies","first pitch to IPO"].map((item,index)=>(
          <p >{item}</p>
        ))}

      <div className='px-4 py-2 border-2 border-zinc-700 rounded-full'>
        yoo
      </div>
        
      </div>
    </div>
  )
}

export default LandingPage
