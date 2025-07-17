import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Detalle del Usuario</Text>
      <Button title="Regresar a Perfil" onPress={() => navigation.goBack()} />
    </View>
  );
}
