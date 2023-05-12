import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import React from "react";



import Home from "./home";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.body}>

        <Text style={styles.sentence}> Bonjour bienvenu sur une App de jeu durant la queue. </Text>

        <Button title='Appuyer ici pour comment'    />


      <Routes>
      
      
      {/* <Route path="/" element= {<Home />} /> */}

      
      </Routes>
      </View>
    </NativeRouter>

  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});





//

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

     <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>

      </NavigationContainer>

  );
}


/* const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sentence: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
 */


// Modal

<Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
            >
                <View style={styles.designresult} >

                    <View style={styles.result} >
                        <Text style={styles.result2} > { score> (allQuestions.length/5) ? 'Congratulations!' : 'Oops!' } </Text>

                        <View style={styles.final} >
                        <Text style={styles.final2} > {score} </Text>
                        <Text> /{allQuestions.length} </Text>

                        

                        </View>
                        {/* Retry Quiz button */}

                         <TouchableOpacity style={styles.design2}   onPress={restartQuiz}>
                           
                         <Text style={styles.retrydesign} > Retry Quiz </Text>

                        </TouchableOpacity> 

                    </View> 

                </View>
            </Modal>