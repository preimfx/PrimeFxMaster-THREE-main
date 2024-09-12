import React, { useEffect } from "react";
import About from "./About";
import HowItWorks from "./HowItWorks";
import { Link } from "react-router-dom";
import "./home.css";
import Backgroundimage from "../assets/bangkok-city.jpg";
import Hero4img from "../assets/box1.png";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "./Mycontext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

export const Home = () => {
  const { toggleNavbarVisibility } = useMyContext(); // Destructure toggleNavbarVisibility from context

  const [user] = useAuthState(auth);

  useEffect(() => {
    // Call toggleNavbarVisibility to set the navbar state to false when the component mounts
    toggleNavbarVisibility(true);
  }, []);

  const navigate = useNavigate();

  const navigateToLogIn = () => {
    navigate("/login");
    toggleNavbarVisibility(false); // Set navbar state to false on login click
  };

  const navigateToSignUp = () => {
    navigate("/signup");
    toggleNavbarVisibility(false); // Set navbar state to false on signup click
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  console.log(user?.displayName);

  return (
    <div className="Home">
      <div className="Hero">
        <img src={Backgroundimage} alt="Background"></img>
        <div className="Hero-Container">
          <div className="Hero-Content">
            <h1>
              <span>Become part of the world's</span>
              <span>foremost authority in financial</span>
              <span>investments.</span>
            </h1>

            <div className="Log-Sign-Con">
              <button className="Sign" onClick={navigateToLogIn}>
                <h3>LOG IN ACCOUNT</h3>
              </button>

              <button className="Sign" onClick={navigateToSignUp}>
                <h3>REGISTER ACCOUNT</h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="Hero2">
        <a
          href="https://www.tradingview.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Track all Market in Trading View</h4>
        </a>
      </div>

      <div className="Hero3">
      </div>

      <div className="Hero4">
         <div className="Hero4img">
          <img src={Hero4img} alt="Hero4"></img>
        </div>

         <div className="Hero4-content">
           <div className="R">
            <h1>Reliable Finance Management Solution for Everyone</h1>
          </div> 

          <div className="D">
            <h4>
              Discover our reliable finance management solution designed to
              empower individuals of all backgrounds. With user-friendly tools
              and expert guidance, taking control of your finances has never
              been easier. Whether you're a seasoned investor or just starting
              out, our solution ensures financial success for everyone.
            </h4>
          </div> 

          <button className="G">
            <Link to="/login">GET STARTED</Link>
          </button>
        </div>   
      </div>

       <section id="about">
        <About />
      </section>
      *<section id="how-it-works">
        <HowItWorks />
      </section>  
    </div>
  );
};
