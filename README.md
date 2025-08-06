Habit Tracker
Overview
The Habit Tracker is a web-based application built with React and Tailwind CSS, designed to help users manage and track their daily habits. Users can log in or sign up with a phone number and password, create new habits with categories and colors, mark completion for each day of the week, and delete habits as needed. The application supports light and dark themes, with a responsive design and local storage for persistence.
Features

User authentication (login/signup) with a 10-digit phone number and 4-digit password.
Create and manage habits with customizable categories (Fitness, Study, Health, Work, Hobby) and colors.
Track habit completion for each day of the week.
Delete individual habits.
Toggle between light and dark themes.
Responsive design for desktop and mobile devices.
Local storage to save user data and habits.

Prerequisites

Node.js (v14.x or later)
npm (comes with Node.js)

Installation
1. Clone the Repository
git clone https://github.com/yourusername/habit-tracker.git
cd habit-tracker

2. Install Dependencies
npm install

3. Initialize Tailwind CSS
npx tailwindcss init -p

4. Run the Development Server
npm run dev

5. Access the Application
Open your browser and navigate to http://localhost:5173.
Usage

Login/Signup:

Enter a 10-digit phone number and a 4-digit password.
For new users, it will register as a signup; for existing users, it will log in.
Success messages will indicate "Signup successful!" or "Login successful!".


Dashboard:

After logging in, view the dashboard to see your habits.
Add new habits using the form with a name, category, and color.
Toggle daily completion using the grid buttons.
Delete habits using the "Delete" button on each habit card.


Theme Toggle:

Click the Sun/Moon icon in the header to switch between light and dark modes (Currently not working (working on it)).


Logout:

Click the "Logout" button in the header to sign out and return to the login page.



File Structure

src/App.jsx: Main application component with routing.
src/components/: Reusable components (e.g., Header.jsx, HabitForm.jsx, HabitGrid.jsx).
src/pages/: Page components (e.g., LoginPage.jsx, HabitTrackerPage.jsx).
src/utils/storage.js: Functions for managing local storage.
src/index.css: Global CSS with Tailwind directives.
src/main.jsx: Entry point for React rendering.
vite.config.js: Vite configuration.
package.json: Project dependencies and scripts.
tailwind.config.js: Tailwind CSS configuration.
index.html: HTML template.

Dependencies

react, react-dom: For building the UI.
@heroicons/react: For icons.
react-router-dom: For routing.
react-hot-toast: For toast notifications.
tailwindcss, postcss, autoprefixer: For styling.

Contributing

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m "Add new feature").
Push to the branch (git push origin feature-branch).
Open a pull request.
