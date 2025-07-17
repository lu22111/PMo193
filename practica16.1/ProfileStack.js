import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/profile';
import DetalleScreen from './screens/DetalleScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: 'Mi Perfil' }}
      />
      <Stack.Screen 
        name="Detalle" 
        component={DetalleScreen}
        options={{ title: 'Detalles del Usuario' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;