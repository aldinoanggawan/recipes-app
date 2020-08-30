import React from 'react'

import { CategoryData } from '../data/dummy-data'
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../styles/content'

type CategoryListProps = {
  item: CategoryData
  onPress: () => void
}

const CategoryList = ({ item, onPress }: CategoryListProps) => {
  return (
    <StyledTouchableOpacity background={item.color} gridItem onPress={onPress}>
      <StyledView categoryList>
        <StyledText categoryList>{item.title}</StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default CategoryList
