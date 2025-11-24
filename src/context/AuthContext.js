import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const users = await AsyncStorage.getItem('registeredUsers');
      if (users) {
        setRegisteredUsers(JSON.parse(users));
      }
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  const saveUsers = async (users) => {
    try {
      await AsyncStorage.setItem('registeredUsers', JSON.stringify(users));
    } catch (error) {
      console.error('Erro ao salvar usuários:', error);
    }
  };

  const login = (userData) => {
    const existingUser = registeredUsers.find(
      u => u.email === userData.email && u.password === userData.password
    );
    
    if (existingUser) {
      setUser(existingUser);
      setIsLoggedIn(true);
      return { success: true };
    } else {
      return { success: false, message: 'Email ou senha incorretos' };
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const register = (userData) => {
    const emailExists = registeredUsers.some(u => u.email === userData.email);
    
    if (emailExists) {
      return { success: false, message: 'Este email já está cadastrado' };
    }
    
    const newUser = { ...userData, id: Date.now().toString() };
    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    saveUsers(updatedUsers);
    setUser(newUser);
    setIsLoggedIn(true);
    return { success: true };
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};