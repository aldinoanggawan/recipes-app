import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import FontAwesomeHeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

export type MealsParamList = {
  Categories: undefined
  CategoryMeals: { id: string; title: string }
  MealDetail: { id: string; title: string }
}

const Stack = createStackNavigator<MealsParamList>()

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '#ffffff',
          },
          headerTintColor:
            Platform.OS === 'android' ? '#ffffff' : Colors.primaryColor,
        }}>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Meal Categories',
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerBackTitle: 'Categories',
          })}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
                <Item
                  title="Favorite"
                  iconName="star-o"
                  onPress={() => console.log('favorite')}
                />
              </HeaderButtons>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MealsNavigator
