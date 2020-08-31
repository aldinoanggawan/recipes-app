import { StackScreenProps } from '@react-navigation/stack'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import FontAwesomeHeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'
import { MealsParamList } from '../navigations/MealsNavigator'
import { StyledText, StyledView } from '../styles/content'

interface FilterSwitchProps {
  label: string
  state: boolean
  toggleSwitch: () => void
}

type FiltersScreenProps = StackScreenProps<MealsParamList, 'Filters'>

const FilterSwitch = ({ label, state, toggleSwitch }: FilterSwitchProps) => (
  <StyledView filterScreenSwitch>
    <StyledText size="16px">{label}</StyledText>
    <Switch
      trackColor={{ false: '#767577', true: Colors.primaryColor }}
      thumbColor={Platform.OS === 'android' ? Colors.primaryColor : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={state}
    />
  </StyledView>
)

const FiltersScreen = ({ navigation }: FiltersScreenProps) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const toggleGlutenFree = () => setIsGlutenFree((prevState) => !prevState)
  const toggleLactoseFree = () => setIsLactoseFree((prevState) => !prevState)
  const toggleVegan = () => setIsVegan((prevState) => !prevState)
  const toggleVegetarian = () => setIsVegetarian((prevState) => !prevState)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }
    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  // the following code would break because we're passing non-serializable values
  // as a parameter
  // useEffect(() => {
  //   navigation.dispatch({
  //     ...CommonActions.setParams({
  //       save: saveFilters,
  //     }),
  //   })
  // }, [saveFilters, navigation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
          <Item title="Save" iconName="save" onPress={saveFilters} />
        </HeaderButtons>
      ),
    })
  }, [saveFilters, navigation])

  return (
    <StyledView filterScreenContainer>
      <StyledText size="22px" align="center" margin="20px 0" bold>
        Available Filters / Restrictions
      </StyledText>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        toggleSwitch={toggleGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        toggleSwitch={toggleLactoseFree}
      />
      <FilterSwitch label="Vegan" state={isVegan} toggleSwitch={toggleVegan} />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        toggleSwitch={toggleVegetarian}
      />
    </StyledView>
  )
}

export default FiltersScreen
