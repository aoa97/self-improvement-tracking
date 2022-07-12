import { createSlice } from "@reduxjs/toolkit";

const thoughtSlice = createSlice({
  name: "thought",
  initialState: {
    thoughtList: [
      {
        id: 1,
        description:
          "This is the first journal at family. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum numquam et delectus, perferendis illo blanditiis, dolorum hic reiciendis beatae illum consectetur odit est tempora, sapiente quis rem voluptates dolores.",
        groups: ["Family"],
        createdAt: "2022-07-09"
      },
      {
        id: 2,
        description:
          "This is the second journal at friends. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum numquam et delectus, perferendis illo blanditiis, dolorum hic reiciendis beatae illum consectetur odit est tempora, sapiente quis rem voluptates dolores.",
        groups: ["Friends"],
        createdAt: "2022-07-12"
      },
      {
        id: 3,
        description:
          "This is the second journal at friends and work. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum numquam et delectus, perferendis illo blanditiis, dolorum hic reiciendis beatae illum consectetur odit est tempora, sapiente quis rem voluptates dolores.",
        groups: ["Friends", "Work"],
        createdAt: "2022-07-11"
      },
    ],
  },
  reducers: {
    createThought: (state, action) => {
      const thought = {
        id: Math.trunc(Math.random() * 100 + +new Date()),
        createdAt: Date.now(),
        ...action.payload,
      };
      state.thoughtList.push(thought);
    },
  },
});

export const createThought = thoughtSlice.actions.createThought;
export default thoughtSlice.reducer;
