import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

// Check if user is authenticated
const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;