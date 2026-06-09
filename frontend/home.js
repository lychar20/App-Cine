import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";



import Twitter from "./icons/Twitter.png";

import Axios, { all } from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from './config.js';

// import { LogInScreen } from "./signIn";

import axios from "axios";


//import { login } from "../backend/controllers/user";

/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  */


import { socket } from './socket/index.js';

export default function Home({ navigation }) {

    // regex to validate email
    const [checkValidEmail, setCheckValidEmail] = useState(false);

    const handleCheckEmail = (text) => {
          let re =/\S+@\S+\.\S+/;
          let regex = /^[\+]?[(]?[0-9]{3} [)]? [-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6} $/im;

      setEmail(text);
      if(re.test(text) || regex.test(text)) {
        setCheckValidEmail(false);
      } else {
        setCheckValidEmail(true);
      }

    }

    // End regex to validate email
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 



  

    console.log('EMAIL', email);
    console.log('PASSWORD', password);


    useEffect(() => {
      // Écoutez les réponses du serveur
      socket.on("receive_answer", (data) => {
        console.log("Réponse reçue:", data);
      });
  
      // Nettoyez l'écouteur lors du démontage du composant
      return () => {
        socket.off("receive_answer");
      };
    }, []);
 

  

  const OnSignIn = () => {

  
    if (!email || !password) {
      alert("Veuillez remplir tous les champs");
    } else {

      Axios.post(`${API_URL}/api/auth/login/`, {
        email: email,
        password: password,
      }).then((response) => {
        console.log("ICI", response.data.data)
        AsyncStorage.setItem('token', JSON.stringify(response.data.data));
        navigation.navigate('Welcome')
        
  
      }).catch(function(error) {
        console.log("ERROR", error.response.data);
      });

    }


   

  

  }
     

    return (
      <View style={styles.container}>

        <Text style={styles.title} >App Quiz  {/* {tweet}  */} </Text>
        <StatusBar style="auto" />

        {/* Zone de saisie */}

        <View style={styles.inputContainer} >
        <Entypo name="email"  size={20} color= '#666' style={{marginRight: 5}} />
        <TextInput style={styles.input} 
        placeholder={'Entrer votre email'}
        value={email}
        onChangeText= /* {setEmail}   */ {(text)=>handleCheckEmail(text)}
        />

       
        </View>

        {/* Wrong format message   */}   
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Wrong format email</Text>
        ) : ( 
          <Text style={styles.textFailed}></Text>
        ) }

        

        {/* End Wrong format message   */} 

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
    },
    textFailed: {
      color: 'red',
      marginLeft: 200,
    }
  });