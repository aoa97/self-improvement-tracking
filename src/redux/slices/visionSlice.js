import { createSlice } from "@reduxjs/toolkit";

const visionSlice = createSlice({
  name: "vision",
  initialState: {
    visionList: [],
  },
  reducers: {
    createVision: (state, action) => {
      const { vision: visionText } = action.payload;
      const vision = {
        id: Math.trunc(Math.random() * 100 + +new Date()),
        createdAt: Date.now(),
        visionText,
      };
      state.visionList.push(vision);
    },
  },
});

export const createVision = visionSlice.actions.createVision;
export default visionSlice.reducer;
