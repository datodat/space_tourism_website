import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/shared/logo.svg';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  window.addEventListener('resize', () => {
    if(window.innerWidth > 375){
      setIsOpened(false);
    }
  })

  return (
    <header className='header'>
      <img src={logo} alt='logo' />
      {/* <hr /> */}
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
      <div 
        onClick={() => setIsOpened(!isOpened)}
        className={isOpened ? 'sandwitch opened' : 'sandwitch'}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;