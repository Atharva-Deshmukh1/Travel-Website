import React from 'react'

const ThreeCards = () => {
  return (
    <div className='w-full h-screen bg-zinc-300 flex gap-5 items-center px-10'>
      <div className='cardcontainer h-[40vh] w-1/2'>
        <div className='card w-full h-full rounded-xl bg-blue-900'></div>
      </div>
      <div className='cardcontainer h-[40vh] flex gap-5 w-1/2'>
      <div className='card w-1/2 h-full rounded-xl bg-blue-900'></div>
      <div className='card w-1/2 h-full rounded-xl bg-blue-900'></div>
        
      </div>
    </div>
  )
}

export default ThreeCards
