import React from 'react';
import { useMyContext } from './Mycontext';

const CustomDropdown = ({ options, isOpen, setIsOpen, handleOptionClick, id, setId, closer, cl, traderExp, setTraderExp, setTimeframe, fetchData, setPopular }) => {
  const { selectedOptions } = useMyContext();

  // Close function which also sets the id to zero
  const close = (option) => {
    handleOptionClick(id, option);
    closer(true);
  };

  const operations = (id, index) => {
    if (id === 4) {
      if (index === 0) setTraderExp("le");
      else if (index === 1) setTraderExp("ex");
      else if (index === 2) setTraderExp("ha");
    } else if (id === 2) {
      if (index === 0) setTimeframe("2Weeks");
      else if (index === 1) setTimeframe("1Month");
      else if (index === 2) setTimeframe("3Months");
      else if (index === 3) setTimeframe("6Months");
      else if (index === 4) setTimeframe("All Time");
    } else if (id === 1 && index === 2) {
      setPopular(true);
    }

    fetchData();
  }

  const handleId = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={handleId}
        className={`w-full bg-gray-100 text-black border border-gray-300 rounded px-4 py-2 text-left h-auto relative z-10 ${
          isOpen ? 'z-30' : 'z-10'
        }`}
      >
        {selectedOptions[id] || "Select an option"}
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-48 overflow-y-auto z-40 shadow-lg">
          {options?.map((option, index) => (
            <li
              key={index}
              onClick={() => { close(option); operations(id, index); }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
