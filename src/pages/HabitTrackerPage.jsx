import { useState, useEffect } from 'react';
import HabitForm from '../components/HabitForm';
import HabitGrid from '../components/HabitGrid';
import { getHabits, saveHabits } from '../utils/storage';
import toast from 'react-hot-toast';

function HabitTrackerPage({ phone, setIsAuthenticated }) {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    setHabits(getHabits(phone) || []);
  }, [phone]);

  const deleteHabit = (habitId) => {
    const updatedHabits = habits.filter(habit => habit.id !== habitId);
    saveHabits(phone, updatedHabits);
    setHabits(updatedHabits);
    toast.success('Habit deleted successfully!');
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Habits</h1>
      <HabitForm phone={phone} habits={habits} setHabits={setHabits} />
      <div className="space-y-6 mt-6">
        {habits.map(habit => (
          <div key={habit.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl transform hover:scale-102 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span 
                  className="w-5 h-5 rounded-full mr-3" 
                  style={{ backgroundColor: habit.color }}
                ></span>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {habit.name} ({habit.category})
                </h2>
              </div>
              <button
                onClick={() => deleteHabit(habit.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg transition-colors duration-300"
              >
                Delete
              </button>
            </div>
            <HabitGrid habit={habit} phone={phone} habits={habits} setHabits={setHabits} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitTrackerPage;