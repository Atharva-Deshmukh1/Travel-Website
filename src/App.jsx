import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Marquee from './Components/Marquee/Marquee'
import About from './Components/About/About'
import Eyes from './Components/Eyes/Eyes'
import Featured from './Components/Featured/Featured'
import ThreeCards from './Components/ThreeCards/ThreeCards'
import Footer from './Components/Footer/Footer'

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    
    <div className='w-full h-full bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <ThreeCards />
      <Footer />
    </div>
    
  )
}

export default App
