import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <NavLink to={'/mockman'}>Mockman</NavLink>
        </li>
        <li>
          <NavLink to={'/mockbee-documentation'}>Mockbee Documentation</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
