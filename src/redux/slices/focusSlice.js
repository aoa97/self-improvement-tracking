import { createSlice } from "@reduxjs/toolkit";

const focusSlice = createSlice({
  name: "focus",
  initialState: {
    focusList: [],
  },
  reducers: {
    addFocusItem: (state, action) => {
      const item = {
        id: Math.ceil(Math.random() * 50),
        createdAt: new Date().toISOString(),
        completed: false,
        text: action.payload,
      };
      state.focusList.push(item);
    },
    toggleCompleteItem: (state, action) => {
      const id = action.payload;
      const item = state.focusList.find((x) => x.id === id);
      item.completed = !item.completed;
    },
  },
});

export const addFocusItem = focusSlice.actions.addFocusItem;
export const toggleCompleteItem = focusSlice.actions.toggleCompleteItem;
export default focusSlice.reducer;
