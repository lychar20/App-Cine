import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from '../../config.js';

export default function PartieScore({ navigation }) {
    const route = useRoute();
    const { myScore, totalQuestions, userName, roomId } = route.params;

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let attempts = 0;
        const maxAttempts = 100;

        const fetchScores = async () => {
            attempts++;
            try {
                const response = await axios.get(`${API_URL}/api/auth/get-scores-by-room/${roomId}`);
                const data = response.data;
                setPlayers(data);

                if (data.length >= 10 || attempts >= maxAttempts) {
                    setLoading(false);
                } else {
                    setTimeout(fetchScores, 2000);
                }
            } catch (error) {
                console.error("Erreur récupération scores", error);
                setLoading(false);
            }
        };

        setTimeout(fetchScores, 3000);
    }, [roomId]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Résultats de la partie</Text>

            <View style={styles.myScoreContainer}>
                <Text style={styles.myScoreLabel}>Ton score</Text>
                <Text style={styles.myScore}>{myScore} / {totalQuestions}</Text>
                <Text style={styles.myName}>{userName}</Text>
            </View>

            <Text style={styles.subtitle}>Classement</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={players}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item, index }) => (
                        <View style={[styles.scoreRow, item.userName?.trim() === userName?.trim() && styles.highlightRow]}>
                            <Text style={styles.rank}>#{index + 1}</Text>
                            <Text style={styles.scorePlayer}>{item.userName}</Text>
                            <Text style={styles.scoreValue}>{item.score} / {totalQuestions}</Text>
                        </View>
                    )}
                />
            )}

            {players.length >= 10 && (
                <Text style={styles.winnerText}>
                    {players[0].userName?.trim() === userName?.trim()
                        ? '🏆 Bravo, vous avez gagné !'
                        : 'Bonne partie, continuez comme ça !'}
                </Text>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] })}
            >
                <Text style={styles.buttonText}>Retour au menu</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#282c34', padding: 20, paddingTop: 60 },
    title: { fontSize: 26, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
    myScoreContainer: { backgroundColor: '#444', borderRadius: 12, padding: 20, alignItems: 'center', marginBottom: 30 },
    myScoreLabel: { color: '#aaa', fontSize: 16, marginBottom: 5 },
    myScore: { color: '#fff', fontSize: 48, fontWeight: 'bold' },
    myName: { color: '#007bff', fontSize: 18, marginTop: 5 },
    subtitle: { color: '#aaa', fontSize: 16, marginBottom: 10 },
    scoreRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#333', padding: 14, borderRadius: 8, marginBottom: 8 },
    highlightRow: { backgroundColor: '#1a3a5c', borderWidth: 1, borderColor: '#007bff' },
    rank: { color: '#aaa', fontSize: 16, width: 30 },
    scorePlayer: { color: '#fff', fontSize: 16, flex: 1 },
    scoreValue: { color: '#007bff', fontSize: 16, fontWeight: 'bold' },
    winnerText: { color: '#FFD700', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 10 },
    button: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});