import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const sectionSlice = createSlice({
  name: 'sections',
  initialState: [],
  reducers: {
    addSection(state, action) {
      state.push({...action.payload, id: uuidv4()});
    },
    // New reducer for adding a task item
    addTaskItem(state, action) {
      // Assuming you want to add the task item under a specific section
      const section = state.find(section => section.id === action.payload.sectionId);
      if (section) {
        if (!section.tasks) {
          section.tasks = []; // Initialize tasks array if it doesn't exist
        }
        section.tasks.push({
          id: uuidv4(),
          title: action.payload.title,
          description: action.payload.description
        });
      }
    }
  },
});

export const { addSection, addTaskItem } = sectionSlice.actions
export default sectionSlice.reducer