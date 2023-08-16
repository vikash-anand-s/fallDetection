// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserDashboard from './components/Dashboard/UserDashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import RequestSupport from './components/Support/RequestSupport';
import SupportList from './components/Support/SupportList';
import UserProfile from './components/Profile/UserProfile';
import DoctorProfile from './components/Profile/DoctorProfile';
import './App.css';

function PrivateRoute({ path, element }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" replace={true} />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user/dashboard"
            element={<PrivateRoute element={<UserDashboard />} />}
          />
          <Route
            path="/doctor/dashboard"
            element={<PrivateRoute element={<DoctorDashboard />} />}
          />
          <Route
            path="/user/request-support"
            element={<PrivateRoute element={<RequestSupport />} />}
          />
          <Route
            path="/user/support-list"
            element={<PrivateRoute element={<SupportList />} />}
          />
          <Route
            path="/user/profile"
            element={<PrivateRoute element={<UserProfile />} />}
          />
          <Route
            path="/doctor/profile"
            element={<PrivateRoute element={<DoctorProfile />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
