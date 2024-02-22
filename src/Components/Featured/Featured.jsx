import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-10 bg-slate-600 pb-20'>
      <div className='w-full px-10'>
        <h1 className='text-8xl tracking-tight'>Featured Product</h1>
      </div>
      <div className='px-20 pt-10'>
        <div className='cards w-full flex gap-10'>
          <div className='cardcontainer relative w-1/2 h-[75vh] '>
            <h1 className='absolute z-50 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl'>BRAZIL</h1>
            <div className='w-full h-full rounded-xl bg-green-500  '></div>
          </div>
          <div className='cardcontainer relative w-1/2 h-[75vh] '>
          <h1 className='absolute z-50 right-full translate-x-1/2 -translate-y-1/2 top-1/2 tracking-tighter text-6xl'>LONDON</h1>
            <div className='w-full h-full rounded-xl bg-green-500'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
