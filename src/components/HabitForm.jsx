import { useState } from 'react';
import { getHabits, saveHabits } from '../utils/storage';
import toast from 'react-hot-toast';

function HabitForm({ userPhone, setHabits }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('#3B82F6');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category) {
      toast.error('Please fill out all fields');
      return;
    }
    const newHabit = {
      id: Date.now(),
      name,
      category,
      color,
      days: Array(7).fill(false), // Mon-Sun, false = Not Done
    };
    const updatedHabits = [...getHabits(userPhone), newHabit];
    saveHabits(userPhone, updatedHabits);
    setHabits(updatedHabits);
    setName('');
    setCategory('');
    setColor('#3B82F6');
    toast.success('Habit added!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Add New Habit</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Habit Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Exercise"
            className="mt-1 w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Fitness">Fitness</option>
            <option value="Study">Study</option>
            <option value="Health">Health</option>
            <option value="Work">Work</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-1 w-full h-10 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
        >
          Add Habit
        </button>
      </div>
    </form>
  );
}

export default HabitForm;