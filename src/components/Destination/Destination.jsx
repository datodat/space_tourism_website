import { useState, useEffect } from 'react';
// Css
import './destination.css';
// Background
import backgroundDesktop from '../../assets/destination/background-destination-desktop.jpg';
import backgroundTablet from '../../assets/destination/background-destination-tablet.jpg';
import backgroundMobile from '../../assets/destination/background-destination-mobile.jpg';
import data from '../../data.json';
import moonImg from '../../assets/destination/image-moon.png';
import marsImg from '../../assets/destination/image-mars.png';
import europaImg from '../../assets/destination/image-europa.png';
import titanImg from '../../assets/destination/image-titan.png';

const moonInfo = data.destinations[0];
const marsInfo = data.destinations[1];
const europaInfo = data.destinations[2];
const titanInfo = data.destinations[3];

const Destination = () => {
  const [chosen, setChosen] = useState('moon');
  const [info, setInfo] = useState(null);
  const [infoImg, setInfoImg] = useState(null);
  const [backImg, setBackImg] = useState(backgroundDesktop);

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
    if(chosen === 'moon'){
      setInfo(moonInfo);
      setInfoImg(moonImg);
    }else if(chosen === 'mars'){
      setInfo(marsInfo);
      setInfoImg(marsImg);
    }else if(chosen === 'europa'){
      setInfo(europaInfo);
      setInfoImg(europaImg);
    }else if(chosen === 'titan'){
      setInfo(titanInfo);
      setInfoImg(titanImg);
    }else{
      return;
    }
  }, [chosen])

  return (
    <div className='destination'>
      <img src={backImg} alt='background' />

      <div className="destination-left">
        <p><span>01</span> pick your destination</p>
        {infoImg && <img src={infoImg} alt='info-img' />}
      </div>
      <div className="destination-right">
        <ul>
          <li 
            className={chosen === 'moon' ? 'active' : ''} 
            onClick={() => setChosen('moon')}
          >
            moon
          </li>
          <li 
            className={chosen === 'mars' ? 'active' : ''} 
            onClick={() => setChosen('mars')}
          >
            mars
          </li>
          <li 
            className={chosen === 'europa' ? 'active' : ''} 
            onClick={() => setChosen('europa')}
          >
            europa
          </li>
          <li 
            className={chosen === 'titan' ? 'active' : ''} 
            onClick={() => setChosen('titan')}
          >
            titan
          </li>
        </ul>
        <p className='name-p'>{info && info.name}</p>
        <p className='description-p'>{info && info.description}</p>
        <hr />
        <div className='more-info-div'>
          <div>
            <p>avg. distance</p>
            <p>{info && info.distance}</p>
          </div>
          <div>
            <p>est. travel time</p>
            <p>{info && info.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;