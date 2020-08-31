import React from 'react'

import { MealData } from '../data/dummy-data'
import {
  StyledImageBackground,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../styles/content'

interface MealItemProps {
  item: MealData
  onPress: () => void
}

const MealItem = ({ item, onPress }: MealItemProps) => (
  <StyledTouchableOpacity mealItem onPress={onPress}>
    <StyledView mealItemTitle>
      <StyledImageBackground source={{ uri: item.imageUrl }}>
        <StyledText
          size="21px"
          color="white"
          align="center"
          background="rgba(0, 0, 0, 0.5)"
          padding="5px 0"
          bold>
          {item.title}
        </StyledText>
      </StyledImageBackground>
    </StyledView>
    <StyledView mealItemFooter>
      <StyledText>{item.duration}m</StyledText>
      <StyledText>{item.complexity.toUpperCase()}</StyledText>
      <StyledText>{item.affordability.toUpperCase()}</StyledText>
    </StyledView>
  </StyledTouchableOpacity>
)

export default MealItem
