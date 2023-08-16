import React from 'react';
import { Link } from 'react-router-dom';

function UserDashboard() {
  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <div className="dashboard-options">
        <Link to="/user/profile" className="btn btn-primary">Profile</Link>
        <Link to="/user/request-support" className="btn btn-primary">Request Support</Link>
        <Link to="/user/support-list" className="btn btn-primary">Support Requests</Link>
      </div>
    </div>
  );
}

export default UserDashboard;
