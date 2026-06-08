import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, Modal, StyleSheet, Text, TextInput, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Entypo, MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
//import DatePicker from "react-native-date-picker";



import DatePicker from 'react-native-modern-datepicker';

/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  */

import Axios from "axios"







export default function SignUpScreen ({navigation}) {

  // Function register

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [name, setName] = useState('');


     console.log('EMAIL', email);
    console.log('PASSWORD', password);

  const Register = () => {
     Axios.post("http://192.168.1.17:3000/api/auth/signup/" /*  Axios.post("http://192.168.1.112:3000/api/auth/signup/" */, {
      email: email,
      password: password,
      name: name
    }).then((response) => {
      console.log(response)
      navigation.navigate('Home')
      
    }).catch(function(error) {
      console.log(error.response.message);
    });
  
  }

  //


  const [open, setOpen] = useState(false); // Open and close the modal
  const [date, setDate] = useState(undefined); // date variable
 

   function handelOnPress () {
    setOpen(!open);
  } 

   function handelChange (date) {
    setDate(date)
    
  }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>

        <Text style={styles.title} >S'inscrire  </Text>
        <StatusBar style="auto" />

        {/* Zone de saisie */}

        <View style={styles.inputContainer} >
        <Ionicons name="person-outline" size={20} color= '#666' style={{marginRight: 5}} />
        <TextInput style={styles.input} placeholder={'Rentrez votre nom complet'}
              value={name}
              onChangeText= {setName}
        />
        </View>

        <View style={styles.inputContainer} >
        <AntDesign name="phone" size={20} color= '#666' style={{marginRight: 5}} />
        <TextInput style={styles.input} placeholder={'Entrez votre numéro de téléphone'} />
        </View>


        <View style={styles.inputContainer} >
        <Entypo name="calendar" size={20} color= '#666' style={{marginRight: 5}} />

        <TouchableOpacity onPress={() =>setOpen(true) }>
            <Text> {date === undefined ? 'Pas de date' : date} </Text>
        </TouchableOpacity>
        
        </View>

        {/* Date Picker */}
        
      {/*   <Button title='Open' onPress={handelOnPress} >
    
    </Button> */}
 
     <Modal 
       animationType= 'slide'
       transparent={true}
       visible={open}>
       
       <View style={styles.centeredView}>
         <View style={styles.modalView}>
 
         <DatePicker style={styles.temps}
          mode='calendar'
          selected={date}
          onDateChange={handelChange}
          /* minimumDate={new Date('1999-01-01')}
        maximumDate={new Date('2012-01-01')} */
          
          />
 
 
    <Button title='Close' onPress={handelOnPress} >
     
    </Button>
 
    
 
    
 
         </View>
 
         
       </View>
 
     </Modal>
  

        {/* Fin Date Picker */}

        <View style={styles.inputContainer} >
        <Entypo name="email" size={20} color= '#666' style={{marginRight: 5}} />
        <TextInput style={styles.input} placeholder={'Entrez votre email'}
        value={email}
        onChangeText= {setEmail} 
        />
        </View>

        <View style={styles.inputContainer} >
        <Ionicons name="ios-lock-closed-outline" size={20} color= '#666' style={{marginRight: 5}} />
        <TextInput style={styles.input} secureTextEntry placeholder="Entrez un mot de passe"
        onChangeText= {setPassword} 
        />
        </View>

        <View style={styles.inputContainer} >
        <Ionicons name="ios-lock-closed-outline" size={20} color= '#666' style={{marginRight: 5}} />
        <TextInput style={styles.input} secureTextEntry placeholder="Confirmez votre mot de passe" />
        </View>

        {/* Button Action */}

        <TouchableOpacity style={styles.touchableButton} onPress= {Register} /* {() => navigation.navigate('Question') }  */ >
          <Text style={styles.touchableText} >M'incrire</Text>
        </TouchableOpacity>

        {/* <Button title='Appuyer ici pour commencer'   onPress=  {() => navigation.navigate('Question') } style={styles.buttondesign} /> */}

        <View>
          <Text style={styles.textCenter} >M'inscrire avec</Text>
        </View>

        <View style={styles.imageRow} >

          <TouchableOpacity style={styles.imageButton} >
          <Image source={require ("./icons/Facebook.png")} style={styles.logoSocialMedia} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageButton}>
          <Image source={require ("./icons/Twitter.png")} style={styles.logoSocialMedia} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.imageButton}>
          <Image source={require ("./icons/Google.png")} style={styles.logoSocialMedia} />
          </TouchableOpacity>
          
        </View>

       {/*  <View style= {styles.newAccount} >
          <Text style={{textAlign: 'center'}} > Nouveau ?</Text>
          <TouchableOpacity>
            <Text style={{color: '#0065ff', marginLeft: 5}} onPress=  {() => navigation.navigate('SignUpScreen') }  > Créer un compte </Text>
          </TouchableOpacity>
          
        </View> */}

        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      //alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 15,
      paddingLeft: 15,
      paddingTop: 50,
      paddingBottom: 50,
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
    marginTop: 15,
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
      marginTop: 10,
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