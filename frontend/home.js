import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from "react-native-gesture-handler";

import Twitter from "./icons/Twitter.png";

import Axios from "axios"

import { LogInScreen } from "./signIn";

import {useRouter} from "expo-router";
import axios from "axios";


//import { login } from "../backend/controllers/user";

/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  */



export default function Home({ navigation }) {
   
     const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 


     console.log('EMAIL', email);
    console.log('PASSWORD', password);

  const OnSignIn = () => {
    Axios.post("http://192.168.1.14:3000/api/auth/login/", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response)
      navigation.navigate('Question')
      
    }).catch(function(error) {
      console.log(error.response.data);
    });
  
  }
     
    
    

    return (
      <View style={styles.container}>

        <Text style={styles.title} >App Quiz {/* {tweet}  */} </Text>
        <StatusBar style="auto" />

        {/* Zone de saisie */}

        <View style={styles.inputContainer} >
        <Entypo name="email" size={20} color= '#666' style={{marginRight: 5}} />
        <TextInput style={styles.input} 
        placeholder={'Entrer votre email'}
        value={email}
        onChangeText= {setEmail}  
        />
        </View>

        <View style={styles.inputContainer} >
        <MaterialCommunityIcons name="security" size={20} color= '#666' style={{marginRight: 5}} />
        <TextInput style={styles.input} secureTextEntry
        onChangeText= {setPassword} 
        />

        <TouchableOpacity>  
          <Text style={{color: '#0065f'}} >Oublié?</Text>
        </TouchableOpacity>

        </View>

        {/* Button Action */}

        <TouchableOpacity style={styles.touchableButton} onPress=  {OnSignIn}   /*  {() => navigation.navigate('Question') }   */  >
          <Text style={styles.touchableText} >Me connecter</Text>
        </TouchableOpacity>

        {/* <Button title='Appuyer ici pour commencer'   onPress=  {() => navigation.navigate('Question') } style={styles.buttondesign} /> */}

        <View>
          <Text style={styles.textCenter} >Me connecter avec</Text>
        </View>

        <View style={styles.imageRow} >

          <TouchableOpacity style={styles.imageButton} onPress=  {() => navigation.navigate('Calendrier') } >
          <Image source={require ("./icons/Facebook.png")}  style={styles.logoSocialMedia}   />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageButton}>
          <Image source={require ("./icons/Twitter.png")} style={styles.logoSocialMedia} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.imageButton}>
          <Image source={require ("./icons/Google.png")} style={styles.logoSocialMedia}  />
          </TouchableOpacity>
          
        </View>

        <View style= {styles.newAccount} >
          <Text style={{textAlign: 'center'}} > Nouveau ?</Text>
          <TouchableOpacity>
            <Text style={{color: '#0065ff', marginLeft: 5}} onPress=  {() => navigation.navigate('SignUpScreen') }  > Créer un compte </Text>
          </TouchableOpacity>
          
        </View>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      //alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 15,
      paddingLeft: 15,
    },
    title: {
      fontSize: 28,
      fontWeight: '500',
      color: '#333',
      alignItems: 'center',
      textAlign: 'center',
      
    },
    inputContainer: {
    flexDirection: "row",
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 25, 
    marginTop: 25,
    },
    input: {
      flex:1,
    },
    buttondesign: {
      marginRight: 15,
    },
    touchableButton: {
      marginBottom: 30,
      borderRadius: 5,
      padding: 20,
      backgroundColor: '#0065ff'
    },
    touchableText: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 16,
      color: '#fff',
    },
    textCenter: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 16,
    },
    logoSocialMedia: {
      width: 64,
      height: 64,
    },
    imageButton: {
      borderColor: '#ddd',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal:3,
      paddingVertical: 10,

    },
    imageRow: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center',
      marginTop: 30,
      marginRight: 10,
      marginLeft: 10,

    },
    newAccount: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });