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
          <span><a onClick={() => {/* modal auth */}}>Log In / Registration</a></span>
        <div />
          <span><a onClick={() => {/* modal book a table */}}>Book Table</a></span>
      </div>

</div>
)
}