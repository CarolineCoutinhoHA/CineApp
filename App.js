import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContext';
import { MovieProvider } from './src/context/MovieContext';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="#1A1A2E" />
          <DrawerNavigator />
        </NavigationContainer>
      </MovieProvider>
    </AuthProvider>
  );
}