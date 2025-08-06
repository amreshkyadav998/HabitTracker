import { useState } from 'react';
import { saveHabits } from '../utils/storage';
import toast from 'react-hot-toast';

function HabitGrid({ habit, phone, habits, setHabits }) {
  const toggleDay = (dayIndex) => {
    const updatedHabits = habits.map(h => 
      h.id === habit.id 
        ? { ...h, days: h.days.map((done, i) => i === dayIndex ? !done : done) }
        : h
    );
    saveHabits(phone, updatedHabits);
    setHabits(updatedHabits);
    toast.success('Habit status updated!');
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="grid grid-cols-7 gap-3 mt-4">
      {days.map((day, index) => (
        <button
          key={index}
          onClick={() => toggleDay(index)}
          className={`p-3 rounded-lg text-center font-medium ${
            habit.days[index] 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
          } transition-colors duration-300 shadow-md`}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

export default HabitGrid;