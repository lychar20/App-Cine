import { categoryMappings } from "../constants/categories"
import { ParentCategory } from "../types/categories"

const initializeCategoriesMap = () => {
    return {
      [ParentCategory.ArtsAndEntertainment]: [],
      [ParentCategory.ScienceAndTechnology]: [],
      [ParentCategory.HistoryAndGeography]: [],
      [ParentCategory.SportsAndGames]: [],
      [ParentCategory.Miscellaneous]: []
    }
  }
  
  export function categorizeCategories(categories) {
    const categoriesMap = initializeCategoriesMap()
  
    categories.forEach(category => {
      const parentCategory =
        categoryMappings[category.name] || ParentCategory.Miscellaneous
      categoriesMap[parentCategory].push(category)
    })
  
    return categoriesMap
  }