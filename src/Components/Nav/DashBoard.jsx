import React, { useEffect, useState } from 'react';
import Frame from '../Frame';
import { useMyContext } from '../Mycontext';
import CustomDropdown2 from '../CustomDropdown2';
import { db, useAuthState } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import FinnhubData from '../FinnhubData';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import AccountDetails from '../AccountDetails';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  const { isOpen, setIsOpen, handleOptionClick, id, setId, setId2, id2 } = useMyContext();
  const [accountDetails, setAccountDetails] = useState([]);
  const [currentUser] = useAuthState();
  const [changer, setChanger] = useState(0);
  const [ids, setIds] = useAuthState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isModalOpen2, setIsModalOpen2] = useState(false); // Modal state?
  const [isModalOpen3, setIsModalOpen3] = useState(false); // Modal state?

  useEffect(() => {
    const fetchAccountDetails = async () => {
      if (currentUser) {
        try {
          const accountsRef = collection(db, "users", currentUser.uid, "accounts");
          const querySnapshot = await getDocs(accountsRef);
          const accounts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setAccountDetails(accounts);
        } catch (error) {
          console.error("Error fetching account details:", error);
        }
      }
    };

    fetchAccountDetails();
  }, [currentUser]);

  useEffect(() => {
    if (accountDetails.length > 0 && id2 >= 0 && id2 < accountDetails.length) {
      console.log('Selected account details:', accountDetails[id2]);
    }
  }, [accountDetails, id2]);

  const getFormattedBalance = (balance) => {
    return balance != null ? `$${balance.toLocaleString()}.00` : "$0.00";
  };

  const handleTradeClick = () => {

    if(accountDetails.length < 3)
    {
      setIsModalOpen3(true)
    }
    if (id2 == 2 && accountDetails[2]?.balance <= 0 ) {
      setIsModalOpen(true);
    } 

    if(id2 == 0 )
    {
      setIsModalOpen2(true);  
    }
 
  };

  

  const closeModal = () => {
    setIsModalOpen(false);
    
  };

  
  const closeModal2 = () => {
  
    setIsModalOpen2(false);
    
  };


  const closeModal3 = () => {
  
    setIsModalOpen3(false);
    
  };

  
  return (
    <div className='w-full px-4 sm:px-5 lg:px-10 xl:px-24 h-[100%]  flex flex-col gap-64'>
    <Frame>
      <div className='w-full p-4 lg:p-6 xl:p-8 h-auto '>
        <div className='w-full h-auto  bg-white rounded-3xl p-2 sm:p-4 '>
          <div className='flex flex-col sm:flex-row justify-between pt-5 px-3 sm:px-5'>
            <p className='border-b-4 border-dotted text-gray-400 text-sm'>Balance</p>
            <div className='w-full sm:w-[70%] xl:w-[300px] flex'>
              <CustomDropdown2
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                options={accountDetails.map((account, index) => ({
                  id: index, // Use the index as the unique id
                  accountType: account.accountType || "N/A",
                  saver: account.saver || "N/A",
                  balance: account.balance || 0
                }))}
                handleOptionClick={handleOptionClick}
                id={id}
                setId={setId}
                id2={id2}
                setId2={setId2}
                setIds={setIds}
              />
            </div>
          </div>
          <div className='px-3 sm:px-5 mt-2'>
            <h1 className='font-semibold text-xl sm:text-3xl'>
              {getFormattedBalance(accountDetails[id2]?.balance)}
            </h1>
          </div>
          <div className='px-3 sm:px-5 flex flex-col sm:flex-row justify-between mt-5'>
            <div className='flex-1 text-center'>
              <h4 className='border-b-2 border-dotted text-gray-500'>Free Margin</h4>
              {getFormattedBalance(accountDetails[id2]?.balance)}
            </div>
            <div className='flex-1 text-center'>
              <h4 className='border-b-2 border-dotted text-gray-500'>Equity</h4>
              {getFormattedBalance(accountDetails[id2]?.balance)}
            </div>
            <div className='flex-1 text-center'>
              <h4 className='border-b-2 border-dotted text-gray-500'>Leverage</h4>
              <div>
                <input type="number" className='w-16 border-none' />
              </div>
            </div>
            <div className='flex-1 text-center'>
              <h4 className='border-b-2 border-dotted text-gray-500'>Account Type</h4>
              <p>{accountDetails[id2]?.accountType || "N/A"}</p>
            </div>
            <div className='flex-1 text-center'>
              <h4 className='border-b-2 border-dotted text-gray-500'>Swap</h4>
              <p>No</p>
            </div>
          </div>
          <div className='p-5 flex flex-col sm:flex-row gap-4'>
            {id2 === 1 ? (
              <>
                <Link to={"/trade"}>
                  <button className='w-full sm:w-32 h-16 rounded-full text-lg bg-green-500 text-white'>Trade</button>
                </Link>
                <Link to={"/CreateAccount"}>
                  <button className='w-full sm:w-32 h-16 rounded-full text-lg bg-green-50 text-green-500'>Top Up</button>
                </Link>
              </>
            ) : (
              <>
                <Link to={accountDetails[2]?.balance > 0 ? "/realTrade" : ""}>
                  <button
                    className='w-full sm:w-32 h-16 rounded-full text-lg bg-green-50 text-green-500'
                    onClick={handleTradeClick}
                  >
                    Trade
                  </button>
                </Link>
                <button className='w-full sm:w-32 h-16 rounded-full text-lg bg-green-500 text-white'><Link to="/Donate">Deposit</Link></button>
                <button className='w-full sm:w-32 h-16 rounded-full text-lg bg-green-50 text-green-500'><Link to="/v">Withdraw</Link></button>
              </>
            )}
          </div>
          <div className='w-full bg-white rounded-[30px] mt-6'>
            <FinnhubData />
          </div>
          <div className='w-full h-[200px] bg-white mt-10 rounded-xl flex flex-col items-center justify-center p-5 text-xs'>
            <div className='flex items-center mb-3'>
              <h1 className='font-semibold text-xl flex items-center'>
                50% Bonuses <QuestionMarkCircleIcon className='w-7 text-green-300 ml-2' />
              </h1>
            </div>
            <div className='text-center px-5'>
              <p>Here you'll find information about all your active and available bonuses. You can claim a bonus on each deposit.</p>
              <button className='w-full sm:w-44 h-12 rounded-xl bg-green-50 text-green-500 mt-3'>See bonuses</button>
            </div>
          </div>
          <div className='bg-gray-100 h-[370px] mt-6 w-full rounded-xl'>
            <div className='bg-[whitesmoke] w-full pr-4 pl-4 pt-7 pb-7 h-[140%] xl:h-[70%] 2xl:h-[70%] rounded-xl'>
              <div className='bg-gray-300 container w-full h-[80px] xl:h-[80px] 2xl:h-[80px] rounded-lg'></div>
              <div className='p-4'>
                <h3 className='font-bold'>Your Account</h3>
                <p className='text-xs'>
                  This is the list of all your accounts in our service. Here you can view the main details, track your activities, and{' '}
                  <span className='text-green-300 underline font-semibold cursor-pointer'>deposit into your account.</span>
                </p>
                <div className='p-5'>
                  <div className='flex  border-b-gray-400 border-b'>
                    <li
                      className={`w-full p-2 xl:text-xl lg:text-xl  text-sm   flex cursor-pointer text-gray-400 ${changer === 0 ? 'text-green-400 underline' : ''}`}
                      onClick={() => setChanger(0)}
                    >
                      <h3>Real</h3>
                    </li>
                    <li
                      className={`w-full p-2 xl:text-xl text-sm  lg:text-xl flex cursor-pointer text-gray-400 ${changer === 1 ? 'text-green-400 underline' : ''}`}
                      onClick={() => setChanger(1)}
                    >
                      <h3>Contests</h3>
                    </li>
                    <li
                      className={`w-full p-2 xl:text-xl text-sm  lg:text-xl flex cursor-pointer text-gray-400 ${changer === 2 ? 'text-green-400 underline' : ''}`}
                      onClick={() => setChanger(2)}
                    >
                      <h3>Demo</h3>
                    </li>
                    <li
                      className={`w-full p-2 xl:text-xl text-sm  lg:text-xl flex cursor-pointer text-gray-400 ${changer === 3 ? 'text-green-400 underline' : ''}`}
                      onClick={() => setChanger(3)}
                    >
                      <h3>Closed</h3>
                    </li>
                  </div>
                  <AccountDetails
                    accountType={0}
                    changer={changer}
                    message="You Do Not Have A Real Account Yet"
                    details={accountDetails.find(account => account.accountType === 'Real')}
                  />
                  <AccountDetails
                    accountType={1}
                    changer={changer}
                    message="You Do Not Have A Contest Account Yet"
                    details={accountDetails.find(account => account.accountType === 'Contests')}
                  />
                  <AccountDetails
                    accountType={2}
                    changer={changer}
                    message="You Do Not Have A Demo Account Yet"
                    details={accountDetails.find(account => account.accountType === 'Demo')}
                  />
                  <AccountDetails
                    accountType={3}
                    changer={changer}
                    message="No closed accounts available."
                    details={accountDetails.find(account => account.accountType === 'Closed')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>

      {isModalOpen && (
        <div className=' absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg'>
            <h2 className='text-2xl mb-4'>Insufficient Balance</h2>
            <p>Your account balance is less than zero. Please deposit into your account to continue trading.</p>
            <div className='mt-4'>
              <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      
{isModalOpen2 && (
        <div className=' absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg'>
            <h2 className='text-2xl mb-4'>Insufficient Balance</h2>
            <p>There Are No Contests Available Yet</p>
            <div className='mt-4'>
              <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={closeModal2}>Close</button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen3 && (
        <div className=' absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg'>
            <h2 className='text-2xl mb-4'>Insufficient Balance</h2>
            <p>Open All Three Accounts </p>
            <div className='mt-4'>
              <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={closeModal3}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
