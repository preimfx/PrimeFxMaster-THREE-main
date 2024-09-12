import React from 'react';
import { auth } from '../config/firebase';
import { UserIcon } from '@heroicons/react/20/solid';
import faq from "../assets/faq.2807eee2993623c097a3.png";
import { Link, useNavigate } from 'react-router-dom';

import { useMyContext } from './Mycontext';

const Nav2 = () => {
  const { isNavbarVisible, toggleNavbarVisibility , hide} = useMyContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/"); // Navigate to home after logout
    });
  };

  return (
    isNavbarVisible == true ? (
      <div className={`container h-screen xl:w-[27vw] lg:w-[27vw] w-[80%]  z-50 p-2 overflow-hidden xl:fixed lg:fixed fixed lg:left-[73%] xl:left-[73%] bg-white  ${hide ? "dn" : ""}`}>
        <div className='p-3 flex items-center justify-center gap-2 mx-auto'>
          <UserIcon className='w-10 bg-gray-200 rounded-full text-gray-400' />
          <h1 className='text-gray-800 text-sm font-bold'>
            {auth?.currentUser.displayName}
          </h1>
        </div>

        <div className='items-center justify-center flex bg-red flex-col'>
          <h5 className='text-end text-xs' onClick={handleLogout}>Log Out</h5>
          <div className='w-[85%] h-[300px] bg-gray-300 mt-4 items-center justify-center flex flex-col gap-5 p-3 rounded-xl'>
            <img src={faq} alt="" className='w-16' />
            <div className='grid items-center justify-center'>
              <p className='text-xs'>Support</p>
              <h2 className='font-bold w-full text-sm'>Need Help With Anything?</h2>
            </div>
            <button className='bg-[#00a859] w-full'>Consult a Specialist</button>
          </div>
        </div>

        <div className='flex flex-col gap-4 h-[240px] w-full container overflow-y-scroll'>
          <ul className='flex flex-col gap-0 h-auto w-full container'>
            <Link to={"/"}  onClick={toggleNavbarVisibility}>
              <li className='h-[130%] pt-3 pb-3 pl-3 hover:bg-gray-400 rounded-e-full flex items-center text-sm gap-5'>
                <h6>Dashboard</h6>
              </li>
            </Link>
            <Link to={"CreateAccount"} onClick={toggleNavbarVisibility}>
              <li className='h-[130%] pt-3 pb-3 pl-3 hover:bg-gray-400 rounded-e-full flex items-center text-sm gap-5'>
                <h6>Create Account</h6>
              </li>
            </Link>
            <Link to={"/promo"} onClick={toggleNavbarVisibility}>
              <li className='h-[130%] pt-3 pb-3 pl-3 hover:bg-gray-400 rounded-e-full flex items-center text-sm gap-5'>
                <h6>Promotions</h6>
              </li>
            </Link>
            <Link to={"/tradingAcc"} onClick={toggleNavbarVisibility}> 
              <li className='h-[130%] pt-3 pb-3 pl-3 hover:bg-gray-400 rounded-e-full flex items-center text-sm gap-5'>
                <h6>Trading Accounts</h6>
              </li>
            </Link>
            <Link to={"/v"} onClick={toggleNavbarVisibility}>
              <li className='h-[130%] pt-3 pb-3 pl-3 hover:bg-gray-400 rounded-e-full flex items-center text-sm gap-5'>
                <h6>Withdraw</h6>
              </li>
            </Link>
            <Link to={"/donate"} onClick={toggleNavbarVisibility}>
              <li className='h-[130%] pt-3 pb-3 pl-3 hover:bg-gray-400 rounded-e-full flex items-center text-sm gap-5'>
                <h6>Deposit</h6>
              </li>
            </Link>
            <Link to={"copyTrading "} onClick={toggleNavbarVisibility}>
              <li className='h-[130%] pt-3 pb-3 pl-3 hover:bg-gray-400 rounded-e-full flex items-center text-sm gap-5'>
                <h6>Copy Trading</h6>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    ):(<></>)
  )

};

export default Nav2;
