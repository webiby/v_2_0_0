import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from '../../Sections/AuthSections/LoginForm';

function Login() {
  const storedToken = localStorage.getItem('token') || '';
  const [token, setToken] = useState(storedToken);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      localStorage.setItem('token', token);
    } else {
      setLoggedIn(false);
    }
  }, [token]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });
      setToken(response.data.token);
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
    }
  };

  const handleGoogleLogin = async () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };
  
  const handleFacebookLogin = async () => {
    window.location.href = 'http://localhost:3000/auth/facebook';
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
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
          <LoginForm setToken={setToken} />
        </div>
      )}
    </div>
  );
}

export default Login;
