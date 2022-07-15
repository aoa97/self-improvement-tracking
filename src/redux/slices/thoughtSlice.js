import { createSlice } from "@reduxjs/toolkit";

const thoughtSlice = createSlice({
  name: "thought",
  initialState: {
    thoughtList: [],
  },
  reducers: {
    createThought: (state, action) => {
      const thought = {
        id: Math.trunc(Math.random() * 100 + +new Date()),
        createdAt: new Date().toISOString(),
        ...action.payload,
      };
      state.thoughtList.push(thought);
    },
  },
});

export const createThought = thoughtSlice.actions.createThought;
export default thoughtSlice.reducer;
