import { createSlice } from "@reduxjs/toolkit";

const visionSlice = createSlice({
  name: "vision",
  initialState: {
    visionList: [
      {
        id: 1,
        createdAt: "2022-07-05",
        groups: ["Family"],
        description:
          "A new vision at family. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
      {
        id: 2,
        createdAt: "2022-07-09",
        groups: ["Friends"],
        description:
          "A new vision at friends. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
      {
        id: 3,
        createdAt: "2022-07-09",
        groups: ["Friends", "Family"],
        description:
          "A new vision at friends and family. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad et veritatis porro vitae. Hic voluptates ipsam quam eligendi nihil obcaecati, animi magnam ratione maxime? Dolorum animi aut blanditiis deserunt.",
      },
    ],
  },
  reducers: {
    createVision: (state, action) => {
      const vision = {
        id: Math.trunc(Math.random() * 100 + +new Date()),
        createdAt: new Date().toISOString(),
        ...action.payload,
      };
      state.visionList.push(vision);
    },
  },
});

export const createVision = visionSlice.actions.createVision;
export default visionSlice.reducer;
