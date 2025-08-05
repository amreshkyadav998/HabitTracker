import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, saveUser, getUserByPhone } from '../utils/storage';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        localStorage.removeItem('currentUser'); // Clear invalid data
      } finally {
        setIsLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const login = (phone, password) => {
    if (!/^\d{10}$/.test(phone)) {
      toast.error('Phone number must be 10 digits');
      return false;
    }
    if (!/^\d{4}$/.test(password)) {
      toast.error('Password must be 4 digits');
      return false;
    }

    const existingUser = getUserByPhone(phone);
    if (existingUser) {
      if (existingUser.password === password) {
        const userData = { phone };
        setUser(userData);
        localStorage.setItem('currentUser', JSON.stringify(userData));
        toast.success('Login successful!');
        navigate('/dashboard', { replace: true });
        return true;
      } else {
        toast.error('Incorrect password');
        return false;
      }
    } else {
      const userData = { phone, password };
      saveUser(userData);
      setUser({ phone });
      localStorage.setItem('currentUser', JSON.stringify({ phone }));
      toast.success('Signup successful!');
      navigate('/dashboard', { replace: true });
      return true;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login', { replace: true });
    toast.success('Logged out successfully!');
  };

  return { user, login, logout, isLoading };
};