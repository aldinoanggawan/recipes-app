import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { FlatList } from 'react-native'

import CategoryList from '../components/CategoryList'
import { CATEGORIES, CategoryData } from '../data/dummy-data'
import { MealsParamList } from '../navigations/MealsNavigator'

type CategoriesScreenProps = StackScreenProps<MealsParamList, 'CategoryMeals'>

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderGridItem = ({ item }: { item: CategoryData }) => (
    <CategoryList item={item} navigation={navigation} />
  )

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default CategoriesScreen
