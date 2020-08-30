import React from 'react'
import { enableScreens } from 'react-native-screens'

import MealsNavigator from './navigations/MealsNavigator'

enableScreens()

const App = () => {
  return <MealsNavigator />
}

export default App
