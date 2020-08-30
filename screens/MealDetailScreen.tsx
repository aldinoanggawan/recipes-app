import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native'

import { MEALS } from '../data/dummy-data'
import { MealsParamList } from '../navigations/MealsNavigator'
import { StyledText, StyledView } from '../styles/content'

type MealDetailScreenProps = StackScreenProps<MealsParamList, 'MealDetail'>

const MealDetailScreen = ({ route, navigation }: MealDetailScreenProps) => {
  const { id } = route.params

  const selectedMeal = MEALS.find((meal) => meal.id === id)

  return (
    <StyledView>
      <StyledText>{selectedMeal?.title}</StyledText>
      <Button title="Go to categories" onPress={() => navigation.popToTop()} />
    </StyledView>
  )
}

export default MealDetailScreen
