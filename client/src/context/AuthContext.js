// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Implement login logic
    signInWithEmailAndPassword(auth, email, password).then(console.log("Signed in"));
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement logout logic
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}