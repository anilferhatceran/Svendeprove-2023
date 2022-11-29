import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggleModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleOn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.toggleModal = true
    },
    toggleOff: (state) => {
      state.toggleModal = false
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { toggleOn, toggleOff,  } = modalSlice.actions

export default modalSlice.reducer