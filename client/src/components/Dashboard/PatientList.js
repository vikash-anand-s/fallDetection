import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

function PatientList() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const snapshot = await firebase.firestore().collection('users').get();
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setItems(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h2>List of Items from Firestore</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

export default PatientList;
