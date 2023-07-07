import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./home";
import Question from "./questions";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

     <Stack.Navigator initialRouteName='home' screenOptions={{headerShown : false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Question" component={Question} />
      
    </Stack.Navigator>

  

      </NavigationContainer>

      

  );
}