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
      onComplete: () => hamburgerMenu.onClose(),
    });
    document.body.removeAttribute('style')
  }
  function openModalAuth() {
    closeMobileLinks()
    openModal('ModalAuth')
  }
  function openModalBookTable() {
    closeMobileLinks()
    openModal('ModalBookTable')
  }

  return (

    <motion.div className='navbar-hamburger-menu' animate={{ y: [-1200, 0] }} ref={mobileMenuRef}
      transition={{ type: "spring", duration: 0.75 }}>
      <ul className="navbar-hamburger-menu_links-mobile">
        {navLinks.map(navLink => (
          <Link className='cta-link-secondary' to={navLink.to} key={navLink.id}>{navLink.label}</Link>
        ))}
      </ul>
      <div className='navbar-hamburger-menu_auth-mobile'>
        <span><a className='cta-link-secondary'  onClick={openModalAuth}>Log In / Registration</a></span>
        <div className='line' />
        <span><a className='cta-link-secondary'  onClick={openModalBookTable}>Book Table</a></span>
      </div>
      <svg className='navbar-hamburger-menu_close'
        onClick={() => closeMobileLinks()}>
        <use xlinkHref='./sprite.svg#close' />
      </svg>
    </motion.div>

  )
}