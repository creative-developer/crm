import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducer } from './reducers/rootReducer'


export const store = configureStore({
    reducer: rootReducer,
  })

const rootStore = () => store

export type AppDispatch = ReturnType<typeof rootStore>['dispatch']
export type RootState = ReturnType<ReturnType<typeof rootStore>['getState']>

export const useAppSelector = <T>(
  selector: (state: RootState) => T,
  equalityFn?: (left: T, right: T) => boolean,
) => useSelector<RootState, T>(selector, equalityFn)

export const useAppDispatch = () => useDispatch<AppDispatch>()