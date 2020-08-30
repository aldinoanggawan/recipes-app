import * as React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  HeaderButton,
  HeaderButtonProps,
} from 'react-navigation-header-buttons'

import Colors from '../constants/Colors'

const FontAwesomeHeaderButton = (props: HeaderButtonProps) => (
  <HeaderButton
    IconComponent={Icon}
    iconSize={23}
    color={Platform.OS === 'android' ? '#ffffff' : Colors.primaryColor}
    {...props}
  />
)

export default FontAwesomeHeaderButton
