import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1' >
      <div className='mt-52 px-20'>
        {["we create", "Eye opening", "presentations"].map((item, index) => {
          return (
            <div>
              <div className='w-fit items-center flex overflow-hidden'>
              {index === 1 && (<div className='mr-[1vw] w-[8vw] rounded-md h-[4.6vw]  relative bg-red-800'></div>)}
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
