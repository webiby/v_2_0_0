import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';


function LoginForm() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    // Basic client-side validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        // Handle successful login, e.g., redirect to dashboard
        const redirectUrl = data.redirectUrl;
        // Use React Router or similar to navigate to the appropriate dashboard
        navigate(redirectUrl);
      } else {
        setError('Invalid credentials. Please try again.');
        console.error('Authentication failed:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className='md:flex items-center justify-center bg-gradient-to-r from-rose-500 via-purple-500 to-rose-500 min-h-screen'>
      <div className="flex items-center justify-center md:w-1/2">
        <div className="bg-white bg-opacity-25 border-r-purple-300 border-t-purple-400 border-t-2 border-r-2 border-b-rose-300 border-l-rose-400 border-b-2 border-l-2 backdrop-filter backdrop-blur-lg rounded-md p-10 m-4 shadow-2xl">
          <div className="text-2xl mb-4 font-extrabold text-purple-700">Login</div>
          <hr className='text-purple-700'/>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block font-extralight text-purple-700 mb-2">
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-300 py-2 px-3 rounded-full"
                placeholder="Enter your email address"
                autoComplete="username"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-extralight text-purple-700 mb-2">
                Password
              </label>
              <div className='flex relative items-center'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 py-2 px-3 rounded-full"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-0 p-2 m-1 text-purple-700 hover:bg-purple-200 rounded-full"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {error && (
              <div className="text-red-900 px-8 py-2 bg-red-300 rounded-full">{error}</div>
            )}
            <div className='space-y-4'>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-4 mt-4 bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 border-2"
              >
                Continue
              </button>
              <h5 className='font-extralight py-2 text-purple-700'>
                <div className='flex items-center'><span className='h-[1px] bg-purple-700 w-full mx-2'></span>OR<span className='h-[1px] bg-purple-700 w-full mx-2'></span></div>
              </h5>
              <button type="button" className="w-full flex items-center justify-start gap-4 bg-rose-500 text-white font-bold py-0.5 px-4 rounded-full hover:bg-rose-600 border-2 group" onClick={() => window.location.href = "http://localhost:3000/api/login/google"}>
                <FaGoogle className='text-3xl bg-rose-600 rounded-full p-1 group-hover:bg-rose-700 border-1 border-rose-400'/>
                Login with Google
              </button>
              <button type="button" className="w-full flex items-center justify-start gap-4 bg-indigo-700 text-white font-bold py-0.5 px-4 rounded-full hover:bg-indigo-800 border-2 group" onClick={() => window.location.href = "http://localhost:3000/api/login/facebook"}>
                <FaFacebookF className='text-3xl bg-indigo-800 rounded-full p-1 group-hover:bg-indigo-900 border-1 border-indigo-600'/>
                Login with Facebook
              </button>
            </div>
          </form> 
        </div>
      </div>
      <div className="items-center justify-center md:w-1/2 p-16">
        <div className='text-purple-50 mb-20 opacity-50'>
          <div className='font-extrabold text-2xl'>WEBIBY</div>
          <div className='font-extralight text-xs'>Websites | Apps</div>
        </div>
        <div className='md:text-3xl text-2xl font-extrabold text-purple-900 flex items-center justify-center'>
          <div>Don't have an account</div>
          <div className='md:text-9xl text-5xl text-purple-50 mx-2'>?</div>
        </div>
        <div className='bg-slate-50 h-1 rounded-full mb-16 w-full'></div>
        <h4 className='font-thin text-white font-sans mb-4'>Create your <span className='font-bold'>REPO</span> easily!</h4>
        <button className='bg-purple-500 px-4 py-2 rounded-full text-white hover:bg-purple-600 border-2 uppercase font-bold'>Sign up</button>
      </div>
    </div>
  );
}

export default LoginForm;