import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/shared/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='logo' />
      <hr />
      <nav>
        <NavLink to='/'>
          <span>00</span> home
        </NavLink>
        <NavLink to='/destination'>
          <span>01</span> destination
        </NavLink>
        <NavLink to='/crew'>
          <span>02</span> crew
        </NavLink>
        <NavLink to='/technology'>
          <span>03</span> technology
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;