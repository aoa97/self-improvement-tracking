import { createSlice } from "@reduxjs/toolkit";

const thoughtSlice = createSlice({
  name: "thought",
  initialState: {
    thoughtList: [
      {
        id: 1,
        createdAt: "2022-07-05",
        groups: ["Family"],
        description:
          "A new thought at family. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
      {
        id: 2,
        createdAt: "2022-07-09",
        groups: ["Friends"],
        description:
          "A new thought at friends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
      {
        id: 3,
        createdAt: "2022-07-09",
        groups: ["Friends", "Family"],
        description:
          "A new thought at friends and family. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
    ],
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
