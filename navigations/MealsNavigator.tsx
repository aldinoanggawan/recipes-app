import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import FontAwesomeHeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

export type MealsParamList = {
  Categories: undefined
  CategoryMeals: { id: string; title: string }
  Favorites: undefined
  MealDetail: { id: string; title: string }
}

type MealsFavTabParamList = {
  Meals: undefined
  Favorites: undefined
}

const Tab = createBottomTabNavigator<MealsFavTabParamList>()
const Stack = createStackNavigator<MealsParamList>()

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === 'android' ? Colors.primaryColor : '#ffffff',
  },
  headerTintColor: Platform.OS === 'android' ? '#ffffff' : Colors.primaryColor,
}

const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
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
  )
}

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Favorites' }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  )
}

const MealsFavTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
          style: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '#ffffff',
          },
        }}>
        <Tab.Screen
          name="Meals"
          component={MealsNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="cutlery" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="star" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MealsFavTabNavigator
