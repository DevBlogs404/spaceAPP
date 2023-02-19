import React from "react";
import "../styles/technology.scss";
import { HashLink } from "react-router-hash-link";
import techBg1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import techBg2 from "../assets/technology/image-space-capsule-portrait.jpg";
import techBg3 from "../assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  return (
    <>
      <div className="technology" id="tech1">
        <div className="numbers">
          <HashLink style={{ textDecoration: "none" }} to={"#tech1"}>
            <div>1</div>
          </HashLink>
          <HashLink style={{ textDecoration: "none" }} to={"#tech2"}>
            <div>2</div>
          </HashLink>
          <HashLink style={{ textDecoration: "none" }} to={"#tech3"}>
            <div>3</div>
          </HashLink>
        </div>
        <div className="techInfo">
          <span>THE TERMINOLOGY...</span>
          <h2>Launch vehicle</h2>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div className="techImage">
          <img src={techBg1} alt="" />
        </div>
      </div>

      <div className="technology" id="tech2">
        <div className="numbers">
          <HashLink to={"#tech1"}>
            <div>1</div>
          </HashLink>
          <HashLink to={"#tech2"}>
            <div>2</div>
          </HashLink>
          <HashLink to={"#tech3"}>
            <div>3</div>
          </HashLink>
        </div>
        <div className="techInfo">
          <span>THE TERMINOLOGY...</span>
          <h2>Spaceport</h2>
          <p>
          A spaceport or cosmodrome is a site for launching or receiving spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
          </p>
        </div>
        <div className="techImage">
          <img src={techBg3} alt="" />
        </div>
      </div>

      <div className="technology" id="tech3">
        <div className="numbers">
          <HashLink to={"#tech1"}>
            <div>1</div>
          </HashLink>
          <HashLink to={"#tech2"}>
            <div>2</div>
          </HashLink>
          <HashLink to={"#tech3"}>
            <div>3</div>
          </HashLink>
        </div>
        <div className="techInfo">
          <span>THE TERMINOLOGY...</span>
          <h2>Space capsule</h2>
          <p>
          A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
          </p>
        </div>
        <div className="techImage">
          <img src={techBg2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Technology;
