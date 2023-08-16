import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SupportList() {
  const [supportRequests, setSupportRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSupportRequests() {
      try {
        const response = await axios.get('/api/users/support-requests');
        setSupportRequests(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching support requests:', error);
        setLoading(false);
      }
    }

    fetchSupportRequests();
  }, []);

  return (
    <div className="support-list">
      <h2>Support Requests</h2>
      {loading ? (
        <p>Loading support requests...</p>
      ) : (
        <ul>
          {supportRequests.map((request) => (
            <li key={request.id}>
              <strong>Date:</strong> {request.date}<br />
              <strong>Message:</strong> {request.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SupportList;