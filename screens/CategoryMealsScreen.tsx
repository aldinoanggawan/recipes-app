import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'

import MealItem from '../components/MealItem'
import { MEALS, MealData } from '../data/dummy-data'
import { MealsParamList } from '../navigations/MealsNavigator'
import MealList from '../components/MealList'

type CategoryMealsScreenProps = StackScreenProps<
  MealsParamList,
  'CategoryMeals'
>

const CategoryMealsScreen = ({
  route,
  navigation,
}: CategoryMealsScreenProps) => {
  const { id } = route.params

  const displayedMeals = MEALS.filter(
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
