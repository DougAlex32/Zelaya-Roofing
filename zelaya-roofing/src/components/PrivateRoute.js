// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = () => {
    // Example: Check if an auth token exists in localStorage
    const token = localStorage.getItem('authToken');
    return !!token; // Convert to boolean: true if token exists, false otherwise
  };

  return isAuthenticated() ? children : <Navigate to="/dashboard" />;
};

export default PrivateRoute;
