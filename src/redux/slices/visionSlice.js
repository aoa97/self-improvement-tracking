import { createSlice } from "@reduxjs/toolkit";

const visionSlice = createSlice({
  name: "vision",
  initialState: {
    visionList: [
      {
        id: 1,
        description:
          "This is the first vision at family and friends. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum numquam et delectus, perferendis illo blanditiis, dolorum hic reiciendis beatae illum consectetur odit est tempora, sapiente quis rem voluptates dolores.",
        groups: ["Family", "Friends"],
      },
      {
        id: 2,
        description:
          "This is the second vision at work and friends. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius harum numquam et delectus, perferendis illo blanditiis, dolorum hic reiciendis beatae illum consectetur odit est tempora, sapiente quis rem voluptates dolores.",
        groups: ["Work", "Friends"],
      },
    ],
  },
  reducers: {
    createVision: (state, action) => {
      const vision = {
        id: Math.trunc(Math.random() * 100 + +new Date()),
        createdAt: Date.now(),
        ...action.payload,
      };
      state.visionList.push(vision);
    },
  },
});

export const createVision = visionSlice.actions.createVision;
export default visionSlice.reducer;
