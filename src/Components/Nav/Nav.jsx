import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import nav from "/src/assets/NAV.png";
import { Bars3Icon } from '@heroicons/react/20/solid';

const Nav = ({ scrollToSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    const closeMenu = () =>{
      setIsNavOpen(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '2348051203286'; // International format
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (

    <div className='main-nav'>
      <div className='nav'>
      
      <img src={nav} className='logo' alt="Logo" />
      
      <ul className={`nav-links ${isNavOpen ? 'open' : ''} `}>
       {/* <div  className='back-drop'>
       <img src={nav} alt="" />
       </div> */}
      <button className='x w-16' onClick={toggleNav}>x</button>

        <li>
          <button className="a"><Link to="/">Home</Link></button>
        </li>

        <li>
          <button onClick={() => scrollToSection("about") } className="a">About</button>
        </li>
        <li>
          <button onClick={openWhatsApp} className="a">Contacts</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("how-it-works")} className="a">How It Works</button>
        </li>
        <li>
         <button><Link className='a'  to={"/faqs"}>FAQs</Link></button>
        </li>
      </ul>

      <div className="heart-div" onClick={toggleNav}>
        <Bars3Icon className='heart'/>
      </div>
    
    </div>

   

    </div>
  );
}

export default Nav;
