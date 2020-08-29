import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native'

import { StyledText, StyledView } from '../styles/content'
import { MealsParamList } from '../navigations/MealsNavigator'

type CategoryMealsScreenProps = StackScreenProps<MealsParamList>

const CategoryMealsScreen = ({ navigation }: CategoryMealsScreenProps) => {
  return (
    <StyledView>
      <StyledText>Category Meals Screen</StyledText>
      <Button
        title="Go to meal detail screen"
        onPress={() => navigation.navigate('MealDetail')}
      />
    </StyledView>
  )
}

export default CategoryMealsScreen
