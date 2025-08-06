Here’s a **clean, professional, and well-structured `README.md`** in proper **documentation format** for your **Habit Tracker** project:

---

# 📱 Habit Tracker

A **web-based habit tracking application** built with **React** and **Tailwind CSS**, allowing users to track, manage, and visualize their daily habits. It features simple authentication, a responsive UI, and persistent local storage.

---

## 📋 Overview

The Habit Tracker helps users manage their daily routines by allowing them to:

* Log in or sign up with a phone number and password
* Create and categorize habits with color-coded tags
* Mark habits as completed throughout the week
* Toggle between light and dark themes *(feature under development)*
* Enjoy a seamless experience on both desktop and mobile devices

---

## ✨ Features

* 🔐 **Authentication**
  Login/Signup using a 10-digit phone number and a 4-digit password.

* 📌 **Habit Creation & Management**

  * Add habits with customizable names, categories (Fitness, Study, Health, Work, Hobby), and colors
  * View all habits on the dashboard
  * Mark habit completion per day
  * Delete unwanted habits

* 🌗 **Dark Mode Support**
  Toggle between **light** and **dark** themes *(currently under development)*

* 💾 **Local Storage Persistence**
  No backend required—user data and habits are saved locally.

* 📱 **Responsive Design**
  Works seamlessly across desktops, tablets, and mobile devices.

---

## ⚙️ Prerequisites

* [Node.js](https://nodejs.org/) (v14.x or later)
* npm (comes with Node.js)

---

## 🛠️ Installation

Follow the steps below to get started:

```bash
# 1. Clone the Repository
git clone https://github.com/amreshkyadav998/HabitTracker.git
cd habit-tracker

# 2. Install Dependencies
npm install

# 3. Initialize Tailwind CSS
npx tailwindcss init -p

# 4. Run the Development Server
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Usage Guide

### 🔑 Login / Signup

* Enter a **10-digit phone number** and **4-digit password**
* If you're new, it signs you up
* If already registered, it logs you in
* Feedback provided via toast: `"Signup successful!"` or `"Login successful!"`

### 🧭 Dashboard

* View all created habits
* Add a new habit (name, category, color)
* Track daily progress with checkboxes
* Delete habits with the “Delete” button

### 🌙 Theme Toggle

* Click the **Sun/Moon icon** in the header to switch between **light** and **dark** modes
  *Note: This feature is currently under development*

### 🚪 Logout

* Click the **"Logout"** button in the header to sign out and return to the login page

---

## 🗂️ Project Structure

```
habit-tracker/
├── src/
│   ├── App.jsx              # Main application with routing
│   ├── main.jsx             # Entry point for React
│   ├── index.css            # Global styles with Tailwind
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── HabitForm.jsx
│   │   └── HabitGrid.jsx
│   ├── pages/               # Page components
│   │   ├── LoginPage.jsx
│   │   └── HabitTrackerPage.jsx
│   └── utils/
│       └── storage.js       # LocalStorage helper functions
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
├── package.json             # Project metadata and dependencies
```

---

## 📦 Dependencies

| Package                                  | Purpose                   |
| ---------------------------------------- | ------------------------- |
| `react`, `react-dom`                     | Core React UI             |
| `react-router-dom`                       | Routing support           |
| `@heroicons/react`                       | Icon library              |
| `react-hot-toast`                        | Toast notifications       |
| `tailwindcss`, `postcss`, `autoprefixer` | Styling & utility classes |

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature-branch

# 3. Make changes and commit
git commit -m "Add new feature"

# 4. Push to your branch
git push origin feature-branch

# 5. Open a Pull Request
```

---

