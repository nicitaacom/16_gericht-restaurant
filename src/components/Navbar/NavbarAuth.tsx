import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from "../../constant";
import { motion } from 'framer-motion'
import {gsap} from 'gsap'

import useAuthModal from '../../hooks/useAuthModal';


export function NavbarAuth () {
  const authModal = useAuthModal()
  const [showMobileLinks,setShowMobileLinks] = useState(false)

  if (showMobileLinks) {
    document.body.style.overflow = 'hidden';
  }

  const mobileMenuRef = useRef(null);
  function closeMobileLinks() {
    const mobileMenu = mobileMenuRef.current;
    gsap.to(mobileMenu, {
      duration: 1,
      y:-1920,
      onComplete: () => setShowMobileLinks(false),
    });
    document.body.style.overflow = 'visible';
  }

 

return (
<>
      <div className='navbar-auth'>
          <span><a className='link' onClick={authModal.onOpen}>Log In / Registration</a></span>
        <div className='line'/>
          <span><a className='link' onClick={() => {/* modal book a table */}}>Book Table</a></span>
      </div>

      <svg className='navbar-mobile-icon' onClick={() => setShowMobileLinks(true)}>
            <use xlinkHref='./sprite.svg#hamburger-menu'/>
      </svg>
      
      {showMobileLinks && 
      <motion.div className='navbar-mobile-menu' animate={{y:[-1200,0]}} ref={mobileMenuRef}
      transition={{ type: "spring",duration:0.75}}>
         <ul className="navbar-links-mobile">
           {navLinks.map(navLink => (
           <Link className='li-item' to={navLink.to} key={navLink.id}>{navLink.title}</Link>
          ))}
        </ul>
        <div className='navbar-auth-mobile'>
          <span><a onClick={() => {/* modal auth */}}>Log In / Registration</a></span>
        <div className='line'/>
          <span><a onClick={() => {/* modal book a table */}}>Book Table</a></span>
        </div>
        <svg style={{position:'absolute',top:'3rem',right:'3rem',width:'2rem',height:'2rem',fill:'#ffffff'}}
        onClick={() => closeMobileLinks()}>
            <use xlinkHref='./sprite.svg#close'/>
        </svg>
      </motion.div>}
</>
)
}