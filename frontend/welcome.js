import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Axios } from 'axios';
import axios from 'axios'




export default function Welcome() {
    const [userData, setUserData] = useState('');


    async function getInfo() {
        const token = await AsyncStorage.getItem('token');
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

/*         const response = await fetch("http://192.168.1.17:3000/api/auth/userdata/", {
            method: "POST", // ou 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: {token},
          }); */
      
        /*   console.log("VEREF", token)
          console.log("EDWIN",response.json())
          console.log("Réponse du serveur", response.data) */

             
            
            // .then(response => response.json())
         /* console.log("On est ici dans le fetch");
          setUserData(response);
          console.log("Réponse du serveur", response.data); */
      
      
        }



    useEffect(() => {
        getInfo();
    }, []); 

   

   

  return (
    <View style={styles.textCenter} >
      <Text>welcome sur cette nouvelle page </Text>
      <Text> {userData.email} </Text>
      
    </View>
  )
  
}



const styles = StyleSheet.create({
    textCenter: {
        marginTop: 300,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
      }
}) 

    

/*

export default function Welcome() {
    const [userData, setUserData] = useState('');

    async function getInfo() {
        const token = await AsyncStorage.getItem('token');
        console.log('TOKEN est passé', token);
    
        if (!token) {
            console.error("Token est manquant !");
            return; 
        }
    
        try {
            const response = await fetch("http://192.168.1.17:3000/api/auth/userdata/", { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token }) // Assurez-vous d'envoyer juste le token
            });
    
            console.log("On est ici dans le fetch");
            console.log("Statut de la réponse :", response.status);
    
            const data = await response.json(); // Analyser la réponse JSON
    
            if (!response.ok) {
                console.error("Détails de l'erreur :", data);
                throw new Error('Erreur dans la réponse du serveur');
            }
    
            setUserData(data.data); // Stockez les données utilisateur dans le state
            console.log("Réponse du serveur", data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données", error.message);
        }
    }

    

    useEffect(() => {
        getInfo();
    }, []); 

    return (
        <View style={styles.textCenter}>
            <Text>welcome sur cette nouvelle page</Text>
            <Text>{JSON.stringify(userData)}</Text> 
        </View>
    );
}

*/


/*

const styles = StyleSheet.create({
    textCenter: {
        marginTop: 300,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
    }
});

*/