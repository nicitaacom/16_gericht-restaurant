import './Navbar.css';
import images from './../../constants/images'
import { useState } from 'react';




const Navbar = () => {

const [toggleMenu,setToggleMenu] = useState(false)


 return(
<div className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo'/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a className='p__opensans' href='#login'>Log in / Register</a>
      <div/>
      <a className='p__opensans' href='/'>Book table</a>
    </div>
    <div className='app__navbar-smallscreen '>
    <svg style={{fill:'#ffffff',width:'27px',height:'27px'}} onClick={() => setToggleMenu(true)}>
        <use xlinkHref='./sprite.svg#hamburger-menu'/>
      </svg>

      {/* <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <svg style={{fill:'#ffffff',width:'27px',height:'27px'}} className='overlay__close' onClick={() => setToggleMenu(false)}>
        <use xlinkHref='./sprite.svg#close'/>
      </svg>
      {/* {toggleMenu && (
      <ul className='app__navbar-small-screen-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>)} 
          </div> */}
    </div>
     
  </div>
  )
}


export default Navbar;
