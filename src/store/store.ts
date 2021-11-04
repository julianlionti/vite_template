import { configureStore } from '@reduxjs/toolkit'
import teamsSlice from '../reducers/teamsSlice'

export const store = configureStore({
  reducer: {
    teams: teamsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
