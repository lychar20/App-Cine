import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
//import { NativeRouter, Route, Routes, Link } from "react-router-native";
import React from "react";

 import { NavigationContainer } from "@react-navigation/native";
//  import { createStackNavigator } from "@react-navigation/native-stack"; 
import { createStackNavigator } from "@react-navigation/stack"; 

import Home from "./home";
import Question from "./questions";
import SignUpScreen from "./signUpScreen";
import StopTime from './stopTime';
import Calendrier from './calendrier';
import Welcome from './welcome';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown : false}} />  
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="Question" component={Question} options={{headerShown : false}} /> 
        <Stack.Screen name="Calendrier" component={Calendrier} />       
      </Stack.Navigator>
    </NavigationContainer> 
  );
}