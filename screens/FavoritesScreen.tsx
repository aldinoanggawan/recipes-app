import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useSelector } from 'react-redux'

import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import { MealData } from '../data/dummy-data'
import { MealsParamList } from '../navigations/MealsNavigator'
import { RootState } from '../store/reducers'

type FavoriteScreenProps = StackScreenProps<MealsParamList, 'Favorites'>

const FavoritesScreen = ({ navigation }: FavoriteScreenProps) => {
  const selectFavoriteMeals = (state: RootState) => state.meals.favoriteMeals
  const favoriteMeals = useSelector(selectFavoriteMeals)

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
