import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native'

import { MealsParamList } from '../navigations/MealsNavigator'
import { StyledText, StyledView } from '../styles/content'

type MealDetailScreenProps = StackScreenProps<MealsParamList>

const MealDetailScreen = ({ navigation }: MealDetailScreenProps) => {
  return (
    <StyledView>
      <StyledText>Meal Detail Screen</StyledText>
      <Button title="Go to categories" onPress={() => navigation.popToTop()} />
    </StyledView>
  )
}

export default MealDetailScreen
