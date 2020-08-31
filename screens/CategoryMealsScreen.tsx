import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useSelector } from 'react-redux'

import MealItem from '../components/MealItem'
import { MealData } from '../data/dummy-data'
import { MealsParamList } from '../navigations/MealsNavigator'
import MealList from '../components/MealList'
import { RootState } from '../store/reducers'

type CategoryMealsScreenProps = StackScreenProps<
  MealsParamList,
  'CategoryMeals'
>

const CategoryMealsScreen = ({
  route,
  navigation,
}: CategoryMealsScreenProps) => {
  const { id } = route.params

  const selectAvailableMeals = (state: RootState) => state.meals.filteredMeals
  const availableMeals = useSelector(selectAvailableMeals)

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0,
  )

  const renderItem = ({ item }: { item: MealData }) => (
    <MealItem
      item={item}
      onPress={() =>
        navigation.navigate('MealDetail', { id: item.id, title: item.title })
      }
    />
  )

  return <MealList listData={displayedMeals} renderItem={renderItem} />
}

export default CategoryMealsScreen
