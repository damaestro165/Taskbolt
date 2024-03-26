import { createSlice } from '@reduxjs/toolkit'

const sectionSlice = createSlice({
  name: 'sections',
  initialState: [],
  reducers: {
    addSection(state, action) {
      state.push({
        name: action.payload,   
      })
    },
   
  },
})

export const { addSection } = sectionSlice.actions
export default sectionSlice.reducer