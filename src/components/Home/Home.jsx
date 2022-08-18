import { useState } from 'react'
import { NavLink } from 'react-router-dom';
// Css
import './home.css';
// Background
import backgroundDesktop from '../../assets/home/background-home-desktop.jpg';
import backgroundTablet from '../../assets/home/background-home-tablet.jpg';
import backgroundMobile from '../../assets/home/background-home-mobile.jpg';

const Home = () => {
  // Background Image
  const [backImg, setBackImg] = useState(backgroundDesktop);

  // Changing background image
  window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
      setBackImg(backgroundDesktop);
    }
    if(window.innerWidth < 768 && window.innerWidth > 375){
      setBackImg(backgroundTablet);
    }
    if(window.innerWidth < 375){
      setBackImg(backgroundMobile);
    }
  });

  return (
    <div className='home'>
      {/* Background Image */}
      <img src={backImg} alt='background' />
      {/* Left Side */}
      <div className='home-left'>
        <p>so, you want to travel to</p>
        <p>space</p>
        <p>
          Let's face it; if you want to go to space, 
          you might as well genuinely go to outer space 
          and not hover kind of on the edge of it. Well sit back, 
          and relax because we'll give you a 
          truly out of this world experience!
        </p>
      </div>
      {/* Right Side */}
      <div className='home-right'>
          <NavLink to='/destination'>
            explore
          </NavLink>
      </div>
    </div>
  )
}

export default Home;