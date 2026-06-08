import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colorList} from '../../constants/colors';



export default function ParentCategoryButton({
    item,
    selectedCategory,
    onSelectCategory
  }) {
    const isSelected = item === selectedCategory

       // Vérification pour s'assurer que onSelectCategory est une fonction
       const handlePress = () => {
        if (typeof onSelectCategory === 'function') {
            onSelectCategory(item);
        }
    };
  
    return (
      <TouchableOpacity
        style={styles.buttonWrapper}
        // TODO: Replace onSelectCategory with redux
        onPress={handlePress}
      >
        {isSelected ? (
            <Text style={styles.selectedCategoryButtonText}>{item}</Text>
        ) : (
          <View style={styles.categoryButton}>
            <Text style={styles.unselectedCategoryButtonText}>{item}</Text>
          </View>
        )}
      </TouchableOpacity>
    )
  }
  

  const styles = StyleSheet.create({
    buttonWrapper: {
      marginRight: 10,
    },
    categoryButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: colorList.vibrantCyan,
      borderWidth: 2,
      borderRadius: 20,
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    selectedCategoryButton: {
      paddingVertical: 11,
      paddingHorizontal: 15,
      borderRadius: 20,
      justifyContent: 'center',
      borderWidth: 2,
    },
    selectedCategoryButtonText: {
      textAlign: 'center',
      color: colorList.black,
      fontSize: 16,
      fontWeight: '700',
    },
    unselectedCategoryButtonText: {
      textAlign: 'center',
      color: colorList.vibrantCyan,
      fontSize: 16,
    },
  });