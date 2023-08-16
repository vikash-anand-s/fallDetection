import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DoctorProfile() {
  const [doctorData, setDoctorData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDoctorData() {
      try {
        const response = await axios.get('/api/doctors/doctor-profile');
        setDoctorData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
        setLoading(false);
      }
    }

    fetchDoctorData();
  }, []);

  return (
    <div className="doctor-profile">
      <h2>Doctor Profile</h2>
      {loading ? (
        <p>Loading doctor profile...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {doctorData.name}</p>
          <p><strong>Email:</strong> {doctorData.email}</p>
          {/* Display other doctor information */}
        </div>
      )}
    </div>
  );
}

export default DoctorProfile;