import React, { useState } from "react";
import logo from "../assets/NAV.png";
import { Link } from "react-router-dom";
import USD from "../assets/USD.jpeg";
import BTC from "../assets/BTC.jpeg";
import ETH from "../assets/ETH.jpeg";
import { useEffect } from "react";
import { db, useAuthState } from '../config/firebase'; // Adjust the import path as necessary
import { collection, getDoc, updateDoc, doc, getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import axios from "axios";
import { onAuthStateChanged } from 'firebase/auth';

const Donate = () => {
  const [selectedFrequency, setSelectedFrequency] = useState("One-Time-Gift");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(true);
  const [payment, setPayment] = useState("");
  const [showDialog3, setShowDialog3] = useState(false);
  const [showDialog4, setShowDialog4] = useState(false);
  const [userId , setUserId] =useState("")
  const [userNmae , setUserName] =useState()




  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Authenticated user:", user.uid);

            fetchData(user.uid);

            setUserId(user?.uid)
            setUserName(user?.displayName)
            
           
           
        } else {
            console.error('User is not authenticated');
        }

            
    });

    

    return () => unsubscribe();
}, []);



  const fetchData = async (userId) => {
    try {
      const demoAccountDocRef = doc(db, "users", userId, "accounts", "Real");
      const demoAccountDoc = await getDoc(demoAccountDocRef);
      
      if (demoAccountDoc.exists()) {
        console.log("Document data:", demoAccountDoc.data());
        return demoAccountDoc.data();
      } else {
        console.error("No such document found for user ID:", userId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching demo account data:", error);
      return null;
    }
  };
  const handleFrequencyClick = (frequency) => {
    setSelectedFrequency(frequency);
  };

  const handleCopyClick = (address) => {
    navigator.clipboard.writeText(address);
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleDonateClick = async () => {
    if (selectedAmount && selectedFrequency && payment) {
      const donationInfo = {
        amount: selectedAmount,
        frequency: selectedFrequency,
        paymentMethod: payment,
        userId: userId,
        userName: userNmae
      };

      // Send donation info to Formspree
      const url = "https://formspree.io/f/xyzgagdo"; // Replace with your Formspree endpoint
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationInfo),
      
      });
      console.log("hghgcgc", donationInfo)
      if (response.ok) {
        setShowDialog2(false);
        if (payment === "usdt") {
          setShowDialog(true);
        } else if (payment === "crypto") {
          setShowDialog3(true);
        } else if (payment === "crypto1") {
          setShowDialog4(true);
        }
      } else {
        alert("There was a problem submitting your donation. Please try again.");
      }
    } else {
      alert("Please select an amount, a frequency, and a payment method.");
    }
   


    

   
  };


  

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.trim() !== "") {
      setCustomAmount(value);
      setSelectedAmount(`${value}$`);
    } else if (value === "") {
      setCustomAmount("");
      setSelectedAmount("");
    }
  };

  return (
    <div className="absolute lg:w-[73%] h-screen bg-gradient-to-b from-white to-gray-100 overflow-y-auto">
      <div className="mt-5">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-2/3 md:w-1/3 mx-auto mb-8" />
        </Link>
      </div>

      <div className="p-6 md:p-16 grid grid-rows-3">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6">
          <button
            className={`w-full md:w-1/5 h-16 font-bold text-white bg-gray-600 rounded-lg transition-transform duration-300 transform hover:scale-105 ${
              selectedFrequency === "One-Time-Gift" ? "bg-green-500" : ""
            }`}
            onClick={() => handleFrequencyClick("One-Time-Gift")}
          >
            Deposit
          </button>
        </div>

        {selectedFrequency === "One-Time-Gift" && (
          <h1 className="text-blue-900 text-lg mb-4 font-semibold">
            Select any amount or input in the box.
          </h1>
        )}

        <div className="flex flex-wrap gap-4 mb-4">
          {["50$", "100$", "250$", "500$", "1000$", "2000$"].map((amount) => (
            <button
              key={amount}
              className={`h-12 w-20 bg-gray-600 text-white font-bold rounded-lg transition-transform duration-300 transform hover:scale-105 ${
                selectedAmount === amount ? "bg-green-500" : ""
              }`}
              onClick={() => handleAmountClick(amount)}
            >
              {amount}
            </button>
          ))}
          <input
            className="h-12 w-20 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            type="text"
            placeholder="Other Amounts"
            value={customAmount}
            onChange={handleCustomAmountChange}
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-1">Payment Method</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="usdt">Usdt</option>
            <option value="crypto">BTC</option>
            <option value="crypto1">Ethereum</option>
          </select>
        </div>
        
        <button
          type="button"
          onClick={handleDonateClick}
          className="w-full md:w-36 h-12 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
        >
          Deposit now
        </button>

        <br />
        <br />
      </div>

      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center lg:w-[73%]">
          <div className="bg-white p-5 rounded-lg text-center w-80 shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setShowDialog(false)}
            >
              &times;
            </button>
            <p>
              Thank you for your deposit of {selectedAmount} as a{" "}
              {selectedFrequency.replace("-", " ")};
              <br />
              <img src={USD} alt="USD" className="w-1/2 mx-auto my-2" />
              <p className="text-blue-600 text-sm break-all max-w-full">
                0x6B018D8fC09802df5eA09B64DE66f0bF2860bDBb
              </p>
              <p className="text-red-600 font-bold">
                NOTICE!!
                <br />
                Send as USDT
              </p>
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-500"
                onClick={() => handleCopyClick("0x6B018D8fC09802df5eA09B64DE66f0bF2860bDBb")}
              >
                Copy Wallet Address
              </button>
            </div>
          </div>
        </div>
      )}

      {showDialog3 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center lg:w-[73%]">
          <div className="bg-white p-5 rounded-lg text-center w-80 shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setShowDialog3(false)}
            >
              &times;
            </button>
            <p>
              Thank you for your deposit of {selectedAmount} as a{" "}
              {selectedFrequency.replace("-", " ")};
              <br />
              <img src={BTC} alt="BTC" className="w-1/2 mx-auto my-2" />
              <p className="text-blue-600 text-sm break-all max-w-full">
                bc1qulq5stzqurc0d8m7hmwgktygqxevk0dsr8rxg2
              </p>
              <p className="text-red-600 font-bold">
                NOTICE!!
                <br />
                Send as BTC
              </p>
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-500"
                onClick={() => handleCopyClick("bc1qulq5stzqurc0d8m7hmwgktygqxevk0dsr8rxg2")}
              >
                Copy Wallet Address
              </button>
            </div>
          </div>
        </div>
      )}

      {showDialog4 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center lg:w-[73%]">
          <div className="bg-white p-5 rounded-lg text-center w-80 shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setShowDialog4(false)}
            >
              &times;
            </button>
            <p>
              Thank you for your deposit of {selectedAmount} as a{" "}
              {selectedFrequency.replace("-", " ")};
              <br />
              <img src={ETH} alt="ETH" className="w-1/2 mx-auto my-2" />
              <p className="text-blue-600 text-sm break-all max-w-full">
                0x6B018D8fC09802df5eA09B64DE66f0bF2860bDBb
              </p>
              <p className="text-red-600 font-bold">
                NOTICE!!
                <br />
                Send as ETH
              </p>
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-500"
                onClick={() => handleCopyClick("0x6B018D8fC09802df5eA09B64DE66f0bF2860bDBb")}
              >
                Copy Wallet Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
