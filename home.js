import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  */







export default function Home({ navigation }) {


    return (
      <View style={styles.container}>
        <Text>Petite maquette de Cine Jeu CA MARCHE   </Text>
        <StatusBar style="auto" />
        <Button title='Appuyer ici pour commencer'   onPress=  {() => navigation.navigate('Question') } />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });