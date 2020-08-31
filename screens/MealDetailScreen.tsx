import { StackScreenProps } from '@react-navigation/stack'
import { nanoid } from 'nanoid/non-secure'
import React from 'react'

import { MEALS } from '../data/dummy-data'
import { MealsParamList } from '../navigations/MealsNavigator'
import {
  StyledImage,
  StyledScrollView,
  StyledText,
  StyledView,
} from '../styles/content'

type MealDetailScreenProps = StackScreenProps<MealsParamList, 'MealDetail'>

interface ListItemProps {
  children: string
}

const ListItem = ({ children }: ListItemProps) => (
  <StyledView mealDetailListItem>
    <StyledText size="15px">{children}</StyledText>
  </StyledView>
)

const MealDetailScreen = ({ route }: MealDetailScreenProps) => {
  const { id } = route.params

  const selectedMeal = MEALS.find((meal) => meal.id === id)

  return (
    <StyledScrollView>
      <StyledImage source={{ uri: selectedMeal?.imageUrl }} />
      <StyledView mealDetailImgLabel>
        <StyledText>{selectedMeal?.duration}m</StyledText>
        <StyledText>{selectedMeal?.complexity.toUpperCase()}</StyledText>
        <StyledText>{selectedMeal?.affordability.toUpperCase()}</StyledText>
      </StyledView>
      <StyledText size="28px" align="center" margin="20px 0 10px" bold>
        Ingredients
      </StyledText>
      {selectedMeal?.ingredients.map((ingredient) => (
        <ListItem key={nanoid()}>{ingredient}</ListItem>
      ))}
      <StyledText size="28px" align="center" margin="20px 0 10px" bold>
        Steps
      </StyledText>
      {selectedMeal?.steps.map((step) => (
        <ListItem key={nanoid()}>{step}</ListItem>
      ))}
    </StyledScrollView>
  )
}

export default MealDetailScreen
