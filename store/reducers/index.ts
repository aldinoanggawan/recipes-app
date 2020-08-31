import { combineReducers } from 'redux'

import { mealsReducer } from '../meals/reducers'

const rootReducer = combineReducers({ meals: mealsReducer })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
