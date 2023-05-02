import './navbar.css'
import { navLinks } from "../../constant";
import { Link } from 'react-router-dom';

export function Navbar () {
return (
<div className="navbar">
  <img className='navbar-logo' src="./logo.png"/>

  <ul className="navbar-links">
    {navLinks.map(navLink => (
      <Link className='li-item' to={navLink.to} key={navLink.id}>{navLink.title}</Link>
    ))}
  </ul>

      <div className='navbar-auth'>
        <a onClick={() => {/* modal auth */}}>Log In / Registration</a>
        <div />
        <a onClick={() => {/* modal book a table */}}>Book Table</a>  
      </div>

</div>
)
}