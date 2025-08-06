export function saveUser(phoneNumber, password) {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[phoneNumber]) {
    return users[phoneNumber].password === password;
  }
  users[phoneNumber] = { password, habits: [] };
  localStorage.setItem('users', JSON.stringify(users));
  return true;
}

export function getHabits(phone) {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  return users[phone]?.habits;
}

export function saveHabits(phone, habits) {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[phone]) {
    users[phone].habits = habits;
    localStorage.setItem('users', JSON.stringify(users));
  }
}