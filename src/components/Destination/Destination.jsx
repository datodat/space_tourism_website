import { useState, useEffect } from 'react';
// Css
import './destination.css';
// Background
import backgroundDesktop from '../../assets/destination/background-destination-desktop.jpg';
import backgroundTablet from '../../assets/destination/background-destination-tablet.jpg';
import backgroundMobile from '../../assets/destination/background-destination-mobile.jpg';
// Data
import data from '../../data.json';
import moonImg from '../../assets/destination/image-moon.png';
import marsImg from '../../assets/destination/image-mars.png';
import europaImg from '../../assets/destination/image-europa.png';
import titanImg from '../../assets/destination/image-titan.png';

// Destination Info
const destinationData = [
  {
    info: data.destinations[0],
    img: moonImg
  },
  {
    info: data.destinations[1],
    img: marsImg
  },
  {
    info: data.destinations[2],
    img: europaImg
  },
  {
    info: data.destinations[3],
    img: titanImg
  }
]

const Destination = () => {
  // Current Tab
  const [tab, setTab] = useState('moon');
  const [info, setInfo] = useState(destinationData[0]);
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

  useEffect(() => {
    if(tab === 'moon'){
      setInfo(destinationData[0]);
    }else if(tab === 'mars'){
      setInfo(destinationData[1]);
    }else if(tab === 'europa'){
      setInfo(destinationData[2]);
    }else if(tab === 'titan'){
      setInfo(destinationData[3]);
    }else{
      return;
    }
  }, [tab])

  return (
    <div className='destination'>
      {/* Background Image */}
      <img src={backImg} alt='background' />
      {/* Left Side */}
      <div className="destination-left">
        <p><span>01</span> pick your destination</p>
        <img src={info.img} alt='destination-img' />
      </div>
      {/* Right Side */}
      <div className="destination-right">
        {/* Navbar */}
        <ul>
          <li 
            className={tab === 'moon' ? 'active' : ''} 
            onClick={() => setTab('moon')}
          >
            moon
          </li>
          <li 
            className={tab === 'mars' ? 'active' : ''} 
            onClick={() => setTab('mars')}
          >
            mars
          </li>
          <li 
            className={tab === 'europa' ? 'active' : ''} 
            onClick={() => setTab('europa')}
          >
            europa
          </li>
          <li 
            className={tab === 'titan' ? 'active' : ''} 
            onClick={() => setTab('titan')}
          >
            titan
          </li>
        </ul>
        <p className='name-p'>{info.info.name}</p>
        <p className='description-p'>{info.info.description}</p>
        <hr />
        <div className='more-info-div'>
          <div>
            <p>avg. distance</p>
            <p>{info.info.distance}</p>
          </div>
          <div>
            <p>est. travel time</p>
            <p>{info.info.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;