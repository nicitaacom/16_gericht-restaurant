
import useAuthModal from '../../hooks/useAuthModal';
import { HamburgerMenu } from './HamburgerMenu';
import useHamburgerMenu from '../../hooks/useHamburgerMenu';
import useBookTableModal from '../../hooks/useBookTableModal';
import useMenuModal from '../../hooks/useMenuModal';


export function NavbarAuth() {
  const authModal = useAuthModal()
  const bookTable = useBookTableModal()
  const menuModal = useMenuModal()
  const hamburgerMenu = useHamburgerMenu()




  return (
    <>
      <div className='navbar-auth'>
        <span><a className='link' onClick={authModal.onOpen}>Log In / Registration</a></span>
        <div className='line' />
        <span><a className='link' onClick={bookTable.onOpen}>Book Table</a></span>
        <div className='line' />
        <span><a className='link' onClick={menuModal.onOpen}>Delivery</a></span>
      </div>

      <svg className='navbar-mobile-icon' onClick={hamburgerMenu.onOpen}>
        <use xlinkHref='./sprite.svg#hamburger-menu' />
      </svg>

      {hamburgerMenu.isOpen && <HamburgerMenu />}
    </>
  )
}