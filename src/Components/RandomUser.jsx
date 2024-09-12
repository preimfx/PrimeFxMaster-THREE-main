import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useMyContext } from './Mycontext';
import CustomDropdown from './CustomDropdown';
import { Squares2X2Icon, Bars3Icon, StarIcon } from '@heroicons/react/20/solid';
import TermsAndConditions from './TermAndConditions';
import { Link } from 'react-router-dom';

const RandomUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { makeHide, isOpen, setIsOpen, selectedOptions, handleOptionClick, id, setId, catigs, setCatgs, newCatig, setnNewCatig, traderExp, setsubmit, submit, setTraderExp } = useMyContext();
  const [cl, setcl] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [profit, setProfit] = useState([]);
  const [loss, setLoss] = useState([]);
  const [commission, setComission] = useState([]);
  const [timeFrame, setTimeframe] = useState("All Time");
  const [isMostPopular, setMostpopular] = useState(false);
  const [switching, setSwitch] = useState(0);
  const [grid, setGrid]= useState(false)

  useEffect(() => {


    if(window.innerWidth < 1024)
    {
      setGrid(true)
    }
    makeHide(true);

    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUsers(response.data.results);

        // Generate random numbers for each user between 25 and 100
        const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 76) + 25);
        const profits = Array.from({ length: 10 }, () => Math.floor(Math.random() * 3000) + 2500);
        const Losses = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 2500);
        const commissions = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 30);
        // Sort the numbers in descending order
        numbers.sort((a, b) => b - a);
        setRandomNumbers(numbers);
        setComission(commissions);
        setLoss(Losses);
        setProfit(profits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cl) setId(0);
    if (id === 0) setcl(false);
  }, [cl, id]);

  const dropdownOptions = [
    ['Risk Score1', 'Top Genre1', 'Most Popular1'],
    ['2Weeks', '1Month', '3Months', "6months", "All Time"],
    ['$25', '$50', '$100', "$300", "$500", "$700", "$1000"],
    ['Legend', 'Expert', 'High Achiever', "Growing Talent"]
  ];



  const gridShow =()=>{

       if(window.innerWidth >= 1024)
       {
          setGrid(true)
       }
  }


  
  const setList =()=>{

    if(window.innerWidth >= 1024)
    {
       setGrid(false)
    }
}
  const fetchData = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=10');
      setUsers(response.data.results);

      // Generate random numbers for each user between 25 and 100
      const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 76) + 25);
      const profits = Array.from({ length: 10 }, () => Math.floor(Math.random() * 3000) + 2500);
      const Losses = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 2500);
      const commissions = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 30);
      // Sort the numbers in descending order
      numbers.sort((a, b) => b - a);
      setRandomNumbers(numbers);
      setComission(commissions);
      setLoss(Losses);
      setProfit(profits);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='px-4 py-3 sm:px-8 md:px-10 lg:px-12 container font-medium'>
      <div className='w-full md:w-[80vw] lg:w-[60vw]'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl'>PrimeFX Copy Trading</h1>
        <div>
          <div className='mt-3 sm:mt-5 flex gap-3 sm:gap-5 text-gray-500 font-semibold text-lg sm:text-xl'>
            <h1
              className={`cursor-pointer ${switching === 0 ? "text-green-600 border-b-2 border-green-600" : ""}`}
              onClick={() => setSwitch(0)}
            >
              Rating
            </h1>
            <h1
              className={`cursor-pointer ${switching === 1 ? "text-green-600 border-b-2 border-green-600" : ""}`}
              onClick={() => setSwitch(1)}
            >
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>

      <div className={switching === 0 ? "block" : "hidden"}>
        <div className='flex flex-col lg:flex-row font-medium'>
          <div className='w-full lg:w-[60vw]'>
            <div>
              <div className='mt-4 sm:mt-7 flex flex-col sm:flex-row gap-2 sm:gap-4'>
                <div className='w-full'>
                  <h1 className='text-xl sm:text-2xl md:text-3xl pt-4'>Master Rating</h1>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
                    {dropdownOptions.map((options, index) => (
                      <div
                        key={index}
                        className='relative border-solid border-gray-400 border-2 h-16 rounded-xl flex gap-3 items-center justify-center'
                        onClick={() => { setId(index + 1) }}
                      >
                        <h2 className='absolute top-[-12px] left-2 bg-white text-gray-300'>
                          {index === 0 ? "Whom to Show First" : index === 1 ? "For What Time" : index === 2 ? "Minimum investment" : "Minimum Expertise"}
                        </h2>
                        <CustomDropdown
                          options={options}
                          isOpen={id === index + 1}
                          setIsOpen={setIsOpen}
                          handleOptionClick={handleOptionClick}
                          id={index + 1}
                          setId={setId}
                          closer={setcl}
                          cl={cl}
                          traderExp={traderExp}
                          setTraderExp={setTraderExp}
                          setTimeframe={setTimeframe}
                          setPopular={setMostpopular}
                          fetchData={fetchData}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='w-full lg:w-[60%] pt-12 lg:pt-24 gap-1'>
                  <h1 className='text-sm flex gap-1 items-center justify-center'>
                    7 Days Free Trial <input type="checkbox" className='h-5 sm:h-6 w-5 sm:w-7' />
                  </h1>
                </div>
                <Link onClick={() => { window.location.href = "/" }} className='w-[150px] sm:w-[200px]'>Back Home</Link>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center h-full pt-16 lg:pt-[20%] gap-4'>
            <input placeholder='nickname' />
            <Squares2X2Icon className='w-8 sm:w-10'  onClick={gridShow}/>
            <Bars3Icon className='w-8 sm:w-10' onClick={setList} />
          </div>
        </div>

        <div className='mt-16 lg:mt-24 grid gap-5 px-4 sm:px-10 items-center '>
          <div className='grid grid-cols-2 sm:grid-cols-6 items-center justify-center lg:visible invisible ' style={{ gridTemplateColumns: '3fr 1fr 2fr 1fr 1fr 1fr' }}>
            <div className='w-full h-[50px] sm:h-[60px] '></div>
            <div className=''>
              <h1 className='text-sm'>Risk score</h1>
              <h5 className='text-gray-500 text-xs'>{timeFrame === dropdownOptions[1][0] ? dropdownOptions[1][0] : ""}</h5>
            </div>
            <div>
              <h1 className='text-sm'>Gain</h1>
              <h5 className='text-gray-500 text-xs'>{timeFrame}</h5>
            </div>
            <div>
              <h1 className='text-sm'>Profit & Loss</h1>
              <h5 className='text-gray-500 text-xs'>{timeFrame}</h5>
            </div>
            <div>
              <h1 className='text-sm'>Copiers</h1>
              <h5 className='text-gray-500 text-xs'>{timeFrame}</h5>
            </div>
            <div>
              <h1 className='text-sm'>Commission</h1>
            </div>
          </div>

          {
    grid == false ? (
        <div>
                {users.map((user, index) => (
            <div key={index} className='grid grid-cols-2 sm:grid-flow-col mb-10' style={{ gridTemplateColumns: '3fr 1fr 2fr 1fr 1fr 1fr' }}>
              <div className='flex gap-8'>
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className='w-12 rounded-full' />
                <div>
                  <h1>{`${user.name.first} ${user.name.last}`}</h1>
                  <h1 className='flex gap-3 text-gray-600'>
                    <StarIcon
                      className={` ${traderExp === "ex" && submit === "submit" ? "text-blue-500 w-4" : traderExp === "ha" && submit === "submit" ? "text-green-500 w-4" : traderExp === "le" && submit === "submit" ? "text-orange-500 w-4" : "hidden"}`}
                    />
                    {traderExp === "ex" && submit === "submit" ? "Expert" :
                      traderExp === "le" && submit === "submit" ? "Legend" :
                        traderExp === "ha" && submit === "submit" ? "High Achiever" : ""}
                  </h1>
                </div>
              </div>
              <button className='w-10 sm:w-14 h-6 text-xs p-0 bg-green-600 rounded-xl'>1Risk</button>
              <p className='text-green-600'>+{randomNumbers[index]}%</p>

              <div className='flex'>
                <div className='pr-3 border-b-2 border-green-500'>
                  <p className=''>{profit[index]}</p>
                </div>
                <div className={`${loss[index] > 50 ? "border-b-2 border-red-500" : "border-b-2 border-green-500"}`}>
                  <p>{loss[index]}</p>
                </div>
              </div>

              <div className='pl-4 text-green-500'>
                <p>{isMostPopular === true ? loss[index] : randomNumbers[index]}</p>
              </div>

              <div className='pl-4 text-green-500'>
                <p>{commission[index]}%</p>
              </div>
            </div>
          ))}
        </div>
    ) : (
        <>
        
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2"> 
            {users.map((user, index) => (
              <div
                key={index}
                className="grid  sm:grid-flow-col"
                style={{ gridTemplateRows: "1fr 1fr 1fr" }}

              >
                <div className="flex  bg-green-400 justify-between items-center w-full p-3">
                  <div className="flex gap-8">
                    <img
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                      className="w-20 rounded-full"
                    />
                    <div className="">
                      <h1>{`${user.name.first} ${user.name.last}`}</h1>
                      <h1 className="flex gap-3 text-gray-600">
                        <StarIcon
                          className={` ${traderExp === "ex" && submit === "submit"
                            ? "text-blue-500 w-4"
                            : traderExp === "ha" && submit === "submit"
                              ? "text-green-500 w-4"
                              : traderExp === "le" && submit === "submit"
                                ? "text-orange-500 w-4"
                                : "hidden"
                            }`}
                        />
                        {traderExp === "ex" && submit === "submit"
                          ? "Expert"
                          : traderExp === "le" && submit === "submit"
                            ? "Legend"
                            : traderExp === "ha" && submit === "submit"
                              ? "High Achiever"
                              : ""}
                      </h1>
                    </div>
                  </div>
                  <button className="w-10 sm:w-14 h-6 text-xs p-0 bg-green-600 rounded-xl">
                    1Risk
                  </button>
                </div>
                <div className="dimacate flex justify-between  items-center p-3">
                  <div>
                    <h3 className="text-gray-400">Gain</h3>
                    <p className="text-green-600 mt-2">+{randomNumbers[index]}%</p>
                  </div>



                  <div className="pl-4 text-green-500">
                    <h3 className="text-gray-400">Copiers</h3>
                    <p className="mt-2">
                      {isMostPopular === true ? loss[index] : randomNumbers[index]}
                    </p>
                  </div>

                  <div className="pl-4 text-green-500">
                    <h3 className="text-gray-400">Commissions</h3>
                    <p className="mt-2">{commission[index]}%</p>
                  </div>



                </div>

                <div className="flex items-center justify-center w-full p-3">
                  <div className="flex  justify-between items-center w-full">
                    <div className="pr-3 border-b-2 border-green-500 w-full">
                      <p className="flex gap-7 w-full"> Profit {profit[index]}</p>
                    </div>
                    <div
                      className={`${loss[index] > 50
                        ? "border-b-2 border-red-500 w-full"
                        : "border-b-2 border-green-500 w-full"
                        }`}
                    >
                      <p className="flex gap-7 w-full" >Loss  {loss[index]}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
 
        
        </>
    )
}

        </div>
      </div>

      <div className={switching === 1 ? "block" : "hidden"}>
        <TermsAndConditions />
      </div>

    </div>

  );
};

export default RandomUsers;
