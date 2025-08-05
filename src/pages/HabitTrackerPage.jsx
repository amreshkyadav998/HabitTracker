import { useState, useEffect } from 'react';
import HabitForm from '../components/HabitForm';
import HabitGrid from '../components/HabitGrid';
import { getHabits } from '../utils/storage';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

function HabitTrackerPage() {
  const { user } = useAuth();
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (user?.phone) {
      setHabits(getHabits(user.phone));
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="py-8 bg-secondary dark:bg-darkBg">
      <HabitForm userPhone={user.phone} setHabits={setHabits} />
      <HabitGrid userPhone={user.phone} habits={habits} setHabits={setHabits} />
    </div>
  );
}

export default HabitTrackerPage;