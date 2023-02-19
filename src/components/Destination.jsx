import React from 'react';
import { HashLink } from 'react-router-hash-link'
import '../styles/destination.scss';
import dest1 from '../assets/destination/image-moon.png';
import dest2 from '../assets/destination/image-mars.png';
import dest3 from '../assets/destination/image-europa.png';
import dest4 from '../assets/destination/image-titan.png';




const Destination = () => {
 return(

 <>
          <div className='destination' id='moon'>
      <div className="photo">
        <h2>01 Pick your destination</h2>
        <img src={dest1} alt="places" />
      </div>
      <div className="destination-info">
        <div className="places">
          <HashLink to={'#moon'}>MOON</HashLink>
          <HashLink to={'#mars'}>MARS</HashLink>
          <HashLink to={'#europa'}>EUROPA</HashLink>
          <HashLink to={'#titan'}>TITAN</HashLink>
        </div>
        <div className="heading" >
          <h1>Moon</h1>
          <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        </div>
        <div className="time">
          <div>
            <p>avf. distance</p>
            <h3>384,400 km</h3>
          </div>
          <div>
            <p>estd. travel time</p>
            <h3>3 days</h3>
          </div>
        </div>
      </div>
    </div>

    <div className='destination' id='mars'>
      <div className="photo">
        <h2>02 Pick your destination</h2>
        <img src={dest2} alt="places" />
      </div>
      <div className="destination-info">
        <div className="places">
          <HashLink to={'#moon'}>MOON</HashLink>
          <HashLink to={'#mars'}>MARS</HashLink>
          <HashLink to={'#europa'}>EUROPA</HashLink>
          <HashLink to={'#titan'}>TITAN</HashLink>
        </div>
        <div className="heading" >
          <h1>Mars</h1>
          <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
        </div>
        <div className="time">
          <div>
            <p>avf. distance</p>
            <h3>225 mil. km</h3>
          </div>
          <div>
            <p>estd. travel time</p>
            <h3>9 months</h3>
          </div>
        </div>
      </div>
    </div>


    <div className='destination' id='europa'>
      <div className="photo">
        <h2>03 Pick your destination</h2>
        <img src={dest3} alt="places" />
      </div>
      <div className="destination-info">
        <div className="places">
          <HashLink to={'#moon'}>MOON</HashLink>
          <HashLink to={'#mars'}>MARS</HashLink>
          <HashLink to={'#europa'}>EUROPA</HashLink>
          <HashLink to={'#titan'}>TITAN</HashLink>
        </div>
        <div className="heading" >
          <h1>Europa</h1>
          <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin</p>
        </div>
        <div className="time">
          <div>
            <p>avf. distance</p>
            <h3>628 mil. km</h3>
          </div>
          <div>
            <p>estd. travel time</p>
            <h3>3 years</h3>
          </div>
        </div>
      </div>
    </div>


    <div className='destination' id='titan'>
      <div className="photo">
        <h2>04 Pick your destination</h2>
        <img src={dest4} alt="places" />
      </div>
      <div className="destination-info">
        <div className="places">
          <HashLink to={'#moon'}>MOON</HashLink>
          <HashLink to={'#mars'}>MARS</HashLink>
          <HashLink to={'#europa'}>EUROPA</HashLink>
          <HashLink to={'#titan'}>TITAN</HashLink>
        </div>
        <div className="heading" >
          <h1>Titan</h1>
          <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn</p>
        </div>
        <div className="time">
          <div>
            <p>avf. distance</p>
            <h3>1.6 bil. km</h3>
          </div>
          <div>
            <p>estd. travel time</p>
            <h3>7 years</h3>
          </div>
        </div>
      </div>
    </div>

    
         
    </>
    
 )
  
 

  
    //   return (
    //   <div className='destination'>
    //   <div className="photo">
    //     <h2>01 Pick your destination</h2>
    //     <img src='' alt="" />
    //   </div>
    //   <div className="destination-info">
    //     <div className="places">
    //       <Link to='/moon'>MOON</Link>
    //       <Link to='/mars'>MARS</Link>
    //       <Link to='/europa'>EUROPA</Link>
    //       <Link to='/titan'>TITAN</Link>
    //     </div>
    //     <div className="heading">
    //       <h1>{}</h1>
    //       <p>{}</p>
    //     </div>
    //     <div className="time">
    //       <div>
    //         <p>avf. distance</p>
    //         <h3>255 mil km</h3>
    //       </div>
    //       <div>
    //         <p>estd. travel time</p>
    //         <h3>9 months</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //   )
    
}

export default Destination