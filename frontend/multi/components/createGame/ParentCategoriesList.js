import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import ParentCategoryButton from './ParentCategoryButton';



export default function ParentCategoriesList({
    parentCategories,
    selectedCategory,
    onSelectCategory
  }) {
    return (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {parentCategories.map((item) => (
            <View key={item.id}> {/* Assurez-vous que item.id est unique */}
              <ParentCategoryButton
                item={item}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
              />
            </View>
          ))}
        </ScrollView>
      );
  }
  
  const styles = StyleSheet.create({
    horizontalList: {
      marginBottom: 16,
      height: 50
    }
  })
  