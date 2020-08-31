import { MealData } from '../../data/dummy-data'

export interface MealsState {
  meals: MealData[]
  filteredMeals: MealData[]
  favoriteMeals: MealData[] | null
}
