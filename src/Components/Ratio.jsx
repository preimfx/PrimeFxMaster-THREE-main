import React, { useState } from 'react';

const Ratio = () => {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);

  const handleInputOneChange = (e) => {
    const value = parseFloat(e.target.value);
    setInputOne(value);
    setInputTwo(value * 2); // Ensuring the ratio
  };

  const handleInputTwoChange = (e) => {
    const value = parseFloat(e.target.value);
    setInputTwo(value);
    setInputOne(value / 2); // Ensuring the ratio
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-md shadow-md">
      <label className="flex flex-col items-start w-full max-w-xs">
        <span className="mb-2 text-lg font-semibold text-gray-700">Input One:</span>
        <input
          type="number"
          value={inputOne}
          onChange={handleInputOneChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col items-start w-full max-w-xs">
        <span className="mb-2 text-lg font-semibold text-gray-700">Input Two:</span>
        <input
          type="number"
          value={inputTwo}
          onChange={handleInputTwoChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
    </div>
  );
};

export default Ratio;
