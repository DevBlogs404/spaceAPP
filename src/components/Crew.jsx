import React from 'react';
import '../styles/crew.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'

import crew1 from '../assets/crew/image-anousheh-ansari.png'
import crew2 from '../assets/crew/image-douglas-hurley.png'
import crew3 from '../assets/crew/image-mark-shuttleworth.png'
import crew4 from '../assets/crew/image-victor-glover.png'

const Crew = () => {
  return (
<>
    <Carousel showStatus={false} showThumbs={false} swipeable={true} infiniteLoop={true}  className="carousal">
       <div className="crew">
        <div className="crewInfo">
        <div className="title">
        <p>01 MEET YOUR CREW</p>
        </div>
        
    <div className="para">
    <h2>FLIGHT ENGINEER</h2>
        <h1>Anousheh Ansari</h1>
        <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
    </div>
        
      </div>
      <div className="crewImage">
        <img src={crew1} alt="" />
      </div>
        </div>


        
        <div className="crew">
        <div className="crewInfo">
        <div className="title">
        <p>02 MEET YOUR CREW</p>
        </div>
        
    <div className="para">
    <h2>Commander</h2>
    <h1>Douglas Hurley</h1>
    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
    </div>
        
      </div>
      <div className="crewImage">
        <img src={crew2} alt="" />
      </div>
        </div>

        
        <div className="crew">
        <div className="crewInfo">
        <div className="title">
        <p>03 MEET YOUR CREW</p>
        </div>
        
    <div className="para">
    <h2>Mission Specialist</h2>
        <h1>Mark Shuttleworth</h1>
        <p>"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
    </div>
        
      </div>
      <div className="crewImage">
        <img src={crew3} alt="" />
      </div>
        </div>

        
        <div className="crew">
        <div className="crewInfo">
        <div className="title">
        <p>04 MEET YOUR CREW</p>
        </div>
        
    <div className="para">
    <h2>Pilot</h2>
        <h1>Victor Glover</h1>
        <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
    </div>
        
      </div>
      <div className="crewImage">
        <img src={crew4} alt="" />
      </div>
        </div>


    </Carousel>


</>
  
  )
}

export default Crew