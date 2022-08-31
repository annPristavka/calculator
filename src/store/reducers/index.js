import { combineReducers } from 'redux'

import { historyReducer } from './command.jsx'

export const rootReducer = combineReducers({
  history: historyReducer,
})
