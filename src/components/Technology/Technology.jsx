import { useState } from 'react';
// Css
import './technology.css';
// Background
import backImg from '../../assets/technology/background-technology-desktop.jpg';
// Data
import data from '../../data.json';
import firstImg from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import secondImg from '../../assets/technology/image-spaceport-portrait.jpg';
import thirdImg from '../../assets/technology/image-space-capsule-portrait.jpg';

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
console.log(techData[0]);

const Technology = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className='technology'>
      <img className='background-img' src={backImg} alt='background' />
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
          <p className='tech-terminology'>the terminology...</p>
          <p className='tech-name'>
            {techData[currentPage].info.name}
          </p>
          <p className='tech-description'>
            {techData[currentPage].info.description}
          </p>
        </div>
      </div>
      <img className='tech-img' src={techData[currentPage].img} alt='tech-img' />
    </div>
  );
}

export default Technology;