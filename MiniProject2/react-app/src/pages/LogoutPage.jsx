import React from 'react';
import { useUserContext } from '../context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

function LogoutPage() {
  const { handleUpdateUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    handleUpdateUser({}); 

    navigate('/login');
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutPage;
