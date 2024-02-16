import React from 'react'

function Navbar() {
  return (
    <div className='w-full px-20 py-8 flex justify-between z-[999]  fixed'>
      <div>
        <h2>logo</h2>
      </div>
      <div className='flex gap-10'>
        {["Services","Our Work","About us","Insights","Contact us"].map((item,index)=>(
            <a key={index} className={`text-md font-semibold ${index === 4 && "ml-32"}` }>{item}</a>
        ))}
      </div>
      
    </div>
  )
}

export default Navbar
