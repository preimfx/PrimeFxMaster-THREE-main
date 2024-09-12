import React from 'react';
import { useMyContext } from './Mycontext';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const CustomDropdown = ({ options, isOpen, setIsOpen, handleOptionClick, id2, setId2, id, setId , setIds }) => {
  const { selectedOptions } = useMyContext();

  const close = (option) => {
    handleOptionClick(id, option);
    setIsOpen(false);

    switch (option.accountType) {
      case "Demo":
        setId2(1);
        break;
      case "Real":
        setId2(2);
        break;
      case "Contests":
        setId2(0);
        break;
      default:
        setId2(-1); // Default value if no match
    }


   
    
  };

  const handleId = () => {
    setIsOpen(!isOpen);
  };

  // Fallbacks for selectedOptions[id]
  const selectedOption = selectedOptions[id] || {};
  const accountType = selectedOption.accountType || "Select an Account";
  const optionId = selectedOption.id || "";

  // Log the options to debug
  console.log('Dropdown options:', options);
  console.log('Selected option:', selectedOption);

  return (
    <div className="relative w-[100%">
      <button
        onClick={handleId}
        className={`w-full bg-gray-100 text-white border border-gray-300 rounded px-4 py-2 text-left h-auto relative z-10 ${isOpen ? 'z-10' : 'z-30'}`}
      >
        <div className='flex gap-10 items-center'>
          <button className='bg-green-500 w-22 h-9 text-xs flex text-center justify-center items-center'>
            {accountType}
          </button>
          <h1 className='text-black text-xs'>{optionId}</h1>
          <ChevronDownIcon className='w-7 text-black' />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-48 overflow-y-auto z-40">
          {options?.length > 0 ? (
            options.map((option) => (
              <li
                key={option.id || Math.random()} // Use a fallback key if id is missing
                onClick={() => close(option)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {/* Provide default values for missing properties */}
                {`${option.accountType || 'N/A'} - ${option.saver || 'N/A'} - $${option.balance !== undefined ? option.balance.toLocaleString() : '0.00'}`}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No options available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
