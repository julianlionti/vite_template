import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TeamsState {
  teams: string[]
}

const initialState: TeamsState = {
  teams: [],
}

const sliceName = 'teams'
export const teamsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (!state.teams.includes(action.payload))
        state.teams.push(action.payload)
    },
    remove: (state, action: PayloadAction<string>) => {
      state.teams = state.teams.filter((team) => team !== action.payload)
    },
    clear: (state) => initialState,
  },
})

export const { add, clear, remove } = teamsSlice.actions
export default teamsSlice.reducer
