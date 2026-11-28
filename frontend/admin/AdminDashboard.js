import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../config.js';

export default function AdminDashboard({ navigation }) {
  const [scores, setScores] = useState([]);
  const [users, setUsers] = useState([]);
  const [entity, setEntity] = useState('');
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('scores'); // 'scores' | 'users'

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const token = await AsyncStorage.getItem('adminToken');
      const entityName = await AsyncStorage.getItem('adminEntity');
      setEntity(entityName);

      const [scoresRes, usersRes] = await Promise.all([
        axios.get(`${API_URL}/api/admin/scores`, { headers: { Authorization: `Bearer ${token}` } }),
        axios.get(`${API_URL}/api/admin/users`, { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      setScores(scoresRes.data.scores);
      setUsers(usersRes.data.users);
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de charger les données.');
    } finally {
      setLoading(false);
    }
  };

  const handleExportScores = async () => {
    const token = await AsyncStorage.getItem('adminToken');
    const url = `${API_URL}/api/admin/scores/export`;
    Alert.alert('Export scores', `Ouvrez cette URL dans un navigateur pour télécharger le CSV :\n\n${url}\n\n(avec le header Authorization: Bearer ${token})`);
  };

  const handleExportUsers = async () => {
    const token = await AsyncStorage.getItem('adminToken');
    const url = `${API_URL}/api/admin/users/export`;
    Alert.alert('Export utilisateurs', `Ouvrez cette URL dans un navigateur pour télécharger le CSV :\n\n${url}`);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('adminToken');
    await AsyncStorage.removeItem('adminEntity');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard — {entity}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logout}>Déconnexion</Text>
        </TouchableOpacity>
      </View>

      {/* Onglets */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, tab === 'scores' && styles.activeTab]} onPress={() => setTab('scores')}>
          <Text style={[styles.tabText, tab === 'scores' && styles.activeTabText]}>Scores ({scores.length})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, tab === 'users' && styles.activeTab]} onPress={() => setTab('users')}>
          <Text style={[styles.tabText, tab === 'users' && styles.activeTabText]}>Joueurs ({users.length})</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 30 }} />
      ) : tab === 'scores' ? (
        <>
          <FlatList
            data={scores}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.name}>{item.userName}</Text>
                <Text style={styles.email}>{item.userEmail}</Text>
                <Text style={styles.score}>Score : {item.score}</Text>
                <Text style={styles.date}>{new Date(item.date).toLocaleDateString('fr-FR')}</Text>
              </View>
            )}
            ListEmptyComponent={<Text style={styles.empty}>Aucun score pour cette entité.</Text>}
          />
          <TouchableOpacity style={styles.exportButton} onPress={handleExportScores}>
            <Text style={styles.exportText}>Exporter scores CSV</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <FlatList
            data={users}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.date}>{new Date(item.createdAt).toLocaleDateString('fr-FR')}</Text>
              </View>
            )}
            ListEmptyComponent={<Text style={styles.empty}>Aucun joueur pour cette entité.</Text>}
          />
          <TouchableOpacity style={styles.exportButton} onPress={handleExportUsers}>
            <Text style={styles.exportText}>Exporter joueurs CSV</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  logout: { color: '#e74c3c', fontSize: 15, fontWeight: 'bold' },
  tabs: { flexDirection: 'row', marginBottom: 16, borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: '#007bff' },
  tab: { flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#fff' },
  activeTab: { backgroundColor: '#007bff' },
  tabText: { color: '#007bff', fontWeight: 'bold' },
  activeTabText: { color: '#fff' },
  row: { backgroundColor: '#fff', padding: 14, borderRadius: 8, marginBottom: 10, elevation: 2 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 14, color: '#555', marginTop: 2 },
  score: { fontSize: 14, color: '#007bff', marginTop: 4, fontWeight: 'bold' },
  date: { fontSize: 12, color: '#999', marginTop: 4 },
  empty: { textAlign: 'center', color: '#999', marginTop: 40, fontSize: 15 },
  exportButton: { backgroundColor: '#27ae60', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 10, marginBottom: 20 },
  exportText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
