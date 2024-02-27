import React from 'react';

const Featured = () => {
  return (
    <div id="featured" className='w-full py-10 bg-[#184652] pb-20'>
      <div className='w-full px-10'>
        <h1 className='text-[8vw] md:text-6xl font-bold tracking-tight text-center'>Featured Product</h1>
      </div>
      <div className='px-20 pt-10'>
        <div className='cards w-full flex gap-10'>
          <div className='cardcontainer relative w-1/2 h-[75vh] '>
            <h1 className='absolute flex z-50 right-0 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl invisible transition-opacity duration-500' id="brazil">
              {"BRAZIL".split("").map((item,index)=>(
                <span className='inline-block' key={index}>{item}</span>
              ))}
            </h1>
            <div
              className='h-40 w-40 md:w-full md:h-full rounded-xl bg-[url("https://a.loveholidays.com/media-library/production/98470b53b0524524c50c567cfc21d2bee6aeaedf-2121x1414.jpg?auto=avif%2Cwebp&quality=45&dpr=2&optimize=high&fit=crop&width=2000")] bg-cover '
              onMouseEnter={() => document.getElementById("brazil").classList.remove("invisible")}
              onMouseLeave={() => document.getElementById("brazil").classList.add("invisible")}
            >
            </div>
          </div>
          
          <div className='cardcontainer relative w-1/2 h-[75vh] '>
            <h1 className='absolute flex z-50 right-full translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl invisible transition-opacity duration-500' id="london">
              {"LONDON".split("").map((item,index)=>(
                <span className='inline-block' key={index}>{item}</span>
              ))}
            </h1>
            <div
              className='h-40 w-40 md:w-full md:h-full rounded-xl bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6b2h15x3ZO6FtyS5lM2-WGM6_JhDLNHHStGuA06SqIw&s")]  bg-cover '
              onMouseEnter={() => document.getElementById("london").classList.remove("invisible")}
              onMouseLeave={() => document.getElementById("london").classList.add("invisible")}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
