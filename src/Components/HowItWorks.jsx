import React from "react";
import "../Components/howitworks.css";
import FirstIcon from "../assets/HOW-ICON-1.png";
import SecondIcon from "../assets/HOW-ICON-2.png";
import ThirdIcon from "../assets/HOW-ICON-3.png";
import MarketAPI from "../assets/Screenshot_20240408-092821.png";
import MarketLogo from "../assets/Primefx.png";
import Risk from "../assets/RISK ICON.png";
import Automatic from "../assets/AUTOMATIC SOFTWARE.png";
import Bank from "../assets/BANK ICON.png";
import Award from "../assets/AWARD ICON.png";
import fourStar from "../assets/4Star.png";
import fiveStar from "../assets/5Star.png";
import FooterLogo from "../assets/NAV.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate

const HowItWorks = () => {

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/"); // Navigate to home after logout
    });
  };
  return (
    <div  className="everthing">
      <div className="Howitworks-Hero">
       <div className="firstchild">
       <div className="Howitworks-Hero-container">
          <div className="H-P">
            <h1 className="HOW">How it Works</h1>
            <h4 className="PRIME">
              PrimeFxmargins boasts top-notch infrastructure and expert
              specialists, providing lucrative investment opportunities tailored
              to diverse user needs with our impressive range of investment
              plans.
            </h4>
          </div>

          <div className="Icon-Text">
            <div className="first">
              <div className="Icon">
                <img src={FirstIcon}></img>
              </div>
              <div className="First-Text">
                <h4>
                  A user or an investor you need to click on sign up button. By
                  filling up the registration form or sign up form, you will get
                  login credentials after the verification process from the
                  Globitex
                </h4>
              </div>
            </div>

            <div className="first">
              <div className="Icon">
                <img src={SecondIcon}></img>
              </div>
              <div className="First-Text">
                <h4>
                  PrimeFxmargins offers you various investment plans for all
                  interested investors around the wrold. PrimeFxmargins ensures
                  the steady hourly interest for long run on your investment by
                  unique strategies of experts.
                </h4>
              </div>
            </div>

            <div className="first">
              <div className="Icon">
                <img src={ThirdIcon}></img>
              </div>
              <div className="First-Text">
                <h4>
                  Earn more profit by investing in PrimeFxmargins and join
                  referral program to get benefited from generating references.
                  As investor you can withdraw your earnings whenever you want.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="Market-Hero">
        <div className="Market-Text">
          <h1>Market Highlights</h1>
          <a
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Track all Market in Trading View</h4>
          </a>
        </div>

        <div className="Market-Images">
          <div className="Market-API-Holder">
            <img src={MarketAPI} className="graph"></img>
          </div>
          <div className="Market-Img">
            <img src={MarketLogo}></img>
          </div>
        </div>
      </div> 

       <div className="We-Offer">
        <div className="Market-Text">
          <h1>We offer great plans for Finance Management</h1>
          <p className="weGatsComotAm">
            Objectively market driven intellectual capital rather than covalent
            best practices that facilitate strategic information before
            innovation
          </p>
        </div>

        <div className="We-Offer-Plans">
          <div className="Plan">
            <h1>Standard Plan</h1>
            <h3>Fund: $200 $2,000</h3>
            <h3>Earn: $700 $7,500</h3>
            <h3>Duration: 48hrs</h3>
            <button><Link to="/Donate">Purchase Now</Link></button>
          </div>

          <div className="Plan">
            <h1>Premium Plan</h1>
            <h3>Fund: $3,000 $15,000</h3>
            <h3>Earn: $12,00 $75,000</h3>
            <h3>Duration: 7 days</h3>
            <button><Link to="/Donate">Purchase Now</Link></button>
          </div>

          <div className="Plan">
            <h1>Enterprise Plan</h1>
            <h3>Fund: 1 BTC 5 BTC</h3>
            <h3>Earn: 2.5 BTC 12.5 BTC</h3>
            <h3>Duration: 30days</h3>
            <button><Link to="/Donate">Purchase Now</Link></button>
          </div>
        </div>
      </div> 

      <div className="Why-Choose">
        <div className="Market-Text">
          <h1>Why Choose Us?</h1>
          <p>
            PrimeFxmargins is a platform for cryptocurrency investors, offering
            empowerment to numerous clients globally, establishing a dependable
            source of income that is less burdensome in its execution.
          </p>
        </div>

        <div className="Why-Content">
          <div className="Contents">
            <div className="Con1">
              <div className="Con1-Img">
                <img src={Risk}></img>
              </div>
              <div className="Con1-Text">
                <h1>Risk Management</h1> <br></br>
                <h4>
                  Trading on any market involves many opportunities with the
                  capacity to make large profits quickly, but traders soon
                  realise that a single loss can wipe out the portfolio. We
                  execute a well-designed risk management strategy that lets you
                  remain profitable overtime.
                </h4>
              </div>
            </div>

            <div className="Con1">
              <div className="Con1-Img">
                <img src={Automatic}></img>
              </div>
              <div className="Con1-Text">
                <h1>Automatic Software</h1> <br></br>
                <h4>
                  Trading on any market involves many opportunities with the
                  capacity to make large profits quickly, but traders soon
                  realise that a single loss can wipe out the portfolio. We
                  execute a well-designed risk management strategy that lets you
                  remain profitable overtime.
                </h4>
              </div>
            </div>
          </div>

          <div className="Contents">
            <div className="Con1">
              <div className="Con1-Img">
                <img src={Bank}></img>
              </div>
              <div className="Con1-Text">
                <h1>Banking</h1> <br></br>
                <h4>
                  Trading on any market involves many opportunities with the
                  capacity to make large profits quickly, but traders soon
                  realise that a single loss can wipe out the portfolio. We
                  execute a well-designed risk management strategy that lets you
                  remain profitable overtime.
                </h4>
              </div>
            </div>

            <div className="Con1">
              <div className="Con1-Img-Award">
                <img src={Award}></img>
              </div>
              <div className="Con1-Text">
                <h1>An Award Winning Platform</h1> <br></br>
                <h4>
                  Trading on any market involves many opportunities with the
                  capacity to make large profits quickly, but traders soon
                  realise that a single loss can wipe out the portfolio. We
                  execute a well-designed risk management strategy that lets you
                  remain profitable overtime.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div className="What-our-clients">
        <div className="Market-Text">
          <h1>What our satisfied clients say about PrimeFxmargins</h1>
          <p>
            PrimeFxmargins is a platform for cryptocurrency investors, offering
            empowerment to numerous clients globally, establishing a dependable
            source of income that is less burdensome in its execution.
          </p>
        </div>

        <div className="What-Boxes">
          <div className="box">
            <div className="star">
              <img src={fourStar}></img>
            </div>

            <div className="box-text">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                voluptatem soluta, doloribus consectetur voluptates perferendis
                tenetur neque quibusdam porro maiores, non aliquid voluptate
                aliquam et. Aperiam cupiditate perspiciatis impedit repudiandae.
              </h4>
            </div>

            <div className="box-name">
              <h4>John Doe</h4>
            </div>
          </div>

          <div className="box">
            <div className="star-five">
              <img src={fiveStar}></img>
            </div>

            <div className="box-text">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                voluptatem soluta, doloribus consectetur voluptates perferendis
                tenetur neque quibusdam porro maiores, non aliquid voluptate
                aliquam et. Aperiam cupiditate perspiciatis impedit repudiandae.
              </h4>
            </div>

            <div className="box-name">
              <h4>John Doe</h4>
            </div>
          </div>

          <div className="box">
            <div className="star">
              <img src={fourStar}></img>
            </div>

            <div className="box-text">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                voluptatem soluta, doloribus consectetur voluptates perferendis
                tenetur neque quibusdam porro maiores, non aliquid voluptate
                aliquam et. Aperiam cupiditate perspiciatis impedit repudiandae.
              </h4>
            </div>

            <div className="box-name">
              <h4>John Doe</h4>
            </div>
          </div>

          <div className="box">
            <div className="star">
              <img src={fourStar}></img>
            </div>

            <div className="box-text">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                voluptatem soluta, doloribus consectetur voluptates perferendis
                tenetur neque quibusdam porro maiores, non aliquid voluptate
                aliquam et. Aperiam cupiditate perspiciatis impedit repudiandae.
              </h4>
            </div>

            <div className="box-name">
              <h4>John Doe</h4>
            </div>
          </div>
        </div>
      </div> 
      <div className="second">
      <div className="Footer">
        <div className="Footer-Container">
          <div className="Section-One">
            <div className="A">
              <div className="F-Logo">
                <img src={FooterLogo} alt="Footer Logo" />
              </div>

              <div className="F-Text">
                <h4>
                  PrimeFxmargins offers financial management services, providing
                  users access to diverse investment opportunities for a
                  brighter financial future.
                </h4>
              </div>

              <button className="Footer-Button">
                <h4>
                  <Link to="/login">GET STARTED</Link>
                </h4>
              </button>
              {user && (
                <button onClick={handleLogout} className="Footer-Button">
                  <h4>LOGOUT</h4>
                </button>
              )}
            </div>

            <div className="B">
              <h3>Company</h3>
              <br />
              <br />
              <h4>
                <Link to="/about">About</Link>
              </h4>
              <h4>
                <Link to="/offer">What We Offer</Link>
              </h4>
              <h4>
                <Link to="/team">Meet the Team</Link>
              </h4>
              <h4>
                <Link to="/terms">Terms & Condition</Link>
              </h4>
            </div>

            <div className="B">
              <h3>Resources</h3>
              <br />
              <br />
              <h4>
                <Link to="/ebooks">Free e-books</Link>
              </h4>
              <h4>
                <Link to="/news">Trading News</Link>
              </h4>
              <h4>
                <Link to="/guides">Trading Guides</Link>
              </h4>
              <h4>
                <Link to="/strategies">Trading Strategies</Link>
              </h4>
            </div>

            <div className="B">
              <h3>Markets</h3>
              <br />
              <br />
              <h4>
                <Link to="/forex">Forex</Link>
              </h4>
              <h4>
                <Link to="/stocks">Stocks</Link>
              </h4>
              <h4>
                <Link to="/indices">Indices</Link>
              </h4>
              <h4>
                <Link to="/crypto">Crypto Currency</Link>
              </h4>
            </div>

            <div className="B">
              <h3>Help</h3>
              <br />
              <br />
              <h4>
                <Link to="/contact">Contact Us</Link>
              </h4>
              <h4>
                <Link to="/privacy">Privacy Policy</Link>
              </h4>
              <h4>
                <Link to="/faqs">Live Chat & FAQs</Link>
              </h4>
              <h4>
                <Link to="/support">Customer Support</Link>
              </h4>
            </div>
          </div>

          <div className="Section-Two">
            <div className="Copy-right">
              <h5>Copyright 2024, All Rights Reserved by PrimeFxmargins</h5>
            </div>

            <div className="Socials"></div>
          </div>
        </div>
      </div>
    </div>
       </div>
      {/* FOOTER /////////////////////////////////////////////////////////////////////////////// */}

     
    </div>
  );
};

export default HowItWorks;
