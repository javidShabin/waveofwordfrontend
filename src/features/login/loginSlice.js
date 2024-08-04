import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'name',
  initialState: {
    loggedIn: true
  },
  reducers: {
    changeLoginStatus: (state, action) => {
        state.loggedIn = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeLoginStatust } = loginSlice.actions

export default loginSlice.reducer