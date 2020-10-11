import { createSlice } from '@reduxjs/toolkit'


const defaultSlice = createSlice({
  name: 'defaultState',
  initialState: [
    {id: 1, text: 'Hello react!'},
    {id: 2, text: 'Hello react!'},
    {id: 3, text: 'Hello react!'},
    {id: 4, text: 'Hello react!'},
  ],
  reducers: {
    default: (state, action): void => {
    },

  },
})
export const { reducer: defaultReducer, actions: defaultActions } = defaultSlice

export type defaultState = ReturnType<typeof defaultReducer>
