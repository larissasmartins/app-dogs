import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

// if the user isn't logged in, he will be redirected to the login page
const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);

  // avoiding to display the login page before the account page when the user is logged in
  if (login == true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
