import React from "react";
import "../Components/about.css";
import CLOCK from "../assets/HISTORY.png";
import ARROWICON from "../assets/mission icon.png";
import { Link } from "react-router-dom";
import MEETTEAM from "../assets/Team.png";

const About = () => {

  const openWhatsApp = () => {
    const phoneNumber = '2348051203286'; // International format
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <div className="About">
        <div className="Market-Text">
          <h1>
            We're a dedicated group of trading professional and analysts devoted
            to constructing a secure financial tomorrow{" "}
          </h1>
        </div>

       <div className="intersect">
       <div className="History-Mission">
          <div className="History">
            <div className="Left">
              <div className="C-ONE">
                <img src={CLOCK}></img>
              </div>
            </div>
            <div className="Right">
              <h2>History</h2> <br></br> <br></br>
              <p>
                In 2022, a team of seasoned profesionals eslablised our company,
                recognizing a chanceto introduce fresh innovation to the digital
                realm. From that point onward, we've supported numerous business
                in revapming their online presence and reaching their
                objiective.
              </p>
            </div>
          </div>

          <div className="History">
            <div className="Left">
              <div className="C-ONE">
                <img src={ARROWICON}></img>
              </div>
            </div>
            <div className="Right">
              <h2>Mission</h2> <br></br> <br></br>
              <p>
                We assist business in thriving in the digital era by offering
                top-notch design and developement services customized to their
                individual requirements. Weather you aim to establish a fresh
                website, introduce a mobile application, or develop a software
                solution, we've got you covered.
              </p>
            </div>
          </div>
        </div>

       </div>
        <div className="Meet-The-Team">
          <div className="Left">
            <div className="Meet-C-ONE">
              <img src={MEETTEAM}></img>
            </div>
          </div>
          <div className="Meet-Right">
            <div className="Meet-Text">
              <h2>Meet The Team</h2> <br></br> <br></br>
              <p>
                In 2022, a team of seasoned profesionals eslablised our company,
                recognizing a chanceto introduce fresh innovation to the digital
                realm. From that point onward, we've supported numerous business
                in revapming their online presence and reaching their
                objiective.
              </p>

              <button className="Meet-Btn" onClick={openWhatsApp}><a>Consult with a Specialist</a></button>
            </div>

            <div className="MEET-IMAGE"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
