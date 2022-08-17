import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export const store = configureStore({
    reducer: rootReducer,
})