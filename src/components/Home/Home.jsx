// Css
import './home.css';
// Background
import homeBackground from '../../assets/home/background-home-desktop.jpg';

const Home = () => {
  return (
    <div className='home'>
      <img src={homeBackground} alt='home-background' />
      {/*  */}
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
      <div className='home-right'>
        <button>
          explore
        </button>
      </div>
    </div>
  )
}

export default Home;