import { createSlice } from "@reduxjs/toolkit";

const thoughtSlice = createSlice({
  name: "thought",
  initialState: {
    thoughtList: [],
  },
  reducers: {
    createThought: (state, action) => {
      const { journal } = action.payload;
      const thought = {
        id: Math.trunc(Math.random() * 100 + +new Date()),
        createdAt: Date.now(),
        journal,
      };
      state.thoughtList.push(thought);
    },
  },
});

export const createThought = thoughtSlice.actions.createThought;
export default thoughtSlice.reducer;
