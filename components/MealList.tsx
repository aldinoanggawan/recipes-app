import React from 'react'

import { MealData } from '../data/dummy-data'
import {
  StyledImageBackground,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../styles/content'

interface MealListProps {
  item: MealData
  onPress: () => void
}

const MealList = ({ item, onPress }: MealListProps) => (
  <StyledTouchableOpacity mealList onPress={onPress}>
    <StyledView mealListHeader>
      <StyledImageBackground source={{ uri: item.imageUrl }}>
        <StyledText mealListHeader>{item.title}</StyledText>
      </StyledImageBackground>
    </StyledView>
    <StyledView mealListFooter>
      <StyledText>{item.duration}m</StyledText>
      <StyledText>{item.complexity.toUpperCase()}</StyledText>
      <StyledText>{item.affordability.toUpperCase()}</StyledText>
    </StyledView>
  </StyledTouchableOpacity>
)

export default MealList
