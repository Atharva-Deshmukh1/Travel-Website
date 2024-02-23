import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Eyes = () => {

    
const [rotate, setRotate] = useState(0)

useEffect(()=>{
    window.addEventListener("mousemove" , (e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let delX = mouseX - window.innerWidth/2;
        let delY = mouseY - window.innerHeight/2;

        var angle = Math.atan2(delY, delX) * (180/Math.PI)
        setRotate(angle-180)

    })
})


  return (
    <div className='eys w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full'>
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-slate-300'>
                    <div  className=' w-2/3 h-2/3 relative  rounded-full bg-slate-800'>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-10 h-10 rounded-full bg-zinc-100'>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-slate-300'>
                    <div className='w-2/3 h-2/3 relative  rounded-full bg-slate-800'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-10 h-10 rounded-full bg-zinc-100'>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        <Card />
        </div>
      
    </div>
  )
}

export default Eyes
