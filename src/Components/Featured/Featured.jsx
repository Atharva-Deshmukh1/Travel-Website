import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Featured = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      // When the component is in view, trigger animations
      // You can trigger animations here
    }
  }, [inView]);

  return (
    <div ref={ref} id="featured" className='w-full py-10 bg-[#184652] pb-20 h-auto border-t-8 border-black z-10'>
      <div className='w-full px-10'>
        <h1 className='text-[8vw] md:text-6xl font-bold tracking-tight text-center '>Featured Product</h1>
      </div>
      <div className='px-2 sm:px-20 pt-10'>
        <div className='cards w-full flex gap-10 overflow-hidden'>
          <motion.div
            className='cardcontainer relative w-1/2 h-[25vh] sm:h-[75vh]'
            initial={{ x: '-100%', opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='absolute flex z-50  left-[50%] -translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl invisible transition-opacity duration-500' id="brazil">
              {"BRAZIL".split("").map((item,index)=>(
                <span className='hidden md:inline-block font-bold text-[#1b1c27]'style={{ WebkitTextStroke: '2px white' }} key={index}>{item}</span>
              ))}
            </h1>
            <div
              className='h-full w-full  md:w-full md:h-full rounded-xl bg-[url("https://www.celebritycruises.com/blog/content/uploads/2021/09/what-is-brazil-known-for-christ-the-redeemer-aerial-hero.jpg")] bg-cover '
              onMouseEnter={() => document.getElementById("brazil").classList.remove("invisible")}
              onMouseLeave={() => document.getElementById("brazil").classList.add("invisible")}
              
            >
              <div className='sm:hidden text-sm z-50 absolute bottom-[2px] left-0  text-white w-full h-[10%]'>BRAZIL</div>
            </div>
          </motion.div>
          
          <motion.div
            className='cardcontainer relative w-1/2 h-[25vh] sm:h-[75vh] z-30'
            initial={{ x: '100%', opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='absolute flex z-50 right-[50%] translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl invisible transition-opacity duration-500' id="london">
              {"LONDON".split("").map((item,index)=>(
                <span className='hidden md:inline-block text-[#1b1c27] font-bold'style={{ WebkitTextStroke: '2px white' }} key={index}>{item}</span>
              ))}
            </h1>
            <div
              className='h-full w-full z-10 md:w-full md:h-full rounded-xl bg-[url("https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg")]  bg-cover '
              onMouseEnter={() => document.getElementById("london").classList.remove("invisible")}
              onMouseLeave={() => document.getElementById("london").classList.add("invisible")}
            >
            <div className='sm:hidden text-sm z-50 absolute bottom-[2px] left-0  text-white w-full h-[10%]'>LONDON</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

  );
};

export default Featured;
