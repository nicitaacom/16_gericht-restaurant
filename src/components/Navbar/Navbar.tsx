import './navbar.css'
import { NavbarAuth } from './NavbarAuth';

import { NavbarLinks } from './NavbarLinks';

export function Navbar () {
 


  
    
    

  
return (
<div className="navbar">
    <img className='navbar-logo' src="./logo.png"/>
    <NavbarLinks/>
    <NavbarAuth/>
</div>
)
}