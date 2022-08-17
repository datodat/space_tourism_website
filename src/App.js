import { Routes, Route } from 'react-router-dom';
// Css
import './App.css';
// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';

const App = () => {
  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path='/destination' element={<Destination />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;