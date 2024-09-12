import React from 'react';
import nav from "/src/assets/NAV.png";
import { useMyContext } from './Mycontext';
import { Bars3Icon } from '@heroicons/react/16/solid';

const Frame = ({ children }) => {
  const { toggleNavbarVisibility } = useMyContext();

  return (
    <div className='w-[73%] sm:w-[100%] w-full md:w-full xl:w-[73%] lg:w-[73%]  h-[100vh] flex flex-col'>
      <div className='flex justify-between w-full'>
        <img src={nav} alt="Navigation" className='w-[200px] p-5' />
        <Bars3Icon className='w-10 cursor-pointer lg:invisible xl:invisible' onClick={toggleNavbarVisibility} />
      </div>
      <div className='w-full flex-1 bg-green-100 justify-center items-center overflow-auto'>
        {children}
      </div>
    </div>
  );
}

export default Frame;
