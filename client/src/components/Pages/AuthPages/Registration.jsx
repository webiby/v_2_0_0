import React, { useState } from 'react';
import RegistrationForm from '../../Sections/AuthSections/RegistrationForm';

function Registration() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(import.meta.env.REACT_APP_JWT_SECRET_KEY || '');

  const handleLogout = () => {
    setLoggedIn(false);
    setToken('');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome, you are logged in!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <RegistrationForm setLoggedIn={setLoggedIn} setToken={setToken} />
        </div>
      )}
    </div>
  );
}

export default Registration;
