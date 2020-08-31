import React from 'react'
import { FlatList } from 'react-native'

import { MealData } from '../data/dummy-data'
import { StyledView } from '../styles/content'

interface MealListProps {
  listData: MealData[] | null
  renderItem: ({ item }: { item: MealData }) => JSX.Element
}

const MealList = ({ listData, renderItem }: MealListProps) => {
  return (
    <StyledView>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </StyledView>
  )
}

export default MealList
