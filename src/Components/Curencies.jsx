import React, { useEffect, useState } from 'react';
import { useAuthState } from '../config/firebase'; // Adjust the import path as necessary
import logo from "/src/assets/NAV.png";

const Curencies = () => {
  const currentUser = useAuthState();
  const [balance, setBalance] = useState(10000); // Initial balance
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');

  // Fetch account details from Firestore on mount
  useEffect(() => {
    const fetchAccountDetails = async () => {
      if (currentUser) {
        try {
          const accountsRef = collection(db, "users", currentUser.uid, "accounts");
          const querySnapshot = await getDocs(accountsRef);
          if (!querySnapshot.empty) {
            const accountData = querySnapshot.docs[0].data();
            setBalance(Number(accountData.balance) || 0); // Ensure balance is a number
          }
        } catch (error) {
          console.error("Error fetching account details: ", error);
        }
      }
    };

    fetchAccountDetails();
  }, [currentUser]);

  // Fetch cryptocurrency data and simulate price updates
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        // Simulated initial data for 20 cryptocurrencies
        const cryptosData = [
          { name: 'BTC', price: 30000 },
          { name: 'ETH', price: 2000 },
          { name: 'LTC', price: 150 },
          { name: 'ADA', price: 1.2 },
          { name: 'DOT', price: 20 },
          { name: 'XRP', price: 0.5 },
          { name: 'LINK', price: 25 },
          { name: 'BCH', price: 500 },
          { name: 'DOGE', price: 0.3 },
          { name: 'SOL', price: 30 },
          { name: 'AVAX', price: 15 },
          { name: 'MATIC', price: 1.5 },
          { name: 'UNI', price: 20 },
          { name: 'ATOM', price: 10 },
          { name: 'FIL', price: 50 },
          { name: 'XTZ', price: 5 },
          { name: 'AAVE', price: 300 },
          { name: 'COMP', price: 400 },
          { name: 'ALGO', price: 1 },
          { name: 'VET', price: 0.1 },
        ];

        setCryptos(cryptosData);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptoData();

    // Simulate price updates every second
    const interval = setInterval(() => {
      setCryptos((prevCryptos) =>
        prevCryptos.map((crypto) => {
          const newPrice = crypto.price + (Math.random() - 0.5) * 100;
          return {
            ...crypto,
            previousPrice: crypto.price,
            price: newPrice,
          };
        })
      );
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex">
      <div className="bg-white h-auto px-3 w-96 pt-3 mr-2">
        <div className="flex">
          <img className="w-20 h-auto" src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold ml-2">NAV</h1>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">Your Balance</h2>
          <p className="text-lg">${balance.toFixed(2)}</p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">Cryptocurrencies</h2>
          <ul className="list-disc pl-5">
            {cryptos.map((crypto) => (
              <li
                key={crypto.name}
                className={`cursor-pointer ${crypto.price < crypto.previousPrice ? 'text-red-500' : ''}`}
                onClick={() => setSelectedCrypto(crypto.name)}
              >
                {crypto.name}: ${crypto.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div ref={chartContainer} className="flex-1 h-96"></div>
    </div>
  );
};

export default Curencies;
