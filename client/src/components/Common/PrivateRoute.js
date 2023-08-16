// PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PrivateRoute({ path, ...props }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Route path={path} {...props} /> : <Navigate to="/login" />;
}

export default PrivateRoute;