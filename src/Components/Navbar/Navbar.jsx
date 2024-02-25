// import React, { useState, useEffect } from 'react';

// function Navbar() {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <div className={`w-full px-20 py-6 flex justify-between z-[999] text-black fixed backdrop-filter backdrop-blur-lg transition-transform ${visible ? '' : '-translate-y-full'}`}>
//   <div>
//     <h2 className='font-bold text-2xl'>TravelWise</h2>
//   </div>
//   <div className='flex gap-10'>
//     {["About us", "Bookings", "Featured", "Our Work", "Contact us"].map((item, index) => (
//       <a key={index} href={`#${item.toLowerCase().replace(/\s/g, '')}`} className={`text-md font-semibold ${index === 4 && "ml-32"} `}>{item}</a>
//     ))}
//   </div>
// </div>

//   );
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  return (
    <div className={`w-full px-20 py-6 flex justify-between z-[999] text-black fixed backdrop-filter backdrop-blur-lg transition-transform ${visible ? '' : '-translate-y-full'}`}>
      <div>
        <h2 className='font-bold text-2xl'>TravelWise</h2>
      </div>
      <div className='flex gap-10'>
        {["About us", "Bookings", "Featured", "Our Work", "Contact us"].map((item, index) => (
          <a key={index} href={`#${item.toLowerCase().replace(/\s/g, '')}`} onClick={(e) => handleNavLinkClick(e, item.toLowerCase().replace(/\s/g, ''))} className={`text-md font-semibold ${index === 4 && "ml-32"} `}>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
