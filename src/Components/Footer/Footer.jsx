import React from 'react'

const Footer = () => {
  return (
  <>
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-10 md:p-20'>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <div className='heading'>
          <h1 className='text-2xl md:text-5xl font-bold uppercase '>
            TRAVEL-
          </h1>
          <h1 className='text-2xl md:text-5xl font-bold uppercase '>
            WISE
          </h1>
        </div>
        <h1>Travel in style.</h1>
      </div>
      <div className='w-1/2'>
        <h1 className='text-2xl md:text-5xl font-bold uppercase '>
          presentation
        </h1>
        <div className='flex flex-col justify-center pt-10 gap-2'>
          <a href="https://atharva-deshmukh1.github.io/Home-Decor-Website/">Home Decor Website</a>
          <a href="https://atharva-deshmukh1.github.io/Currency-Converter/">Currency Converter</a>
          <a href="https://atharva-deshmukh1.github.io/Image-Search/">Image Search Engine</a>
          <a href="https://atharva-deshmukh1.github.io/Mensware-Website/">MensWear Website</a>
        </div>

        <div className='flex flex-col justify-center pt-10 gap-2'>
          <h1 className='text-2xl font-bold'>Online Presence</h1>
          <a href="https://atharva-deshmukh1.github.io/Portfolio-Website/">Portfolio</a>
          <a href="https://github.com/Atharva-Deshmukh1">Github</a>
          <a href="https://www.linkedin.com/in/atharva-deshmukh-0899b8275/">Linkdin</a>
        </div>
      </div>

    </div>
    <span className="text-sm text-gray-500  flex items-center justify-center pb-5">
      © 2023
      <a href="https://github.com/Atharva-Deshmukh1" className="hover:underline">
        Atharva_Deshmukh
      </a>
      . All Rights Reserved.
    </span>
  </>
  )
}

export default Footer