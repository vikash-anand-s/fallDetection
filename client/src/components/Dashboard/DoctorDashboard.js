import React from 'react';
import { Link } from 'react-router-dom';

function DoctorDashboard() {
  return (
    <div className="dashboard">
      <h2>Doctor Dashboard</h2>
      <div className="dashboard-options">
        <Link to="/doctor/profile" className="btn btn-primary">Profile</Link>
        <Link to="/doctor/patient-list" className="btn btn-primary">Patient List</Link>
        <Link to="/doctor/readings" className="btn btn-primary">Patient Readings</Link>
      </div>
    </div>
  );
}

export default DoctorDashboard;