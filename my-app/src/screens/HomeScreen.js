import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/imagen1.jpg')}
    style={styles.background}
    >
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Pantalla Principal</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});