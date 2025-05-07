import { View, StyleSheet ,Text } from 'react-native'
import React, { useState } from 'react'

import ParentCategoriesList from './ParentCategoriesList';
import ChildCategoriesList from './ChildCategoriesList'

import {colorList} from '../../constants/colors';

import {categorizeCategories} from '../../util/categories';

export default function CategoriesList({ categories, onCategorySelect }) {
    const categorizedCategories = categorizeCategories(categories)
    const parentCategories = Object.keys(categorizedCategories)
  
    const [selectedParentCategory, setSelectedParentCategory] = useState(
      parentCategories[0]
    )
    const [selectedCategory, setSelectedCategory] = useState(null)
  
    const handleSelectParentCategory = category => {
      setSelectedParentCategory(category)
      setSelectedCategory(null)
      onCategorySelect(null) // TODO: Replace this with redux
    }
  
    const onSelectCategory = category => {
      setSelectedCategory(category)
      onCategorySelect(category)
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.titleArrowContainer}>

          {/* <GoBackArrow style={styles.arrow} /> */}

          <Text style={styles.title}>Choose your category!</Text>
        </View>
  
        <ParentCategoriesList
          parentCategories={parentCategories}
          selectedCategory={selectedParentCategory}
          onSelectCategory={handleSelectParentCategory}
        />
  
        <ChildCategoriesList
          categories={categorizedCategories[selectedParentCategory]}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
        
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'flex-start',
    },
    titleArrowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    arrow: {
      top: 2,
    },
    title: {
      margin: 20,
      fontSize: 28,
      fontWeight: 'bold',
      color: colorList.white,
      textAlign: 'center',
    },
  });