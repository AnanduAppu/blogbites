import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return isLoggedIn ? <Route {...rest} element={<Component />} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;