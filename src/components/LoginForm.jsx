import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../utils/storage';
import toast from 'react-hot-toast';

function LoginForm({ setIsAuthenticated, setPhone }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    
    if (!/^\d{4}$/.test(password)) {
      setError('Please enter a valid 4-digit password');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    const isNewUser = !users[phoneNumber];

    if (isNewUser || users[phoneNumber].password === password) {
      saveUser(phoneNumber, password);
      localStorage.setItem('currentUser', phoneNumber);
      setIsAuthenticated(true);
      setPhone(phoneNumber);
      toast.success(isNewUser ? 'Signup successful!' : 'Login successful!');
      navigate('/dashboard');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-300">
          Habit Tracker
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-md focus:border-indigo-500 focus:ring-indigo-500 p-2"
              placeholder="Enter 10-digit phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-md focus:border-indigo-500 focus:ring-indigo-500 p-2"
              placeholder="Enter 4-digit password"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;