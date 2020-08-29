import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

export type MealsParamList = {
  Categories: undefined
  CategoryMeals: undefined
  MealDetail: undefined
}

const Stack = createStackNavigator<MealsParamList>()

const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '#ffffff',
          },
          headerTintColor:
            Platform.OS === 'android' ? '#ffffff' : Colors.primaryColor,
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{ title: 'Category Meal' }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{ title: 'Meal Detail' }}
      />
    </Stack.Navigator>
  )
}

export default MealsNavigator
