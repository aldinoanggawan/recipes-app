import React from 'react'
import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

import App from './App'
import { name as appName } from './app.json'

const AppContainer = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => AppContainer)
