import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full py-20  bg-green-900 rounded-tl-3xl rounded-tr-3xl '>
      <div className='flex  border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:"0"}}
        animate={{x:"-100%"}}
        transition={{repeat:Infinity, ease:"linear", duration:10}}
        className='text-[22vw] leading-none font-bold pr-10'>We are OG </motion.h1>

        <motion.h1 initial={{x:"0"}}
        animate={{x:"-100%"}}
        transition={{repeat:Infinity, ease:"linear", duration:10}}
        className='text-[22vw] leading-none font-bold pr-10'>We are OG</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
