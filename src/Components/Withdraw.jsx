import React, { useState, useEffect  } from 'react';
import Frame from './Frame';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuthState } from '../config/firebase'; // Import useAuthState

const Withdrawal = ({ accountBalance = 0 }) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState(''); // New state for account number
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
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


  const handleAmountChange = (e) => {
    setWithdrawalAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a withdrawal process
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage('Withdrawal request submitted successfully!');
    }, 2000);
  };

  return (
    <div className='w-full'>
      <Frame>
        <div className="container mx-auto p-10">
          <div className=' bg-white w-full pt-9 rounded-lg pb-10'>
          <div className='  flex items-center justify-center'><h1 className="text-lg  flex items-center justify-center font-semibold mb-4 text-center w-[90%] h-20 rounded-md bg-gray-300">Withdraw Funds</h1></div>
          <div className="bg-white p-4 rounded shadow-md max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Account Balance</label>
              <p className="text-xl text-green-600">
                ${ accountDetails[2]?.balance.toFixed() }
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="withdrawalAmount">
                  Withdrawal Amount
                </label>
                <input
                  type="number"
                  id="withdrawalAmount"
                  value={withdrawalAmount}
                  onChange={handleAmountChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter amount to withdraw"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="accountNumber">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  value={accountNumber}
                  onChange={handleAccountNumberChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter your account number"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                >
                  <option value="" disabled>Select a payment method</option>
                  <option value="bank_transfer">Bank Transfer</option>
                  <option value="paypal">PayPal</option>
                  <option value="credit_card">Credit Card</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Withdrawal'}
              </button>
            </form>

            {message && <p className="mt-4 text-green-600">{message}</p>}
          </div>
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default Withdrawal;
