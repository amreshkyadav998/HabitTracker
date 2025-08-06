import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function Header({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <h1 className="text-3xl font-bold">Habit Tracker</h1>
      <div className="flex items-center space-x-4">
        {isAuthenticated && (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Logout
          </button>
        )}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white text-indigo-600 hover:bg-gray-200 transition-colors duration-300"
        >
          {isDark ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );
}

export default Header;