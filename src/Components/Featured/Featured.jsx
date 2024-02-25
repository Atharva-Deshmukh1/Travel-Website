import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {

  const [isHovering, setHovering] = useState(false)

  return (
    
    <div id="featured" className='w-full py-10 bg-[#9ec1d7] pb-20'>
      <div className='w-full px-10'>
        <h1 className='text-6xl font-bold tracking-tight text-center'>Featured Product</h1>
      </div>
      <div className='px-20 pt-10'>
        <div className='cards w-full flex gap-10'>
          <div className='cardcontainer relative w-1/2 h-[75vh] '>
            <h1  className='absolute flex bg-red-400 right-0 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl'>
              {"BRAZIL".split("").map((item,index)=>(
                <span className='inline-block'>{item}</span>
              ))}
            </h1>
            <div className='w-full h-full rounded-xl bg-[url("https://a.loveholidays.com/media-library/production/98470b53b0524524c50c567cfc21d2bee6aeaedf-2121x1414.jpg?auto=avif%2Cwebp&quality=45&dpr=2&optimize=high&fit=crop&width=2000")] bg-cover '>
              
            </div>
          </div>
          
          <div className='cardcontainer relative w-1/2 h-[75vh] '>
          <h1 className='absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl'>
          {"LONDON".split("").map((item,index)=>(
                <span className='inline-block'>{item}</span>
              ))}
          </h1>
            <div className='w-full h-full rounded-xl bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6b2h15x3ZO6FtyS5lM2-WGM6_JhDLNHHStGuA06SqIw&s")]  bg-cover '></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
