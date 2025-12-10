import { User } from '../types';

const USERS_KEY = 'transport_calculator_users';
const CURRENT_USER_KEY = 'transport_calculator_current_user';

// Initialize with default admin if no users exist
export const initAuth = () => {
  const users = localStorage.getItem(USERS_KEY);
  if (!users) {
    const defaultAdmin: User = {
      username: 'admin',
      password: 'admin123',
      role: 'admin'
    };
    localStorage.setItem(USERS_KEY, JSON.stringify([defaultAdmin]));
  }
};

export const login = (username: string, password: string): User | null => {
  try {
    const usersStr = localStorage.getItem(USERS_KEY);
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      // Don't store password in session
      const safeUser = { ...user, password: '' }; 
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
      return safeUser;
    }
    return null;
  } catch (e) {
    console.error('Login error:', e);
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem(CURRENT_USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};

// Admin Functions
export const getUsers = (): User[] => {
  const usersStr = localStorage.getItem(USERS_KEY);
  const users: User[] = usersStr ? JSON.parse(usersStr) : [];
  // Mask passwords
  return users.map(u => ({ ...u, password: '***' }));
};

export const addUser = (newUser: User): boolean => {
  try {
    const usersStr = localStorage.getItem(USERS_KEY);
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];
    
    if (users.find(u => u.username === newUser.username)) {
      return false; // User exists
    }
    
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  } catch (e) {
    console.error('Add user error:', e);
    return false;
  }
};

export const deleteUser = (username: string): boolean => {
  try {
    const usersStr = localStorage.getItem(USERS_KEY);
    let users: User[] = usersStr ? JSON.parse(usersStr) : [];
    
    // Prevent deleting the last admin or yourself (simplified: just prevent deleting 'admin')
    if (username === 'admin') return false;

    users = users.filter(u => u.username !== username);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  } catch (e) {
    console.error('Delete user error:', e);
    return false;
  }
};