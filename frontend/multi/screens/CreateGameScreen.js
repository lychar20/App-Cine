import React, {useEffect, useState } from "react"
import { View, StyleSheet, Text, Alert, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import { colorList } from "../constants/colors"



export default function CreateGameScreen ({ navigation, route }) {

  const [categories, setCategories] = useState([]);
  const { isSinglePlayer } = route.params || { isSinglePlayer: false };
 /*  const [selectedCategory, setSelectedCategory] = useState(null) ; */

  const useFetchTriviaCategories = () => {
    useEffect(() => {
      fetchCategories();
    }, []);

  
    async function fetchCategories() {
      try {
        const response = await axios.get('https://opentdb.com/api_category.php');
        const data = response.data;
        const fetchedCategories = data.trivia_categories.map(category => ({
          id: category.id,
          name: category.name.replace(/Entertainment: |Science: /g, ''),
        }));
        setCategories(fetchedCategories);
        console.log('SETCATEGORIES', setCategories);
      } catch (err) {
        Alert.alert("Couldn't fetch categories", 'Please try again later.');
      }
    }
  
    return categories;

  }



  //


  //// POUR MOI CES DEUX FONCTION VONT ENSEMBLE

 

/*     async function socketCreateRoom(category, userId, userName) {
      try {
        const roomId = await saveRoomInDatabase(category, userId, userName)
    
        if (roomId) {
          socket.emit(`'create_room'`, {
            roomId: userId,
            userName,
            category
          })
        }
    
        return roomId // TODO: the room id is not in use
      } catch (error) {
        console.error("Failed to create room")
      }
    } */


 
    




    //// POUR MOI CES DEUX FONCTION VONT ENSEMBLE




  //use createGame

  const startSinglePlayerGame = () => {
    if (!categoryId) {
      Alert.alert('Please select a category.');
      return;
    }

    navigation.navigate('GameScreen', {
      categoryId,
      isHost: true,
      isSinglePlayer: true,
    });
}








  //

  
  
    const availableCategories = useFetchTriviaCategories();

    /* 


    const useCreateGame = (categoryName, categoryId, isSinglePlayer) => {
      const [error, setError] = useState(null);


      const createRoom = async () => {
        if (!categoryName || !categoryId) {
          Alert.alert('Please select a category.');
          return;
        }
      
        try {
          const roomId = await socketCreateRoom(
            categoryName,
            userId,
            userName
          );
      
          if (roomId) {
            navigation.navigate("GameScreen", {
              categoryId,
              isHost: true,
              isSinglePlayer,
            });
          } else {
            Alert.alert('Failed to create game room.');
          }
        } catch (error) {
          Alert.alert("Couldn't create game room.");
          console.error("Couldn't create game room.", error);
        }
      };


      const startSinglePlayerGame = () => {
        if (!categoryId) {
          Alert.alert('Please select a category.');
          return;
        }
    
        navigation.navigate('GameScreen', {
          categoryId,
          isHost: true,
          isSinglePlayer: true,
        });
     }

  
     return { createRoom, startSinglePlayerGame, error };

      }; 

     */

  
  
     const handleSelectCategory = category => {
      setSelectedCategory(category)
    }
 
    return (
 
            <View style={styles.container}>
              <Text style={styles.title}>TRIVIA CATEGORIES:</Text>
              <FlatList
                data={categories}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity 
                    style={styles.categoryItem} 
                    onPress={() => navigation.navigate('GameScreen', { categoryId: item.id, categoryName: item.name, host: item.host })} 
                  >
                    <Text style={styles.categoryName}>{item.name}</Text>
                  </TouchableOpacity>
      )}
    />
    
  
            </View>

      )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  categoryName: {
    fontSize: 18,
  },
});
  
