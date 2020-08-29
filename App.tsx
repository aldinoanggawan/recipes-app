import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import About from './screens/About'
import Home from './screens/Home'

export type RootStackParamList = {
  Home: undefined
  About: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

export default App
