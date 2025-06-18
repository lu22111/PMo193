// ZONA1: Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

// Componente Texto reutilizable
const Texto = ({style}) => {
  const [contenido, setContenido] = useState("Hola Mundo");
  const actualizaTexto = () => setContenido('Estado Modificado');

  return (
    <Text style={[styles.Text,style]} onPress={actualizaTexto} >
      {contenido}
    </Text>
  );
};

// ZONA2: MAIN
export default function App() {
  const [mensaje, setMensaje] = useState("Presionar");

  const cambiarMensaje = () => {
    setMensaje("Texto cambiado");
  };

  return (
    <View style={styles.container}>

      <Texto style={styles.azul}></Texto> 
      <Texto style={styles.verde}></Texto> 
      <Texto style={styles.negro}></Texto> 
      {/* <Button onPress={cambiarMensaje} title={mensaje} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

// ZONA3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
    // flexDirection:'row'
  },
  Text:{
    color:'pink',
    fontSize: 27,
    
  },
  azul:{backgroundColor:'blue'},
  verde:{backgroundColor:'green'},
  negro:{backgroundColor: 'black'}
});