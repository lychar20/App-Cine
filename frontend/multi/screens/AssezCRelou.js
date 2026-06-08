import { View, FlatList,StyleSheet, Text, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonComponent } from "../components/common"
import { colorList } from "../constants/colors"
import {LinearGradient} from 'react-native-linear-gradient';

/* export default function AssezCRelou() {
  const [data, setData] = useState(null); // Initialize data as null

  const useFetchTriviaCategories = () => {
    useEffect(() => {
      fetchCategories();
    }, []);
  
    async function fetchCategories() {
      try {
        const response = await axios.get('https://opentdb.com/api_category.php');
        const data = (response.data); // Set the data when the response arrives
        const fetchedCategories = data.trivia_categories.map(category => ({
            id: category.id,
            name: category.name.replace(/Entertainment: |Science: /g, ''),
          }))
          setData(fetchedCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    return categories;

}

 




            if (!data) {
                return (
                <View>
                    <Text>Loading...</Text>
                </View>
                ); // Render a loading state while data is being fetched
            }

            return (
                <View>
                <Text>TRIVIA: {JSON.stringify(data)}</Text>
                </View>
            );
 */




                //////






                ////



            
 // }



export default function AssezCRelou() {
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const response = await axios.get('https://opentdb.com/api_category.php');
      const fetchedCategories = response.data.trivia_categories.map(category => ({
        id: category.id,
        name: category.name.replace(/Entertainment: |Science: /g, ''),
      }));
      setData(fetchedCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (!data) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    ); // Render a loading state while data is being fetched
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRIVIA CATEGORIES:</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
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








  
/* 
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
   // backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    textAlign: 'center',
    padding: 20,
    color: '#fff',
    textShadowColor: colorList.brightPurple,
    textShadowRadius: 10,
    fontWeight: '400',
    fontSize: 25,
  },
  tele: {
    marginTop: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  }
}); */




////////



