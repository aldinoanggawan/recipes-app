import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
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
import FiltersScreen from '../screens/FiltersScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

export type MealsParamList = {
  Categories: undefined
  CategoryMeals: { id: string; title: string }
  Favorites: undefined
  Filters: undefined
  MealDetail: { id: string; title: string }
}

type MealsFavTabParamList = {
  Meals: undefined
  Favorites: undefined
}

type MainNavParamList = {
  MealsFav: undefined
  Filters: undefined
}

const Drawer = createDrawerNavigator<MainNavParamList>()
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
        options={({ navigation }) => ({
          title: 'Meal Categories',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
              <Item
                title="Drawer"
                iconName="navicon"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
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
        options={({ navigation }) => ({
          title: 'Favorites',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
              <Item
                title="Drawer"
                iconName="navicon"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
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

const MealsFavTabNavigator = () => {
  return (
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
  )
}

const FiltersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({ navigation }) => ({
          title: 'Filter Meals',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
              <Item
                title="Drawer"
                iconName="navicon"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: { fontWeight: 'bold' },
        }}>
        <Drawer.Screen
          name="MealsFav"
          component={MealsFavTabNavigator}
          options={{ drawerLabel: 'Meals' }}
        />
        <Drawer.Screen name="Filters" component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
