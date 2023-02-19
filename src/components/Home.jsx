import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../styles/home.scss'

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=> {
    navigate('/destination');
  };

  return (
  <main className='home'>
    <div className="hero">
    <div className="homeInfo">
      <p>SO YOU WANT TO TRAVEL TO</p>
      <h1>SPACE</h1>
      <span>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we will give you a truly out of this world experience!</span>
    </div>
    <div className="explore">
      <button className='btn' onClick={handleNavigate}>EXPLORE</button>
    </div>
    </div>
    
  </main>
  )
}

export default Home