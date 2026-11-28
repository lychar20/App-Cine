import { View, StyleSheet, Text } from 'react-native'
import React,  { useEffect, useState } from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import {colorList} from '../constants/colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../config.js';



export default function MultiplayerLobbyScreen({ navigation }) {

  const [activeRooms, setActiveRooms] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [userEntity, setUserEntity] = useState('default');

  useEffect(() => {
    const fetchUserEntity = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) return;
        const res = await axios.post(`${API_URL}/api/auth/userdata/`, { token });
        setUserEntity(res.data.data?.entity || 'default');
      } catch {}
    };
    fetchUserEntity();
  }, []);

  /* requete axios */

  useEffect(() => {
    const fetchActiveRooms = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/auth/active/`);
            setActiveRooms(response.data.rooms || []);
        } catch (error) {
            console.error("Erreur lors de la récupération des salles actives:", error);
        }
    };

    fetchActiveRooms(); // premier chargement immédiat
    const interval = setInterval(fetchActiveRooms, 3000); // rafraîchissement toutes les 3 secondes

    return () => clearInterval(interval); // nettoyage à la sortie de l'écran
}, []);

 

  return (
    <View style={styles.container}>
        <View style={styles.joinGameRow}>
              <View style={styles.flexOne}>
                <Text style={styles.activeRoomsTitle}>Rejoindre une partie</Text>
              </View>
              <View style={styles.flexOne}>
                <TouchableOpacity style={styles.createNewButton} 
                /* onPress=  {() => navigation.navigate('AssezCRelou') }  */ onPress=  {() => navigation.navigate('CreateGameScreen') }    >
                          <Text style={styles.touchableText} >Créer une partie</Text>
                  </TouchableOpacity>
              </View>
        </View>


                   {/* Affichage des salles actives ici */}
                   {activeRooms.length > 0 ? (
                       activeRooms.map(room => (
                    <TouchableOpacity
                        key={room._id}
                        style={styles.roomButton}
                        onPress={() => {
                          // Récupérer categoryId de la salle sur laquelle l'utilisateur clique
                          const selectedCategoryId = room.categoryId; // Assurez-vous que cela correspond à votre structure de données
                          navigation.navigate('PlayOn', { roomId: room._id, categoryId: selectedCategoryId, host: room.host, entity: userEntity });
                      }} // Naviguer vers l'écran de jeu
                    >
                        <Text style={styles.roomText}>{room.category} - Créée par {room.userName}</Text>
                    </TouchableOpacity>
                ))
            ) : (
                <Text style={styles.noRoomsText}>Aucune partie disponible.</Text>
            )}

    

        <TouchableOpacity style={styles.backeButton} onPress=  {() => navigation.navigate('Welcome') }    >
                      <Text style={styles.touchableText} >Menu principal</Text>
              </TouchableOpacity>

  </View>
  )

}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingBottom: 20,
      borderColor: 'cyan',
      borderWidth: 2,
      borderRadius: 10,
      marginHorizontal: 20,
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
  },
  joinGameRow: {
      flexDirection: 'row',
      borderBottomColor: 'cyan',
      borderBottomWidth: 2,
      paddingBottom: 10,
      marginBottom: 10,
  },
  flexOne: {
      flex: 1,
  },
  activeRoomsTitle: {
      color: 'white',
      textAlign: 'center',
      marginLeft: 20,
      marginVertical: 20,
      fontWeight: '400',
      fontSize: 20,
  },
  createNewButton: {
      marginRight: 20,
  },
  touchableText: {
      marginVertical: 20,
      fontWeight: '400',
      textAlign: 'center',
      fontSize: 20,
  },
  backeButton: {
      marginTop: 50,
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      marginBottom: 30,
      borderRadius: 5,
      padding: 20,
      backgroundColor: 'orange',
  },
  roomButton: {
      padding: 15,
      marginVertical: 5,
      backgroundColor: 'blue',
      borderRadius: 5,
  },
  roomText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
  },
  noRoomsText: {
      color: 'white',
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
  },
});