import { useState } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [phone, setPhone] = useState('');

  return { isAuthenticated, phone, setIsAuthenticated, setPhone };
}