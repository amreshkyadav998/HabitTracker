import { useState } from 'react';
import { saveHabits } from '../utils/storage';
import toast from 'react-hot-toast';

const categories = ['Fitness', 'Study', 'Health', 'Work', 'Hobby'];

function HabitForm({ phone, habits, setHabits }) {
  const [newHabit, setNewHabit] = useState({
    name: '',
    category: categories[0],
    color: '#4B5EAA'
  });

  const addHabit = (e) => {
    e.preventDefault();
    if (!newHabit.name) return;
    
    const habit = {
      ...newHabit,
      id: Date.now(),
      days: Array(7).fill(false)
    };
    
    const updatedHabits = [...habits, habit];
    saveHabits(phone, updatedHabits);
    setHabits(updatedHabits);
    setNewHabit({ name: '', category: categories[0], color: '#4B5EAA' });
    toast.success('Habit added successfully!');
  };

  return (
    <form onSubmit={addHabit} className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Habit Name
          </label>
          <input
            type="text"
            value={newHabit.name}
            onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-md focus:border-indigo-500 focus:ring-indigo-500 p-2"
            placeholder="e.g., Exercise"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select
            value={newHabit.category}
            onChange={(e) => setNewHabit({ ...newHabit, category: e.target.value })}
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-md focus:border-indigo-500 focus:ring-indigo-500 p-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Color
          </label>
          <input
            type="color"
            value={newHabit.color}
            onChange={(e) => setNewHabit({ ...newHabit, color: e.target.value })}
            className="mt-1 block w-full h-10 rounded-lg"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
      >
        Add Habit
      </button>
    </form>
  );
}

export default HabitForm;