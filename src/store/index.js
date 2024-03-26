import { configureStore } from '@reduxjs/toolkit'
import sectionSlice from './slices/sectionSlice'
import { addSection } from './slices/sectionSlice'


 const store = configureStore({
  reducer: {
    sections:  sectionSlice,
    
  },
})
export{
    store,
    addSection
}