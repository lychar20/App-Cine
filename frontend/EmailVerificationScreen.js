import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function EmailVerificationScreen({ navigation, route }) {
  const { email } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📧</Text>
      <Text style={styles.title}>Vérifiez votre email</Text>
      <Text style={styles.message}>
        Un email de confirmation a été envoyé à :
      </Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.sub}>
        Cliquez sur le lien dans l'email pour activer votre compte, puis connectez-vous.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Aller à la connexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
  },
  email: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#007bff',
    marginVertical: 8,
    textAlign: 'center',
  },
  sub: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
