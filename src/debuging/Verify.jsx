import React, { useEffect } from 'react';
import { getDoc, doc } from "firebase/firestore";
import { db, useAuthState } from '../config/firebase'; // Adjust the import path as necessary

const VerifyData = () => {
  const [currentUser] = useAuthState();

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const accountDocRef = doc(db, "users", currentUser.uid, "accountBalance", "currentBalance");
          const accountDoc = await getDoc(accountDocRef);
          if (accountDoc.exists()) {
            console.log("Document data:", accountDoc.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document: ", error);
        }
      }
    };
    

    
const fetchDemoAccountDetails = async () => {
  try {
    if (!currentUser) {
      throw new Error("User is not authenticated");
    }

    const accountDocRef = doc(db, "users", currentUser.uid, "accounts", "main");
    const accountDocSnap = await getDoc(accountDocRef);

    if (accountDocSnap.exists()) {
      const accountData = accountDocSnap.data();
      // Process accountData, e.g., set state with balance, etc.
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching Demo account details: ", error);
  }
};

fetchDemoAccountDetails()
    fetchData();
  }, [currentUser]);

  return null;







};

export default VerifyData;
