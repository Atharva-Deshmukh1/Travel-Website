import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20  bg-green-900 rounded-tl-3xl rounded-tr-3xl '>
      <div className='flex gap-10 border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap'>
        <h1 className='text-[22vw] leading-none font-bold'>We are OG </h1>
        <h1 className='text-[22vw] leading-none font-bold'>We are OG</h1>
      </div>
    </div>
  )
}

export default Marquee
