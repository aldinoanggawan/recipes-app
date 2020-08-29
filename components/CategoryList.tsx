import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

import { CategoryData } from '../data/dummy-data'
import { MealsParamList } from '../navigations/MealsNavigator'
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../styles/content'

type CategoryListNavigationProp = StackNavigationProp<
  MealsParamList,
  'CategoryMeals'
>

type CategoryListProps = {
  navigation: CategoryListNavigationProp
  item: CategoryData
}

const CategoryList = ({ item, navigation }: CategoryListProps) => {
  return (
    <StyledTouchableOpacity
      gridItem
      onPress={() => navigation.navigate('CategoryMeals')}>
      <StyledView>
        <StyledText categoryList>{item.title}</StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default CategoryList
