import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importar las pantallas
import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

// Crear el objeto Tab
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'Inicio',
            headerStyle: {
              backgroundColor: '#f0f0f0',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            title: 'Perfil',
            headerStyle: {
              backgroundColor: '#e8f4f8',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            title: 'Configuración',
            headerStyle: {
              backgroundColor: '#f8f0e8',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}