import { MealsState } from './types'
import { MEALS } from '../../data/dummy-data'

const initialState: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

export const mealsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}
