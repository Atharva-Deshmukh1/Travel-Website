import React from 'react';

function Navbar() {
  return (
    <div className='w-full px-20 py-6 flex justify-between z-[999] text-black fixed backdrop-filter backdrop-blur-lg'>
      <div>
        <h2 className='font-bold text-2xl'>TravelWise</h2>
      </div>
      <div className='flex gap-10'>
        {["About us", "Bookings", "Featured", "Our Work", "Contact us"].map((item, index) => (
          <a key={index} className={`text-md font-semibold ${index === 4 && "ml-32"} `}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar;
