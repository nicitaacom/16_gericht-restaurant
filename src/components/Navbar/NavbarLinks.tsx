import { navLinks } from "../../constant";
import { Link } from 'react-router-dom';

export function NavbarLinks () {
return (
  <ul className="navbar-links">
    {navLinks.map(navLink => (
      <Link className='li-item' to={navLink.to} key={navLink.id}>{navLink.label}</Link>
    ))}
  </ul>
)
}