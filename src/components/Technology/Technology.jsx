import { useState } from 'react';
// Css
import './technology.css';
// Background
import backgroundDesktop from '../../assets/technology/background-technology-desktop.jpg';
import backgroundTablet from '../../assets/technology/background-technology-tablet.jpg';
import backgroundMobile from '../../assets/technology/background-technology-mobile.jpg';
// Data
import data from '../../data.json';
import firstImg from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import secondImg from '../../assets/technology/image-spaceport-portrait.jpg';
import thirdImg from '../../assets/technology/image-space-capsule-portrait.jpg';

// Technology Data
const techData = [
  {
    info: data.technology[0],
    img: firstImg
  },
  {
    info: data.technology[1],
    img: secondImg
  },
  {
    info: data.technology[2],
    img: thirdImg
  }
]

const Technology = () => {
  // Slider Current Page
  const [currentPage, setCurrentPage] = useState(0);
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
    <div className='technology'>
      {/* Background Image */}
      <img className='background-img' src={backImg} alt='background' />
      {/* Left Side */}
      <p><span>03</span> space launch 101</p>
      <div>
        <div className='tech-nav'>
          <span
            className={currentPage === 0 ? 'active' : ''}
            onClick={() => setCurrentPage(0)}
          >
            1
          </span>
          <span
            className={currentPage === 1 ? 'active' : ''}
            onClick={() => setCurrentPage(1)}
          >
            2
          </span>
          <span
            className={currentPage === 2 ? 'active' : ''}
            onClick={() => setCurrentPage(2)}
          >
            3
          </span>
        </div>
        <div className='tech-info'>
          <p className='tech-terminology'>
            the terminology...
          </p>
          <p className='tech-name'>
            {techData[currentPage].info.name}
          </p>
          <p className='tech-description'>
            {techData[currentPage].info.description}
          </p>
        </div>
      </div>
      {/* Right Side Image */}
      <img className='tech-img' src={techData[currentPage].img} alt='tech-img' />
    </div>
  );
}

export default Technology;