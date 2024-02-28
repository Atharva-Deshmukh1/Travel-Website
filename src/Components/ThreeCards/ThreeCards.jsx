import React from 'react';

const ThreeCards = () => {
  return (
  <>
    <h1 id="ourwork" className='text-[8vw] font-bold text-center bg-[#1b1c27] uppercase pt-20'>our work</h1>
    
    <div className='h-auto sm:hidden py-32 gap-10 justify-center flex flex-wrap bg-[#1b1c27]'>
    
      <div className='bg-[url("https://a-static.besthdwallpaper.com/travel-all-terrain-vehicle-with-lights-on-the-road-in-forests-at-dawn-wallpaper-3840x2160-95444_54.jpg")] bg-no-repeat bg-cover relative w-[22rem] h-72 mx-[10%] border-2 border-black rounded-lg overflow-hidden'>
        <div className="absolute bottom-0  left-0 right-0 p-4 bg-black bg-opacity-50 text-white">ROAD TRIP</div>
      </div>

      <div className='bg-[url("https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/1:1/w_1636,h_1636,c_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg")] bg-no-repeat bg-cover relative w-[22rem] h-72 mx-[10%] border-2 border-black rounded-lg overflow-hidden'>
        <div className="absolute bottom-0  left-0 right-0 p-4 bg-black bg-opacity-50 text-white">CAMPING</div>
      </div>

      <div className='bg-[url("https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW4lMjBoaWtlfGVufDB8fDB8fHww")] bg-no-repeat bg-cover relative w-[22rem] h-72 mx-[10%] border-2 border-black rounded-lg overflow-hidden'>
      <div className="absolute bottom-0 left-0  right-0 p-4 bg-black bg-opacity-50 text-white">TREAKING</div>
      </div>
      
    </div>

    <div className='hidden w-full max-h-auto min-h-[80vh]  bg-[#1b1c27]  sm:flex sm:max-lg:flex-wrap gap-5 items-center px-10'>
      
      <div className='cardcontainer h-[40vh] w-full px-10 xl:px-0 lg:w-1/2'>
        <div className='card w-full h-full rounded-xl bg-[url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/8b/64/ea/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_88207e0b57748807e05a")] bg-no-repeat bg-cover overflow-hidden relative border-2 border-black'>
          <div className="absolute  bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">ROAD TRIP</div>
        </div>
      </div>

      <div className='cardcontainer h-[40vh] flex gap-5 w-full lg:w-1/2 '>
        <div className='card w-72 md:w-1/2 h-full rounded-xl bg-[url("https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/1:1/w_1636,h_1636,c_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg")] bg-no-repeat bg-cover relative overflow-hidden border-2 border-black'>
          <div className="absolute bottom-0  left-0 right-0 p-4 bg-black bg-opacity-50 text-white">CAMPING</div>
        </div>
        <div className='card w-1/2 h-full rounded-xl bg-[url("https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW4lMjBoaWtlfGVufDB8fDB8fHww")] bg-no-repeat bg-cover overflow-hidden relative border-2 border-black'>
          <div className="absolute bottom-0 left-0  right-0 p-4 bg-black bg-opacity-50 text-white">TREAKING</div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default ThreeCards;
