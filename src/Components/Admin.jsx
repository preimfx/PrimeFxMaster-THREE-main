import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase'; // Adjust the path as needed
import { collection, getDocs } from "firebase/firestore";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const querySnapshot = await getDocs(usersCollection);

        // Process the QuerySnapshot to extract documents
        const usersList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() // Extract the document data
        }));

        console.log("Fetched users:", usersList); // Log fetched users
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users. Check the console for details.");
      }
    };

    fetchUsers();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>All Users:</h3>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>{JSON.stringify(user)}</li>
          ))
        ) : (
          <p>No users available.</p>
        )}
      </ul>
    </div>
  );
};


export default Admin;
