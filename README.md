Habit Tracker
A simple, user-friendly web application for tracking personal habits, built as a frontend-only project. Users can sign up or log in with a phone number and password, create habits with names, categories, and colors, and track their completion over a 7-day period. Data is stored in localStorage for persistence, with each user’s habits kept separate.
Features

Login/Signup Page:
Users enter a 10-digit phone number and a 4-digit password (OTP-style).
Existing users log in if the password matches; new users are registered.
Input validation with error messages for invalid phone numbers or passwords.
Redirects to the dashboard upon successful login/signup.


Habit Tracker Dashboard:
Add habits with a name (e.g., "Exercise"), category (e.g., Fitness), and color (HEX or color picker).
View a 7-day toggle grid (Monday–Sunday) to mark habits as "Done" or "Not Done".
Habits are user-specific, stored in localStorage, and persist across sessions.
Responsive UI with a blue-and-white color scheme, powered by Tailwind CSS.


Logout: Clear user session and redirect to the login page.

Note: Passwords are stored in plain text in localStorage, as this is not a real login system (per assignment requirements).
Tech Stack

React: Frontend library for building reusable UI components.
Vite: Fast build tool and development server.
Tailwind CSS: Utility-first CSS framework for styling.
React Router: Handles client-side routing for navigation.
React Hot Toast: Displays user-friendly toast notifications.
localStorage: Persists user and habit data in the browser.

Setup Instructions

Prerequisites:

Node.js (v16 or higher) installed.
A modern browser (e.g., Chrome, Firefox).
A code editor (e.g., VS Code).


Clone the Repository:
git clone <repository-url>
cd habit-tracker


Install Dependencies:
npm install

This installs react, react-dom, react-router-dom, react-hot-toast, tailwindcss, postcss, and autoprefixer.

Run the Development Server:
npm run dev

Open http://localhost:5173 in your browser.

Build for Production (optional):
npm run build

The output is in the dist/ folder, ready for deployment.


File Structure
![Uploading image.png…]()


Usage

Login/Signup:

Navigate to http://localhost:5173/login.
Enter a 10-digit phone number (e.g., 1234567890) and a 4-digit password (e.g., 1234).
If the phone number exists, the password must match to log in. Otherwise, a new user is created.
On success, you’re redirected to /dashboard.


Habit Tracking:

On the dashboard, add a habit by entering a name, selecting a category (e.g., Fitness, Study), and choosing a color.
View habits in a 7-day grid (Monday–Sunday). Click a day to toggle between "Done" (blue) and "Not Done" (gray).
Habits are saved in localStorage under habits_<phone> and persist across sessions.


Logout:

Click the "Logout" button in the header to clear the session and return to /login.



Testing

Login/Signup:

Test valid/invalid inputs (e.g., 9-digit phone, 5-digit password) to verify error toasts.
Log in with an existing phone number and wrong password to check error handling.
Sign up with a new phone number and verify redirection to /dashboard.


Habit Tracking:

Add multiple habits with different categories and colors.
Toggle days in the grid and refresh to confirm persistence.
Log out and log in with a different phone number to ensure habits are user-specific.


Refresh Behavior:

After login, refresh to confirm redirection to /dashboard.
After logout, refresh to confirm redirection to /login.


Edge Cases:

Clear localStorage and verify redirect to /login.
Navigate directly to /dashboard without logging in to ensure redirect to /login.



Notes

Security: Passwords are stored in plain text in localStorage, as specified in the assignment. In a production app, use secure authentication (e.g., JWT, encryption).
Enhancements: Potential additions include habit deletion, editing, or analytics (e.g., completion streaks).
Deployment: Deploy the dist/ folder to a static hosting service like Netlify or Vercel.

For issues or contributions, please open a pull request or contact the maintainer.
