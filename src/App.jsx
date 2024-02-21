import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Marquee from './Components/Marquee/Marquee'
import About from './Components/About/About'
import Eyes from './Components/Eyes/Eyes'
import Featured from './Components/Featured/Featured'

function App() {
  return (
    
    <div className='w-full h-full bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
    </div>
    
  )
}

export default App
