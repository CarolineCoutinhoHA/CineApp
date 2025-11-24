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
  const [isLoading, setIsLoading] = useState(true);

  // Carregar dados na inicialização
  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    try {
      const stored = await AsyncStorage.getItem('cineapp_users');
      if (stored) {
        const users = JSON.parse(stored);
        setRegisteredUsers(users);
      }
    } catch (error) {
      console.log('Erro ao carregar:', error);
    }
    setIsLoading(false);
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

  const register = async (userData) => {
    const emailExists = registeredUsers.some(u => u.email === userData.email);
    
    if (emailExists) {
      return { success: false, message: 'Este email já está cadastrado' };
    }
    
    const newUser = { ...userData, id: Date.now().toString() };
    const updatedUsers = [...registeredUsers, newUser];
    
    try {
      await AsyncStorage.setItem('cineapp_users', JSON.stringify(updatedUsers));
      setRegisteredUsers(updatedUsers);
      setUser(newUser);
      setIsLoggedIn(true);
      return { success: true };
    } catch (error) {
      return { success: false, message: 'Erro ao salvar usuário' };
    }
  };

  const value = {
    user,
    isLoggedIn,
    isLoading,
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