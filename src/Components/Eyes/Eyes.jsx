import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let delX = mouseX - window.innerWidth / 2;
            let delY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(delY, delX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div id="bookings" className='eyes-section w-full h-screen overflow-hidden relative z-0'>
            
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className='w-full h-full '>
                
                <div className='absolute top-20 left-10'>
                    <Card 
                        image="https://www.axisbank.com/images/default-source/progress-with-us_new/what-to-do-in-switzerland.jpg"
                        Name="Switzerland"
                        desc="Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps."
                    />
                </div>
                <div className='absolute top-20 right-10'>
                    <Card 
                        image="https://a.cdn-hotels.com/gdcs/production126/d1421/11d188b3-38f4-4842-88f6-a928f14b5581.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                        Name="Dubai"
                        desc="Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene."
                    />
                </div>
                <div className='absolute bottom-20 left-10'>
                    <Card 
                        image="https://im.indiatimes.in/media/content/2015/Jan/maldives-twisted-sifter_1421316320_725x725.jpg?w=725&h=483&cc=1"
                        Name="Maldives"
                        desc="A popular honeymoon destination for Indians, Maldives is a good place to visit if you want an international location teeming with Indians."
                    />
                </div>
                <div className='absolute bottom-20 right-10'>
                    <Card 
                        image="https://im.indiatimes.in/media/content/2015/Jan/singapore-marhsall-university_1421316697_725x725.jpg?w=725&h=483&cc=1"
                        Name="Singapore"
                        desc="One of the most beautiful countries, Singapore has a lot to offer in terms of nature, culture and cuisine, modern structures and architecture, monuments and beaches."
                    />
                </div>

                <div className='hidden absolute md:flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                    
                    <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-slate-300'>
                        <div className='w-2/3 h-2/3 relative rounded-full bg-slate-800'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-slate-300'>
                        <div className='w-2/3 h-2/3 relative rounded-full bg-slate-800'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Eyes;
