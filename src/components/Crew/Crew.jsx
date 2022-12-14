import { useState } from 'react';
// Css
import './crew.css';
// Background
import backgroundDesktop from '../../assets/crew/background-crew-desktop.jpg';
import backgroundTablet from '../../assets/crew/background-crew-tablet.jpg';
import backgroundMobile from '../../assets/crew/background-crew-mobile.jpg';
// Data
import data from '../../data.json';
import firstImg from '../../assets/crew/image-douglas-hurley.png';
import secondImg from '../../assets/crew/image-mark-shuttleworth.png';
import thirdImg from '../../assets/crew/image-victor-glover.png';
import fourthImg from '../../assets/crew/image-anousheh-ansari.png';

// Crew info
const crewData = [
  {
    info: data.crew[0],
    img: firstImg
  },{
    info: data.crew[1],
    img: secondImg
  },{
    info: data.crew[2],
    img: thirdImg
  },{
    info: data.crew[3],
    img: fourthImg
  }
];

const Crew = () => {
  // Slider page
  const [currentPage, setCurrentPage] = useState(0);
  // Background image
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
    <div className='crew'>
      {/* Background image */}
      <img src={backImg} alt='background' />
      {/* Left side */}
      <div className="crew-left">
        <p><span>02</span> meet your crew</p>
        <p className='crew-role'>
          {crewData[currentPage].info.role}
        </p>
        <p className='crew-name'>
          {crewData[currentPage].info.name}
        </p>
        <p className='crew-bio'>
          {crewData[currentPage].info.bio}
        </p>
        {/* Slider */}
        <div className='crew-navigation'>
          <span 
            className={currentPage === 0 ? 'active': ''}
            onClick={() => setCurrentPage(0)}
          ></span>
          <span 
            className={currentPage === 1 ? 'active': ''}
            onClick={() => setCurrentPage(1)}
          ></span>
          <span 
            className={currentPage === 2 ? 'active': ''}
            onClick={() => setCurrentPage(2)}
          ></span>
          <span 
            className={currentPage === 3 ? 'active': ''}
            onClick={() => setCurrentPage(3)}
          ></span>
        </div>
      </div>
      {/* Right Side */}
      <div className="crew-right">
        <img src={crewData[currentPage].img} alt='crew-img' />
      </div>
    </div>
  );
}

export default Crew;