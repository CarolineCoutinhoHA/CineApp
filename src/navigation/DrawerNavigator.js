import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import MyListScreen from '../screens/MyListScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>CineApp</Text>
        {isLoggedIn && (
          <Text style={styles.userName}>Olá, {user?.name}</Text>
        )}
      </View>

      <View style={styles.menuItems}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.menuText}>Catálogo</Text>
        </TouchableOpacity>

        {isLoggedIn && (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('MyList')}
          >
            <Text style={styles.menuText}>Minha Lista</Text>
          </TouchableOpacity>
        )}

        {!isLoggedIn ? (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.menuText}>Login/Cadastro</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              logout();
              navigation.navigate('Home');
            }}
          >
            <Text style={styles.menuText}>Sair</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#1A1A2E' },
        headerTintColor: '#FFFFFF',
        drawerStyle: { backgroundColor: '#1A1A2E' }
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Catálogo' }} />
      <Drawer.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
      <Drawer.Screen name="MyList" component={MyListScreen} options={{ title: 'Minha Lista' }} />
      <Drawer.Screen name="Register" component={RegisterScreen} options={{ title: 'Login/Cadastro' }} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    paddingTop: 50,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#16213E',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  menuItems: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#16213E',
  },
  menuText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default DrawerNavigator;