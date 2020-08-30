import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { FlatList } from 'react-native'

import MealItem from '../components/MealItem'
import { MEALS, MealData } from '../data/dummy-data'
import { StyledView } from '../styles/content'
import { MealsParamList } from '../navigations/MealsNavigator'

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

  return (
    <StyledView>
      <FlatList
        data={displayedMeals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </StyledView>
  )
}

export default CategoryMealsScreen
