import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'

import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import { MealData, MEALS } from '../data/dummy-data'
import { MealsParamList } from '../navigations/MealsNavigator'

type FavoriteScreenProps = StackScreenProps<MealsParamList, 'Favorites'>

const FavoritesScreen = ({ navigation }: FavoriteScreenProps) => {
  const favoriteMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf('c5') >= 0,
  )

  const renderItem = ({ item }: { item: MealData }) => (
    <MealItem
      item={item}
      onPress={() =>
        navigation.navigate('MealDetail', { id: item.id, title: item.title })
      }
    />
  )

  return <MealList listData={favoriteMeals} renderItem={renderItem} />
}

export default FavoritesScreen
