import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get('/api/users/user-profile');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading user profile...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
  );
}

export default UserProfile;