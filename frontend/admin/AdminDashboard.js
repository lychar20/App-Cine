import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, Linking } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../config.js';

export default function AdminDashboard({ navigation }) {
  const [users, setUsers] = useState([]);
  const [entity, setEntity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const token = await AsyncStorage.getItem('adminToken');
      const entityName = await AsyncStorage.getItem('adminEntity');
      setEntity(entityName);

      const res = await axios.get(`${API_URL}/api/admin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data.users);
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de charger les utilisateurs.');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const token = await AsyncStorage.getItem('adminToken');
      const url = `${API_URL}/api/admin/users/export`;
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Alert.alert('Export réussi', 'Le fichier CSV a été généré. Utilisez un outil comme Postman ou un navigateur pour télécharger le fichier à cette URL :\n\n' + url);
    } catch (error) {
      Alert.alert('Erreur', "Impossible d'exporter les données.");
    }
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

      <Text style={styles.subtitle}>{users.length} utilisateur(s) inscrit(s)</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <View style={styles.userRow}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userEmail}>{item.email}</Text>
              <Text style={styles.userDate}>{new Date(item.createdAt).toLocaleDateString('fr-FR')}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>Aucun utilisateur pour cette entité.</Text>}
        />
      )}

      <TouchableOpacity style={styles.exportButton} onPress={handleExport}>
        <Text style={styles.exportText}>Exporter en CSV</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  logout: {
    color: '#e74c3c',
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  userRow: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 15,
  },
  exportButton: {
    backgroundColor: '#27ae60',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  exportText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
