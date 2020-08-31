import React from 'react'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

import MealsNavigator from './navigations/MealsNavigator'
import store from './store'

enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}

export default App
