import React, { useState, useEffect } from 'react';
import Frame from './Frame';
import AccountDetails from './AccountDetails';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuthState } from '../config/firebase'; // Import useAuthState
import { Link } from 'react-router-dom';

const TradingAccount = () => {
  const [changer, setChanger] = useState(0);
  const [accountDetails, setAccountDetails] = useState([]);
  const [currentUser] = useAuthState();

  useEffect(() => {
    const fetchAccountDetails = async () => {
      if (currentUser) {
        try {
          const accountsCollectionRef = collection(db, "users", currentUser.uid, "accounts");
          const accountsSnapshot = await getDocs(accountsCollectionRef);
          const accountsData = accountsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

          if (accountsData.length > 0) {
            setAccountDetails(accountsData);
          } else {
            console.log("No accounts found!");
            setAccountDetails([]);
          }
        } catch (error) {
          console.error("Error fetching account details:", error);
          setAccountDetails([]);
        }
      }
    };

    fetchAccountDetails();
  }, [currentUser]);

  return (
    <div className='w-full'>
      <Frame>

      <div className='flex lg:pl-7 lg:pr-7 lg:pt-9 items-center justify-center'>
        <div className='bg-[whitesmoke]  w-[80%] pr-4 pl-4 pt-7 pb-7 h-auto rounded-xl mt-14 mb-14 text-xs'>
          <div className='bg-gray-300 container w-full h-[80px] rounded-lg flex items-center justify-center'>

          <h1 className='font-bold text-lg'>Your Account</h1>
          </div>
          <div className='p-4'>
            <p className='text-sm'>
              This is the list of all your accounts in our service. Here you can view the main details, track your activities, and{' '}
             <Link to={"/deposit"}> <span className='text-green-300 underline font-semibold cursor-pointer'>deposit into your account.</span></Link>
            </p>
            <div className='p-5'>
              <div className='flex gap-2 border-b-gray-400 bb bc-gray'>
                <li
                  className={`w-full p-2 text-xl flex cursor-pointer text-gray-400 ${changer === 0 ? 'text-green-400 underline text-xs' : ''}`}
                  onClick={() => setChanger(0)}
                >
                  <h3 className='text-xs'>Real</h3>
                </li>
                <li
                  className={`w-full p-2 text-xl flex cursor-pointer text-gray-400 ${changer === 1 ? 'text-green-400 underline text-xs' : ''}`}
                  onClick={() => setChanger(1)}
                >
                  <h3 className='text-xs'>Contests</h3>
                </li>
                <li
                  className={`w-full p-2 text-xl flex cursor-pointer text-gray-400 ${changer === 2 ? 'text-green-400 underline text-xs' : ''}`}
                  onClick={() => setChanger(2)}
                >
                  <h3 className='text-xs'>Demo</h3>
                </li>
                <li
                  className={`w-full p-2 text-xl flex cursor-pointer text-gray-400 ${changer === 3 ? 'text-green-400 underline text-xs' : ''}`}
                  onClick={() => setChanger(3)}
                >
                  <h3 className='text-xs'>Closed</h3>
                </li>
              </div>

              <AccountDetails
                accountType={0}
                changer={changer}
                message='You Do Not Have A Real Account Yet'
                details={accountDetails.find((account) => account.accountType === 'Real')}
              />
              <AccountDetails
                accountType={1}
                changer={changer}
                message='You Do Not Have A Contest Account Yet'
                details={accountDetails.find((account) => account.accountType === 'Contests')}
              />
              <AccountDetails
                accountType={2}
                changer={changer}
                message='You Do Not Have A Demo Account Yet'
                details={accountDetails.find((account) => account.accountType === 'Demo')}
              />
              <AccountDetails
                accountType={3}
                changer={changer}
                message='No closed accounts available.'
                details={accountDetails.find((account) => account.accountType === 'Closed')}
              />
            </div>
          </div>
        </div>
        </div>
      </Frame>
    </div>
  );
};

export default TradingAccount;
