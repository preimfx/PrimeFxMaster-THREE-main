import React from "react";
import "../Components/faq.css";
import ASKPLUS from "../assets/Vector plus.png";
import FAQLOGO from "../assets/faq.2807eee2993623c097a3.png";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/NAV.png";


const Faqs = () => {

  const openWhatsApp = () => {
    const phoneNumber = '2349056557410'; // International format
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <div className="Ask-questions">
        <div className="Market-Text">
          <h1>Frequently Asked Questions</h1>
          <p>
            Discover how our users has benefited from our powerful finance
            management services and see how it can work for you too.
          </p>
        </div>

        <div className="Ask-Offer-Plans">
          <div className="Ask-Con">
            <div className="Ask-Con1">
              <h4>How can PrimeFxmargins help me?</h4>
            </div>

            <button className="Ask-IMG">
              <img className="Ask-Plus" src={ASKPLUS}></img>
            </button>
          </div>

          <div className="Ask-Con">
            <div className="Ask-Con1">
              <h4>How can PrimeFxmargins help me?</h4>
            </div>

            <button className="Ask-IMG">
              <img className="Ask-Plus" src={ASKPLUS}></img>
            </button>
          </div>

          <div className="Ask-Con">
            <div className="Ask-Con1">
              <h4>How can PrimeFxmargins help me?</h4>
            </div>

            <button className="Ask-IMG">
              <img className="Ask-Plus" src={ASKPLUS}></img>
            </button>
          </div>

          <div className="Ask-Con">
            <div className="Ask-Con1">
              <h4>How can PrimeFxmargins help me?</h4>
            </div>

            <button className="Ask-IMG">
              <img className="Ask-Plus" src={ASKPLUS}></img>
            </button>
          </div>
        </div>

        <div className="Need-Help">
          <div className="Img-Box">
            <img src={FAQLOGO}></img>
          </div>

          <div className="Text-Box">
            <div className="Support">
              <div className="Support1">
                <p>Support</p> <br></br>
                <h4>Need Help With Anything?</h4>
              </div>
              <button className="Support2" onClick={openWhatsApp}>
                <p>Consult with a Specialist</p>
              </button>
            </div>

            <div className="Send-Us-A-Message">
              <form className="Us-Form">
              <p>Send us a Message</p>
                <div className="Send-Form-Group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Enter Message"
                    required
                  ></input>

                  <button className='Send-Btn' type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      {/* FOOTER ///////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="FAQFooter">
        <div className="FAQFooter-Container">
          <div className="FAQSection-One">
            <div className="FAQA">
              <div className="FAQF-Logo">
                <img src={FooterLogo}></img>
              </div>

              <div className="FAQF-Text">
                <h4>
                  PrimeFxmargins offers financial management services, providing
                  users access to diverse investment opportunities for a
                  brighter financial future.
                </h4>
              </div>

              <button className="FAQFooter-Button">
                <h4>
                  <Link to="/login">GET STARTED</Link>
                </h4>
              </button>
            </div>

            <div className="FAQB">
              <h3>Company</h3> <br></br> <br></br>
              <h4><Link>About</Link></h4>
              <h4><Link>What We Offer</Link></h4>
              <h4><Link>Meet the Team</Link></h4>
              <h4><Link>Terms & Condition</Link></h4>
            </div>

            <div className="FAQB">
              <h3>Resources</h3> <br></br> <br></br>
              <h4><Link>Free e-books</Link></h4>
              <h4><Link>Trading News</Link></h4>
              <h4><Link>Trading Guides</Link></h4>
              <h4><Link>Trading Strategies</Link></h4>
            </div>

            <div className="FAQB">
              <h3>Markets</h3> <br></br> <br></br>
              <h4><Link>Forex</Link></h4>
              <h4><Link>Stocks</Link></h4>
              <h4><Link>Indices</Link></h4>
              <h4><Link>Crypto Currency</Link></h4>
            </div>

            <div className="FAQB">
              <h3>Help</h3> <br></br> <br></br>
              <h4><Link>Contact Us</Link></h4>
              <h4><Link>Privacy Policy</Link></h4>
              <h4><Link>Live Chat & FAQs</Link></h4>
              <h4><Link>Customer Support</Link></h4>
            </div>
          
          </div>

          <div className="FAQSection-Two">
            <div className="FAQCopy-right">
              <h5>Copyright 2024, All Rights Reserved by PrimeFxmargins</h5>
            </div>

            <div className="FAQSocials"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faqs;
