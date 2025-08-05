export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUserByPhone = (phone) => {
  const users = getUsers();
  return users.find((u) => u.phone === phone);
};

export const getHabits = (phone) => {
  const habits = localStorage.getItem(`habits_${phone}`);
  return habits ? JSON.parse(habits) : [];
};

export const saveHabits = (phone, habits) => {
  localStorage.setItem(`habits_${phone}`, JSON.stringify(habits));
};