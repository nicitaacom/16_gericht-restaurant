import { Link } from 'react-router-dom';
import { useRef } from 'react';

import {gsap} from 'gsap'
import { motion } from 'framer-motion'

import { navLinks } from "../../constant";
import useHamburgerMenu from '../../hooks/useHamburgerMenu';

export function HamburgerMenu () {

 const hamburgerMenu = useHamburgerMenu()

  if (hamburgerMenu.isOpen) {
    document.body.style.overflow = 'hidden';
  }

  const mobileMenuRef = useRef(null);
  function closeMobileLinks() {
    const mobileMenu = mobileMenuRef.current;
    gsap.to(mobileMenu, {
      duration: 1,
      y:-1920,
      onComplete: () => hamburgerMenu.onClose(),
    });
    document.body.removeAttribute('style');
  }

return (

  <motion.div className='navbar-hamburger-menu' animate={{y:[-1200,0]}} ref={mobileMenuRef}
  transition={{ type: "spring",duration:0.75}}>
     <ul className="navbar-hamburger-menu_links-mobile">
       {navLinks.map(navLink => (
       <Link className='li-item' to={navLink.to} key={navLink.id}>{navLink.label}</Link>
      ))}
    </ul>
    <div className='navbar-hamburger-menu_auth-mobile'>
      <span><a onClick={() => {/* modal auth */}}>Log In / Registration</a></span>
    <div className='line'/>
      <span><a onClick={() => {/* modal book a table */}}>Book Table</a></span>
    </div>
    <svg className='navbar-hamburger-menu_close'
    onClick={() => closeMobileLinks()}>
        <use xlinkHref='./sprite.svg#close'/>
    </svg>
  </motion.div>

)
}