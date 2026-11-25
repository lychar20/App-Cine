import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import categories from '../../data/categories';

export default function CreateGameScreen ({ navigation, route }) {
  const { isSinglePlayer } = route.params || { isSinglePlayer: false };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez une catégorie :</Text>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => navigation.navigate('GameScreen', {
              categoryId: item.id,
              categoryName: item.name,
              isSinglePlayer,
            })}
          >
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#282c34',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
    textAlign: 'center',
  },
  categoryItem: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#007bff',
  },
  categoryName: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
