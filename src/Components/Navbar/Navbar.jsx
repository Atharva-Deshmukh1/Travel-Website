import React, { useState, useEffect } from 'react';

function Navbar() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleNavLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`w-full px-6 md:px-20 py-4 md:py-6 flex justify-between z-[999] text-black fixed backdrop-filter backdrop-blur-lg transition-transform ${visible ? '' : '-translate-y-full'}`}>
      
      <div>
        <h2 className='font-bold text-lg md:text-2xl'>TravelWise</h2>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex md:gap-10 md:items-center md:justify-between ${isMobileMenuOpen ? 'flex flex-col md:flex-row' : 'hidden'}`}>
        {["About us", "Bookings", "Featured", "Our Work", "Contact us"]
          .filter((item) => !isMobileMenuOpen || item !== "Contact us")
          .map((item, index) => (
            <a key={index} href={`#${item.toLowerCase().replace(/\s/g, '')}`} 
            onClick={(e) => handleNavLinkClick(e, item.toLowerCase().replace(/\s/g, ''))} 
            className={`text-md md:text-md font-semibold ${index === 4 && "ml-4 md:ml-8"} `}>{item}</a>
          ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
