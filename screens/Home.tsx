import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native'

import { RootStackParamList } from '../App'
import { StyledText, StyledView } from '../styles/content'

type HomeProps = StackScreenProps<RootStackParamList, 'About'>

const Home = ({ navigation }: HomeProps) => {
  return (
    <StyledView>
      <StyledText>Hello World !</StyledText>
      <StyledText>This is the home screen</StyledText>
      <Button
        title="Go to About screen"
        onPress={() => navigation.navigate('About')}
      />
    </StyledView>
  )
}

export default Home
