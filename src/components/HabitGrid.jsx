import { getHabits, saveHabits } from '../utils/storage';
import toast from 'react-hot-toast';

function HabitGrid({ userPhone, habits, setHabits }) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleDay = (habitId, dayIndex) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        const newDays = [...habit.days];
        newDays[dayIndex] = !newDays[dayIndex];
        return { ...habit, days: newDays };
      }
      return habit;
    });
    saveHabits(userPhone, updatedHabits);
    setHabits(updatedHabits);
    toast.success('Habit status updated!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {habits.length === 0 ? (
        <p className="text-center text-gray-500">No habits added yet.</p>
      ) : (
        habits.map((habit) => (
          <div key={habit.id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <span
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: habit.color }}
              ></span>
              <h3 className="text-lg font-semibold">
                {habit.name} ({habit.category})
              </h3>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => toggleDay(habit.id, index)}
                  className={`p-2 rounded-md text-center ${
                    habit.days[index]
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  } hover:opacity-80 transition`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default HabitGrid;