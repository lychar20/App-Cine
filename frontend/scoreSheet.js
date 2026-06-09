import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './config.js';

export default function ScoreSheet () {
    const [scores, setScores] = useState([]);

    const getUserNameById = async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/api/auth/get-user/${userId}`);
            return response.data.name; // Retourner le nom de l'utilisateur
        } catch (error) {
            console.error("Erreur lors de la récupération de l'utilisateur", error);
            return null; // Retourne null en cas d'erreur
        }
    };


      const allScore = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/auth/get-all-score`);
            console.log("TOUS LES SCORES", response.data);

            // Récupérer les noms des utilisateurs
        const scoresWithUserNames = await Promise.all(
            response.data.map(async (scoreData) => {
                const userName = await getUserNameById(scoreData.userId);
                return { ...scoreData, userName }; // Ajoute le nom de l'utilisateur à l'objet score
            })
        );

        setScores(scoresWithUserNames); // Mettre à jour l'état avec les scores et les noms d'utilisateur

               // Itérer sur les scores pour obtenir userId et score
      /*       response.data.forEach(scoreData => {
                console.log("User ID:", scoreData.userId);
                console.log("Score:", scoreData.score);
            }); */
    
        } catch (error) {
            console.log("ERROR", error.response ? error.response.data : error.message);
        }
    };


    useEffect(() => {
        allScore();
    }, []);



  return (
        <View style={styles.container}>
            <Text style={styles.title}>Le tableau de tous les scores</Text>
            {scores.map((scoreData) => (
                <View key={scoreData._id} style={styles.scoreItem}>
                 <Text>Joueur: {scoreData.userName ? scoreData.userName : 'Inconnu'}</Text>
                 <Text>Score: {scoreData.score}</Text>
                </View>
            ))}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scoreItem: {
        marginBottom: 10,
    },
});
