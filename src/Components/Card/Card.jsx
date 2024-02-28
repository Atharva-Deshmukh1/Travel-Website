import React, { useState } from 'react';

const Card = ({ image, Name, desc }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className='relative group h-[27vh] w-[40vw] sm:max-lg:h-[200px] sm:max-lg:w-[275px] lg:w-[18rem] lg:h-[12rem] bg-[#a8aac10c] rounded-lg overflow-hidden cursor-pointer border-2 border-white'
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
        >
            <img src={image} alt={Name} className='w-full h-[21vh] lg:h-[10rem] object-cover' />
            <h3 className='text-lg text-center font-bold text-gray-100 z-10'>{Name}</h3>
            <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ${showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-zinc-300 bg-opacity-90 w-full h-full absolute inset-0 transition-opacity duration-300 ${showDetails ? 'opacity-100' : 'opacity-[-10]'}`}></div>
                <p className='text-sm text-black text-center z-10'>{showDetails ? desc : ''}</p>
                <button className={`mt-2 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 transition-colors z-10 ${showDetails ? 'block' : 'hidden'}`}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Card;
