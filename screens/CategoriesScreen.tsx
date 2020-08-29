import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native'

import { MealsParamList } from '../navigations/MealsNavigator'
import { StyledText, StyledView } from '../styles/content'

type CategoriesScreenProps = StackScreenProps<MealsParamList, 'CategoryMeals'>

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  return (
    <StyledView>
      <StyledText>This is the categories screen</StyledText>
      <Button
        title="Go to Meals"
        onPress={() => navigation.navigate('CategoryMeals')}
      />
    </StyledView>
  )
}

export default CategoriesScreen
