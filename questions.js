import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
//import { NativeRouter, Route, Link } from "react-router-native";
import Quiz from "./quiz";



export default function Question() {
  return (
    <View style={styles.container}>
       {/*  <Text> VOICI LA PAGE DES QUESTIONS </Text>

        <TextInput 
      style={styles.textdata} 
      placeholder='text à afficher' 
      defaultValue=""
     /> */}

<Quiz/>

    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});