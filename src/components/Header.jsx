import { useAuth } from '../hooks/useAuth';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Habit Tracker</h1>
        {user && (
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.phone}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;