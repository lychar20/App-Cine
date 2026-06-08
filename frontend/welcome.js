import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo'
import { Axios } from 'axios';
import axios from 'axios'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'




export default function Welcome({ navigation }) {
    const [userData, setUserData] = useState('');
    const [score, setCore] = useState(0);
    const [latestScore, setLatestScore] = useState(0);

    

    async function getInfo() {
        const token = await AsyncStorage.getItem('token');
        //const score = await AsyncStorage.getItem('Score');

        
        if (score) {
            const scoreParsed = JSON.parse(score);
            const firstValue = scoreParsed.score; // Accéder directement à la valeur de score
            console.log("TEST", firstValue); 
            setCore(firstValue); // Mettre à jour l'état avec la valeur de score
        }
    
       // console.log('Score est passé', score);
        
        console.log('TOKEN est passé', token);
        console.log("Contenu" , {token: token});

        if (!token) {console.error("Token est manquant !");            
            return; 
        }

        axios
      .post("http://192.168.1.17:3000/api/auth/userdata/", {token: token})
      .then(res => {
        console.log("ULTIME", res.data);
        setUserData(res.data.data);
        
        
      });

      
        }

        

        async function getLatestScore() {
          const token = await AsyncStorage.getItem('token');
          console.log("TOKEN2", token);
      
          if (!token) {
              console.error("Token manquant !");
              return;
          }
      
          try {
              // Modifiez ici pour envoyer le token en tant que paramètre de requête
        const response = await axios.get(`http://192.168.1.17:3000/api/auth/get-latest-score`, {
          headers: {
              Authorization: `Bearer ${token}` // Ajoutez le token dans les en-têtes
          }
      });
      
              console.log("Dernier score :", response.data.score);
              setLatestScore(response.data.score);
              
              return response.data.score; // Retournez le dernier score
          } catch (error) {
              console.error("Erreur lors de la récupération du dernier score :", error.response ? error.response.data : error.message);
          }
      }

      

    useEffect(() => {
        getInfo();
        getLatestScore();
    }, []); 


      // Méthode pour se déconnecter
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token'); // Supprimez le token d'AsyncStorage
    navigation.navigate('Home'); // Redirigez vers la page d'accueil
  };



  return (
    <View style={styles.container} >

    <FontAwesomeIcon name='user-circle' size={40} style={styles.logoUser} onPress={handleLogout}  />
      <Text style={styles.messagePage} >Bienvenu: {userData.name} </Text>

      <Text style={styles.messagePage}> Voila ton dernier score:  {latestScore}  </Text>
       
      
      

    <TouchableOpacity style={styles.touchableButton} onPress=  {() => navigation.navigate('Question') }    >
            <Text style={styles.touchableText} >Commencer une partie</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touchableButton} onPress=  {() => navigation.navigate('MultiplayerLobbyScreen') }    >
            <Text style={styles.touchableText} >Multi joueur Trivia</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text style={styles.scoreSheet} onPress=  {() => navigation.navigate('ScoreSheet') }  > voir le tableau de tous les scores </Text>
    </TouchableOpacity>
      
    </View>
  )
  
}



const styles = StyleSheet.create({
    container: {
        
        
      },
      logoUser:{
        marginTop: 40,
        marginLeft: 300

      },
      touchableButton: {
        marginTop: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 30,
        borderRadius: 5,
        padding: 20,
        backgroundColor: 'orange'
      },
      messagePage: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 50,
        fontSize:26,
        fontWeight: 'bold'
      },
      scoreSheet: {
        marginTop: 40,
        color: '#0065ff', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

      }

}) 



