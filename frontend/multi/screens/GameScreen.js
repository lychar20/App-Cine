import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';
import { API_URL } from '../../config.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GameScreen ({ navigation }) {
    const route = useRoute();
    const { categoryName, categoryId, host } = route.params; 

    const [userData, setUserData] = useState(null);

    const userId = userData ? userData._id : null;  // Remplacez par l'ID de l'utilisateur actuel
    const userName = userData ? userData.name : null; // Remplacez par le nom de l'utilisateur actuel

    console.log("UserID", userId);
    console.log("UserName", userName);


       useEffect(() => {
            getInfo();
        }, []); 


    ///

    console.log("HOST", host);
    

    async function getInfo() {
        const token = await AsyncStorage.getItem('token');
        console.log('TOKEN est passé pour GameScreen', token);
        

        if (!token) {console.error("Token est manquant !");            
            return; 
        }

        try {
            const res = await axios.post(`${API_URL}/api/auth/userdata/`, { token });
            console.log("Données utilisateur reçues:", res.data);
            setUserData(res.data.data);
        } catch (error) {
            console.error("Error fetching user data", error);
        }

        }

    


    ///


    async function saveRoomInDatabase(category, userId, userName, categoryId) {
        try {
          const response = await axios.post(`${API_URL}/api/auth/rooms/`, {
            category,
            userId,
            userName,
            categoryId
          })
      
          if (response.data && response.data.roomId) {
            navigation.navigate('PlayOn', { roomId: response.data.roomId, categoryId}); // Naviguer vers PlayOn avec roomId
          } else {
            //la création de la salle a échoué
            console.error("Room creation failed: ", response.data);
          }

        } catch (error) {
          console.error("Failed to save room in the database", error)
        }
      }


    return (
        <View style={styles.container}>
        
            <Text style={styles.title}>Vous avez choisi la catégorie:</Text>
          <Text style={styles.title}>{categoryName}</Text>


        <TouchableOpacity style={styles.createNewButton} 
             onPress={() => {
                if (userId && userName) { // Vérifiez que userId et userName sont disponibles
                    saveRoomInDatabase(categoryName, userId, userName, categoryId);
                } else {
                    console.error("User ID ou nom d'utilisateur manquant !");
                }
            }}  >

                    <Text style={styles.touchableText} >Créer une partie</Text>

            </TouchableOpacity>

        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f9f9f9', 
    },
    title: {
      fontSize: 24, 
      fontWeight: 'bold', 
    },
  });