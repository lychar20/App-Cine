import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';


export default function ChildCategoriesList({
    categories,
    selectedCategory,
    onSelectCategory
  }) {
    return (
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            isSelected={selectedCategory?.id === item.id}
            onSelect={onSelectCategory}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalList}
      />
    )
  }
  
  const styles = StyleSheet.create({
    verticalList: {
      paddingBottom: 16
    }
  })
  