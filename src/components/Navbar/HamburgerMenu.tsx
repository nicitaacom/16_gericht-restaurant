import { Link } from 'react-router-dom';
import { useRef } from 'react';

import { gsap } from 'gsap'
import { motion } from 'framer-motion'

import { navLinks } from "../../constant";
import useHamburgerMenu from '../../store/useHamburgerMenu';
import { useModalsStore } from "../../store/modalsStore";

export function HamburgerMenu() {

  const { openModal } = useModalsStore()


  const hamburgerMenu = useHamburgerMenu()

  if (hamburgerMenu.isOpen) {
    document.body.style.overflow = 'hidden';
  }

  const mobileMenuRef = useRef(null);
  function closeMobileLinks() {
    const mobileMenu = mobileMenuRef.current;
    gsap.to(mobileMenu, {
      duration: 1,
      y: -1920,
      onComplete: hamburgerMenu.onClose,
    });
    document.body.removeAttribute('style')
  }
  function openModalAndCloseMobileLinks(modalLabel:string) {
    closeMobileLinks()
    openModal(modalLabel)
  }

  return (

    <motion.div className='navbar-hamburger-menu' animate={{ y: [-1200, 0] }} ref={mobileMenuRef}
      transition={{ type: "spring", duration: 0.75 }}>
      <ul className="navbar-hamburger-menu_links-mobile">
        {navLinks.map(navLink => (
          <Link className='cta-link-secondary' key={navLink.id} onClick={closeMobileLinks} to={navLink.to}>{navLink.label}</Link>
        ))}
      </ul>
      <div className='navbar-hamburger-menu_auth-mobile'>
        <span><a className='cta-link-secondary' onClick={() => openModalAndCloseMobileLinks('ModalAuth')}>Log In / Registration</a></span>
        <span className="line"/>
        <span><a className='cta-link-secondary' onClick={() => openModalAndCloseMobileLinks('ModalBookTable')}>Book Table</a></span>
        <span className="line w-[50%]"/>
        <span><a className='cta-link-secondary'  onClick={() => openModalAndCloseMobileLinks('ModalMenu')}>Delivery</a></span>
      </div>
      <svg className='navbar-hamburger-menu_close'
        onClick={() => closeMobileLinks()}>
        <use xlinkHref='./pages/home/sprite.svg#close' />
      </svg>
    </motion.div>

  )
}