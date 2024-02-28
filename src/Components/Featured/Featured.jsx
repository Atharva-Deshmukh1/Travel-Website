import React from 'react';

const Featured = () => {
  return (
    <div id="featured" className='w-full py-10 bg-[#184652] pb-20 h-auto border-t-8 border-black'>
      <div className='w-full px-10'>
        <h1 className='text-[8vw] md:text-6xl font-bold tracking-tight text-center '>Featured Product</h1>
      </div>
      <div className='px-2 sm:px-20 pt-10'>
        <div className='cards w-full flex gap-10'>
          <div className='cardcontainer relative w-1/2 h-[25vh] sm:h-[75vh] '>
            <h1 className='absolute flex z-50 right-10 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl invisible transition-opacity duration-500' id="brazil">
              {"BRAZIL".split("").map((item,index)=>(
                <span className='hidden sm:inline-block font-bold text-[#1b1c27]' key={index}>{item}</span>
              ))}
            </h1>
            <div
              className='h-full w-full sm:h-40 sm:w-40 md:w-full md:h-full rounded-xl bg-[url("https://www.celebritycruises.com/blog/content/uploads/2021/09/what-is-brazil-known-for-christ-the-redeemer-aerial-hero.jpg")] bg-cover '
              onMouseEnter={() => document.getElementById("brazil").classList.remove("invisible")}
              onMouseLeave={() => document.getElementById("brazil").classList.add("invisible")}
            >
            </div>
          </div>
          
          <div className='cardcontainer relative w-1/2 h-[25vh] sm:h-[75vh] '>
            <h1 className='absolute flex z-50 right-full translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl invisible transition-opacity duration-500' id="london">
              {"LONDON".split("").map((item,index)=>(
                <span className='hidden sm:inline-block text-[#1b1c27] font-bold' key={index}>{item}</span>
              ))}
            </h1>
            <div
              className='h-full w-full sm:h-40 sm:w-40 md:w-full md:h-full rounded-xl bg-[url("https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg")]  bg-cover '
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
