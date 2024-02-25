import React from 'react';

const ThreeCards = () => {
  return (<>
  <h1 id="ourwork" className='text-6xl font-bold text-center bg-[#1b1c27] uppercase pt-20'>our work</h1>
    <div className='w-full h-[80vh] bg-[#1b1c27]  flex gap-5 items-center px-10'>
      <div className='cardcontainer h-[40vh] w-1/2'>
        <div className='card w-full h-full rounded-xl bg-[url("https://i.ytimg.com/vi/Q1TWI6kdIHo/maxresdefault.jpg")] bg-no-repeat bg-cover relative '>
          <div className="absolute rounded-xl bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">ROAD TRIP</div>
        </div>
         

      </div>
      <div className='cardcontainer h-[40vh] flex gap-5 w-1/2'>
        <div className='card w-1/2 h-full rounded-xl bg-[url("https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/1:1/w_1636,h_1636,c_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg")] bg-no-repeat bg-cover relative'>
          <div className="absolute bottom-0 rounded-xl left-0 right-0 p-4 bg-black bg-opacity-50 text-white">CAMPING</div>
        </div>
        <div className='card w-1/2 h-full rounded-xl bg-[url("https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW4lMjBoaWtlfGVufDB8fDB8fHww")] bg-no-repeat bg-cover relative'>
          <div className="absolute bottom-0 left-0 rounded-xl right-0 p-4 bg-black bg-opacity-50 text-white">TREAKING</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ThreeCards;
