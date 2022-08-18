import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Css
import './header.css';
// Logo
import logo from '../../assets/shared/logo.svg';

const Header = () => {
  // Sandwich Menu
  const [isOpened, setIsOpened] = useState(false);

  window.addEventListener('resize', () => {
    if(window.innerWidth > 375){
      setIsOpened(false);
    }
  });

  return (
    <header className='header'>
      {/* Logo */}
      <img src={logo} alt='logo' />
      {/* Navbar */}
      <nav
        style={{ right: isOpened ? '0' : '-250px' }}
      >
        <NavLink 
          onClick={() => setIsOpened(false)}
          to='/'
        >
          <span>00</span> home
        </NavLink>
        <NavLink 
          onClick={() => setIsOpened(false)}
          to='/destination'
        >
          <span>01</span> destination
        </NavLink>
        <NavLink 
          onClick={() => setIsOpened(false)}
          to='/crew'
        >
          <span>02</span> crew
        </NavLink>
        <NavLink 
          onClick={() => setIsOpened(false)}
          to='/technology'
        >
          <span>03</span> technology
        </NavLink>
      </nav>
      {/* Sandwich Menu */}
      <div 
        onClick={() => setIsOpened(!isOpened)}
        className={isOpened ? 'sandwich-menu opened' : 'sandwich-menu'}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;