import React, { useState } from 'react';
import { db, useAuthState } from '../config/firebase'; // Adjust the import path as necessary
import { doc, setDoc } from "firebase/firestore";
import Frame from './Frame';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    accountType: '',
    saver: '',
    balance: 0
  });
  const [currentUser] = useAuthState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      if (formData.accountType === 'Real' && formData.balance !== 0) {
        alert("Real accounts cannot be funded from this page. Balance must be 0.");
        return;
      }

      const accountDocRef = doc(db, "users", currentUser.uid, "accounts", formData.accountType);
      await setDoc(accountDocRef, {
        ...formData,
        equity: formData.balance // Set equity equal to balance
      });
      alert("Account details added successfully!");
      setFormData({
        accountType: '',
        saver: '',
        balance: 0,
      });
    } else {
      alert("You must be logged in to add account details.");
    }
  };

  return (
    <div className='w-full'>
      <Frame>
        <div className='p-11 w-full'>
          <div className='w-full '>
            <div className='  flex items-center justify-center'><h1 className="text-lg  flex items-center justify-center font-semibold mb-4 text-center w-[90%] h-20 rounded-md bg-gray-300">Create Demo/Contest Account</h1></div>
           <div className=' flex items-center justify-center'>
           <form onSubmit={handleSubmit} className='h-[400px] rounded-lg  lg:w-[80%] bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4'>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='accountType'>
                  Account Type
                </label>
                <select
                  name='accountType'
                  value={formData.accountType}
                  onChange={handleInputChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                >
                  <option value=''>Select account type</option>
                  <option value='Real'>Real</option>
                  <option value='Contests'>Contests</option>
                  <option value='Demo'>Demo</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='saver'>
                  Saver
                </label>
                <input
                  type='text'
                  name='saver'
                  value={formData.saver}
                  onChange={handleInputChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='Enter saver'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='balance'>
                  Balance
                </label>
                <input
                  type='number'
                  name='balance'
                  value={formData.balance}
                  onChange={handleInputChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='Enter balance (Only for Demo/Contest Accounts)'
                  disabled={formData.accountType === 'Real'} // Disable input if accountType is Real
                />
              </div>
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='bg-green-500 rounded-xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Add Account
                </button>
              </div>
            </form>
           </div>
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default CreateAccount;
