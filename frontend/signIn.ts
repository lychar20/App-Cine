import Axios from "axios"
import { Button, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from "axios";



/*  const [usernameReg, setUsernameReg] = useState('');
const [password, setPasswordReg] = useState('');  */

export const LogInScreen = async (data: {email: string, password: string}) => {
    Axios.post("http://192.168.1.14:3000/api/api/auth/login/", 
    data,
    {
        //method: 'POST',
       headers: {
           "Content-Type": "application/json"
       }
    }).then((response) => {
       const {data} = response;

       if (data.token == '') {
           console.log(data.token)
           //const {message} = data;
           throw new Error('Error during the login process');
           //alert ('ca ne passe pas');
       } 
    })
    .catch(function(error) {
        console.log(error);
      });
    
    
}