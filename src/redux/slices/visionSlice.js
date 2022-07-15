import { createSlice } from "@reduxjs/toolkit";

const visionSlice = createSlice({
  name: "vision",
  initialState: {
    visionList: [],
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
