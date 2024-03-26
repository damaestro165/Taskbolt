import { configureStore, combineReducers } from '@reduxjs/toolkit'
import sectionSlice from './slices/sectionSlice'
import { addSection, addTaskItem } from './slices/sectionSlice'

// const rootReducer = combineReducers({
  
  
// });


 const store = configureStore({
  reducer: {
    sections: sectionSlice,
  },
})
export{
    store,
    addSection,
    addTaskItem
}