import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase'; // Adjust the import path as necessary
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from '../config/firebase'; // Import useAuthState

const AccountDetails = ({ accountType, changer, message, details }) => {
  return (
    <div className=''>
      {changer === accountType ? (
        details ? (
          <div className='mt-2'>
            <div className='flex justify-between border-b pb-2'>
              <span>Account Number:</span>
              <span>{details.accountNumber}</span>
            </div>
            <div className='flex justify-between border-b pb-2'>
              <span>Account Balance:</span>
              <span>${details.balance}</span>
            </div>
            <div className='flex justify-between border-b pb-2'>
              <span>Equity:</span>
              <span>{details.equity}</span>
            </div>
            <div className='flex justify-between border-b pb-2'>
              <span>Leverage:</span>
              <span>{details.leverage}</span>
            </div>
          </div>
        ) : (
          <div className='mt-2'>
            <p>{message}</p>
          </div>
        )
      ) : null}
    </div>
  );
};

export default AccountDetails;
