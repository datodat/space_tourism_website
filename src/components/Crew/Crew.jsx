import { useState } from 'react';
// Css
import './crew.css';
// Background
import backImg from '../../assets/crew/background-crew-desktop.jpg';
import data from '../../data.json';
import firstImg from '../../assets/crew/image-douglas-hurley.png';
import secondImg from '../../assets/crew/image-mark-shuttleworth.png';
import thirdImg from '../../assets/crew/image-victor-glover.png';
import fourthImg from '../../assets/crew/image-anousheh-ansari.png';

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
  const [info, setInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className='crew'>
      <img src={backImg} alt='background' />

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
      <div className="crew-right">
        <img src={crewData[currentPage].img} alt='crew img' />
      </div>
    </div>
  );
}

export default Crew;