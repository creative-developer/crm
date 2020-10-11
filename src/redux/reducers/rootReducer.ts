import { combineReducers } from '@reduxjs/toolkit'
import { defaultReducer } from './defaultReducer'

export const rootReducer = combineReducers({
  defaultState: defaultReducer,
})
