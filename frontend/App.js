import 'react-native-gesture-handler';
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator as createStackNavigator } from "@react-navigation/native-stack";

import Home from "./home";
import Question from "./questions";
import SignUpScreen from "./signUpScreen";
import StopTime from './stopTime';
import Calendrier from './calendrier';
import Welcome from './welcome';
import ScoreSheet from './scoreSheet';
import MultiplayerLobbyScreen from './multi/screens/MultiplayerLobbyScreen';
import CreateGameScreen from './multi/screens/CreateGameScreen';
import GameScreen from './multi/screens/GameScreen';
import AssezCRelou from './multi/screens/AssezCRelou';
import PlayOn from './multi/screens/PlayOn';
import PartieScore from './multi/screens/PartieScore';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
          <Stack.Screen name="MultiplayerLobbyScreen" component={MultiplayerLobbyScreen} options={{headerShown: false}} />
          <Stack.Screen name="CreateGameScreen" component={CreateGameScreen} options={{headerShown: false}} />
          <Stack.Screen name="PlayOn" component={PlayOn} options={{headerShown: false}} />
          <Stack.Screen name="PartieScore" component={PartieScore} options={{headerShown: false}} />
          <Stack.Screen name="AssezCRelou" component={AssezCRelou} options={{headerShown: false}} />
          <Stack.Screen name="GameScreen" component={GameScreen} options={{headerShown: false}} />
          <Stack.Screen name="ScoreSheet" component={ScoreSheet} options={{headerShown: false}} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}} />
          <Stack.Screen name="Question" component={Question} options={{headerShown: false}} />
          <Stack.Screen name="Calendrier" component={Calendrier} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
